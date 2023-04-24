
pipeline {
  agent any
  environment {
    currentDate = sh(returnStdout: true, script: 'date +%Y%m%d-%H%M').trim()
    packageJSON = ''
    packageName = ''
    packageVersion = ''
  }
  tools {
    nodejs 'nodejs-18'
  }
  stages {
    stage('Enumerating package.json') {
      steps {
        script {
          packageJSON = readJSON file: 'package.json'
          packageVersion = packageJSON.version
          packageName = packageJSON.name
        }
      }
    }
    stage('Install Node Modules') {
      steps {
        sh 'npm install'
      }
    }
    stage('Sonarqube: Scanning & Uploading project report') {
      steps {
        script {
          withSonarQubeEnv('sonar-docker') {
            sh "${tool('sonarscan')}/bin/sonar-scanner -Dsonar.projectKey=${packageName} -Dsonar.projectName=${packageName}"
          }
        }
      }
    }
    stage("Sonarqube: Quality Check Gate") {
      steps {
        script {
          def qualitygate = waitForQualityGate()
          sleep(10)
          if (qualitygate.status != "OK") {
            waitForQualityGate abortPipeline: false
          }
        }
      }
    }
    stage('Build') {
      steps {
        sh 'quasar build'
      }
    }
    stage('Creating Artifact'){
      steps {
        sh 'tar -czvf "'+packageName+'-${currentDate}.tar.gz" ./dist/spa/*'
        archiveArtifacts artifacts: packageName+'-*.tar.gz'
      }
    }
    stage("Nexus Repository: Uploading artifact to repository"){
        steps {
            script {
                nexusArtifactUploader artifacts: [[artifactId: packageName, classifier: '', file: packageName+'-'+currentDate+'.tar.gz', type: 'zip']], credentialsId: '418c934e-01be-4a3f-a38e-6cdaac0e399d', groupId: 'dhairya', nexusUrl: 'nexus.brainysoftwares.com', nexusVersion: 'nexus3', protocol: 'https', repository: 'client_artifacts', version: packageVersion
            }
        }
    }
  }
}
