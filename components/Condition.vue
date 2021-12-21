<template>
  <div class="condition">
    <div class="condition-row condition-row__title">
      <span class="condition-title" v-text="`Условие ${id}`"/>
      <Select :options-list="options" @change="onChange"/>
    </div>
    <div class="condition-row condition-row__main" v-if="additionalParams && additionalParams.length">
      <Select @change="addAnswer" v-for="i in count" :key="i" :options-list="additionalParams"/>
    </div>
    <div class="condition-row__main" v-else>
      <Input v-for="i in count" :key="i" :id="i" @change="addAnswer"/>
    </div>
    <button v-show="questionData.question" class="btn" @click.prevent="add">{{titleBtn}}</button>
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
    }
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
  padding: 2rem 3rem;
  border-bottom: .1rem solid gray;
  background-color: #fcf0cf;
  color: #bfa154;

  &-title {
    font-size: 1.8rem;
  }

  &-row {
    display: flex;
    justify-content: space-between;

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
</style>
