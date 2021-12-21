<template>
  <div>
    <span v-text="`${id > 1 ? 'или ' : ''}Диапазон ${id}`"></span>
    <label>
      <span>От</span>
      <input @change="onChange" v-model="from" type="text">
    </label>
    <label>
      <span>От</span>
      <input @change="onChange" v-model="to" type="text">
    </label>
  </div>

</template>

<script>
export default {
  name: 'Input',
  props: {
    id: {
      type: Number,
      required: true,
      default: 0,
    }
  },

  data() {
    return {
      from: '',
      to: '',
    }
  },

  methods: {
    onChange() {
        this.$emit('change', {from: this.from, to: this.to})
    }
  }
}
</script>
