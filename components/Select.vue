<template>
  <div class="select-container">
    <select @change="onSelectChange">
      <option>Выберите условие</option>
      <option v-for="option in optionsList" :key="option.id" :value="option.id">{{ option.value }}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'Select',
  props: {
    optionsList: {
      type: Array,
      required: false,
    }
  },

  methods: {
    onSelectChange(evt) {
      this.$emit('change', evt.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  &-container {
    margin-bottom: 2rem;
  }
}
</style>


