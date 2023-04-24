<template>
  <q-page class="q-ma-sm">

    <h6>Score Chart</h6>
    <vue-apex-charts type="bar" height="350" :options="chartByOvers" :series="runByOvers"></vue-apex-charts>
    <vue-apex-charts type="line" height="350" :options="chartByOvers" :series="scoreAtOvers"></vue-apex-charts> -->
  </q-page>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: { VueApexCharts },
  data () {
    return {
      testArray: [],
      testObject: {},
      scoreDataSetA: {
        overs: {}
      },
      scoreDataSetB: {
        overs: {}
      },
      chartOptions: {
        chart: {
          height: '350',
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Score Trend',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: [],
        }
      }
    }
  },
  computed: {
    chartByBalls () {
      let chartByBalls = JSON.parse(JSON.stringify(this.chartOptions))
      this.runByBalls.forEach(b => {
        chartByBalls.xaxis.categories.push('B')
      })

      return chartByBalls
    },
    runByBalls () {
      let balls = []
      Object.keys(this.scoreDataSetA.overs).forEach(key => {
        this.scoreDataSetA.overs[key].balls.forEach(ball => {
          balls.push(ball.score)
        })
      })
      return balls
    },
    chartByOvers () {


      let chartByOvers = JSON.parse(JSON.stringify(this.chartOptions))

      Object.keys(this.scoreDataSetA.overs).forEach(overNo => {
        let searchNoball = this.scoreDataSetA.overs[overNo].balls.find(ball => {

          return ball.noBall
        })
        console.log(searchNoball)
        chartByOvers.xaxis.categories.push(overNo + '(' + this.scoreDataSetA.overs[overNo].balls.length + ')')
      })
      return chartByOvers
    },
    runByOvers () {
      let teams = [{ name: 'TeamA', dataSet: 'scoreDataSetA' }, { name: 'TeamB', dataSet: 'scoreDataSetB' }]
      teams = teams.map(team => {
        team.data = Object.keys(this[team.dataSet].overs).map(overNo => {
          return this[team.dataSet].overs[overNo].balls.reduce((prev, ball) => { return prev + ball.score }, 0)
        })

        return team
      })

      return teams
    },
    scoreAtOvers () {

      let runByOvers = JSON.parse(JSON.stringify(this.runByOvers))
      console.log(runByOvers)
      let scoreAtOvers = runByOvers.map(team => {
        let score = 0
        team.data = team.data.map(run => {
          score = score + run
          return score
        })
        return team
      })
      console.log(scoreAtOvers)
      return scoreAtOvers

    }
  },
  methods: {
    generateOvers (overs) {
      for (let i = 1; i <= 20; i++) {
        let over = []
        for (let j = 1; j <= 6;) {
          let normalBall = Math.floor(Math.random() * (120 + 1) + 0) > 6

          let ball = { ball: j, score: this.generateRun(), batsman: 'iucfu', noBall: !normalBall }
          if (normalBall) {
            j = j + 1
          }
          over.push(ball)

        }
        overs[i] = { balls: over }
      }
    },
    generateRun () {
      return Math.floor(Math.random() * (6 + 1) + 0)
    }
  },
  mounted () {

  },
  created () {
    console.log('Array', this.testArray)
    console.log('Object', this.testObject)
    this.generateOvers(this.scoreDataSetA.overs)
    this.generateOvers(this.scoreDataSetB.overs)
    console.log(this.scoreDataSetA, this.scoreDataSetB)
  }
}

</script>
