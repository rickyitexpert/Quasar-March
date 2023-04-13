export default {
  methods: {
    validationMandatory (val) {
      return !!val || 'This field is mandatory'
    },
    validationNoSymbols (val) {
      return val.match(/\W/) === null || 'Only Alpha Numeric Characters Allowed'
    },
  }
}
