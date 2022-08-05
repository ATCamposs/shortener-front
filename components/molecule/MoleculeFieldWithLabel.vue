<template>
  <div>
    <AtomLabel :name="name" :description="description" /><br v-if="breakLine">
    <AtomInput :name="name" />
  </div>
</template>
<script>
export default {
  name: 'MoleculeFieldWithLabel',
  props: {
    name: {
      type: String,
      default: 'defaultName'
    },
    description: {
      type: String,
      default: 'defaultDescription'
    },
    breakLine: {
      type: Boolean,
      default: true
    }
  }
}
</script>
