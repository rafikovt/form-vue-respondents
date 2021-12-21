<template>
  <div>
    <condition class="condition-form" v-for="i in count" :key="i" :id="i" @addQuestion="onQuestionAdd"/>
    <button class="btn-new" @click.prevent="count++">Добавить вопрос</button>
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

<style lang="scss" scoped>
.btn-new {
  width: 100%;
  padding: 5rem 0;
  cursor: pointer;
  background: #fff;
  border-radius: .5rem;
  color: #05a332;
  border: .1rem solid gray;

  &:hover {
    color: #32e559;
    border-color: #32e559;
  }
}

.condition {
  &-form {
    &:nth-child(2n) {
      background-color: #E1F5FE;
    }

    &:nth-child(3n) {
      background-color: #E8F5E9;
    }
  }
}
</style>
