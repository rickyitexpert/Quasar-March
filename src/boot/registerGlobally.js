import { boot } from 'quasar/wrappers'
import validations from '../mixins/validations.js'
export default boot(({ app }) => {
  app.mixin(validations)
})


