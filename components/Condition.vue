<template>
  <div>
    <div>
      <Select :options-list="options" @change="onChange"/>
    </div>
    <div v-if="additionalParams && additionalParams.length">
      <Select @change="addAnswer" v-for="i in count" :key="i" :options-list="additionalParams"/>
    </div>
    <div v-else>
      <Input v-for="i in count" :key="i" :id="i" @change="addAnswer"/>
    </div>
    <button @click.prevent="add">Добавить</button>
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
  data() {
    return {
      options: this.$store.state.optionsList,
      selectedOption: 1,
      count: 0,
      to: '',
      from: '',
      error: false,
      questionData: {
        question: this.$store.state.optionsList[0].value,
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
  }
}
</script>
