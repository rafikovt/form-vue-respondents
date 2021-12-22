<template>
  <div class="condition">
    <div class="condition-row condition-row__title">
      <span class="condition-title" v-text="`Условие ${num}`"/>
      <Select :options-list="options" @change="onChange"/>
    </div>
    <div class="condition-row condition-row__main" v-if="additionalParams && additionalParams.length">
      <Select @change="addAnswer" v-for="i in count" :key="i" :options-list="additionalParams"/>
    </div>
    <div class="condition-row__main" v-else>
      <Input v-for="i in count" :key="i" :id="i" @change="addAnswer"/>
    </div>
    <div class="condition-row">
      <button v-show="questionData.question" class="btn" @click.prevent="add" v-text="titleBtn"/>
      <button class="btn btn-delete" @click.prevent="deleteCondition">Удалить условие</button>
    </div>

  </div>

</template>

<script>
import Select from "~/components/Select";
import Input from "~/components/Input";
export default {
  name: 'Condition',
  components: {
    Select,
    Input,
  },

  props: {
    id: {
      type: Number,
      required: true,
      default: 1,
    },
    num: {
      type: Number,
      required: false,
    }
  },

  data() {
    return {
      options: this.$store.state.optionsList,
      selectedOption: 1,
      count: 0,
      to: '',
      from: '',
      error: false,
      questionData: {
        question: '',
        answers: [],
      }
    }
  },

  methods: {
    onChange(evt) {
      this.count = 0;
      this.selectedOption = evt;
      this.questionData.question = this.options.find(e => e.id == evt).value;
      this.questionData.answers = [];
    },
    add() {
      this.count++
    },
    addAnswer(evt) {
      this.error = false;
      if (this.additionalParams.length) {
        const answer = this.additionalParams.find(e => e.id == evt)
        this.questionData.answers.push(answer.value)
      }

      if (!!evt.from && !!evt.to) {
        const answer = `Диапазон от ${evt.from} до ${evt.to}`;
        this.questionData.answers.push(answer)
      } else {
        this.error = true;
      }

      this.$emit('addQuestion', this.questionData)
    },

    deleteCondition() {
      this.$emit('onDeleteCondition', this.id)
    },
  },

  computed: {
    additionalParams() {
      const selected =  this.options.find(e => e.id == this.selectedOption);
      if (selected.hasOwnProperty('options')) {
        return selected.options;
      }
      return false;
    },

    titleBtn() {
      switch(this.questionData.question) {
        case 'Возраст респондента':
          return 'Добавить диапазон';
        case 'Тип карты лояльности':
          return 'Добавить тип';
        case 'Статус карты лояльности':
          return 'Добавить статус';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.condition {
  position: relative;
  padding: 2rem 3rem;
  border-bottom: .1rem solid gray;
  background-color: #fcf0cf;
  color: #bfa154;

  &:not(:first-child) {
    &::before {
      content: 'И';
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      position: absolute;
      top: -1.5rem;
      width: 3rem;
      height: 3rem;
      border: .1rem solid grey;
      background-color: #E8F5E9;
    }
  }

  &-title {
    font-size: 1.8rem;
  }

  &-row {
    display: grid;
    grid-template-columns: 25% 75%;

    &__title {
      margin-bottom: 3rem;
    }

    &__main {
      flex-direction: column;
      font-size: 1.6rem;
      color: #000;
    }
  }
}

.btn-delete {
  grid-column: 2;
  justify-self: end;
}
</style>
