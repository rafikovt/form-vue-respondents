<template>
  <div>
    <condition v-for="i in count" :key="i" @addQuestion="onQuestionAdd"/>
    <button @click.prevent="count++">Добавить вопрос</button>
  </div>


</template>

<script>
import Condition from "~/components/Condition";
export default {
  name: 'Form',
  components: {
    Condition,
  },

  data() {
    return {
      count: 0,
      questionsData: []
    }
  },

  methods: {
    onQuestionAdd(evt) {
      this.questionsData = this.questionsData.filter(e => e.question !== evt.question)
      this.questionsData.push(evt);
    }
  }
}
</script>
