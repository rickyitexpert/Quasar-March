<template>
  <q-form>
    <h6>Enter Bank Account Details</h6>
    <q-input label="Bank Name" :rules="[validationMandatory]" />
    <q-input label="Branch" />
    <q-input label="IFSC Code" />
    <q-input label="Account Holder Name" />
    <q-input label="Account Number" />
    <q-select label="Organisation"></q-select>
  </q-form>
</template>
<script>
export default {

}
</script>
