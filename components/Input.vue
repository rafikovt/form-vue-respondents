<template>
  <div class="input-container">
    <span v-text="`${id > 1 ? 'или ' : ''}Диапазон ${id}`"></span>
    <div>
      <label>
        <span>От</span>
        <input
          class="condition-input"
          @change="onChange"
          v-model="from"
          type="text"
          v-digitsonly>
      </label>
      <label>
        <span>От</span>
        <input
          class="condition-input"
          @change="onChange"
          v-model="to"
          type="text"
          v-digitsonly
        >
      </label>
    </div>
  </div>

</template>

<script>
import {JustDigits} from './common/filters';
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
  },

  mounted() {
    JustDigits();
  }
}
</script>

<style lang="scss" scoped>
.input {
  &-container {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-bottom: 2rem;
  }
}

.condition {
  &-input {
    min-height: 3rem;
    border: .1rem solid #DCDCDC;
    border-radius: .5rem;
  }
}
</style>
