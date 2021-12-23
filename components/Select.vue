<template>
  <div class="select-container" v-click-outside="closeSelect">
      <div
        class="option-selected"
        :class="{open: isOpened}"
        @click.prevent="toggle"
      >
        <span class="option-title" v-text="selectedValue ? selectedValue : 'Выберите условие'"/>
        <svg-icon class="icon"  name="arrow"/>
      </div>
      <div class="options-container" :class="{open: isOpened}">
        <div
          class="option"
          v-for="option in optionsList"
          :key="option.id"
          :id="option.id"
          v-text="option.value"
          @click.prevent="onChange"
        />
      </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'Select',
  props: {
    optionsList: {
      type: Array,
      required: false,
    }
  },

  data() {
    return {
      selectedValue: '',
      isOpened: false,
    }
  },

  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
    },
    onChange(evt) {
      this.isOpened = false;
      this.selectedValue = evt.target.textContent;
      this.$emit('change', evt.target.id)
    },
    closeSelect() {
      this.isOpened = false;
    }
  },

  directives: {
    clickOutside: vClickOutside.directive,
  },
}
</script>

<style lang="scss" scoped>
.select {
  &-container {
    grid-column: 2;
    margin-bottom: 2rem;
  }
}

.options-container {
  display: none;
  opacity: 0;
  background: #fff;
  border: .1rem solid #E0E0E0;
  font-size: 1.6rem;
  color: #000;
  transition: .3s;

  &.open {
    margin-top: -.3rem;
    display: block;
    opacity: 1;
  }
}

.option {
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: #F5F5F5;
  }

  &-selected {
    font-size: 1.6rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border: .1rem solid #E0E0E0;
    border-radius: .5rem;
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }

  &-title {
    margin-right: auto;
  }
}

.icon {
  width: 1rem;
  height: 1rem;
  transition: .3s;
}

.open {
  .icon {
    transform: rotate(180deg);
  }
}
</style>


