<template>
  <div>
    <form class="condition-form">
      <condition
        class="condition-form"
        v-for="(i, index) in conditions"
        :key="i"
        :id="i"
        :num="index+1"
        @addQuestion="onQuestionAdd"
        @onDeleteCondition="deleteCondition"
      />
      <button class="btn-new" @click.prevent="addCondition">Нажмите чтобы добавить условие выборки. Все условия связываются логическими "И"</button>
    </form>
    <button class="btn" v-if="conditions.length" @click.prevent="createSurvey">Создать опрос</button>
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
      conditions: [],
      questionsData: []
    }
  },

  methods: {
    onQuestionAdd(evt) {
      this.questionsData = this.questionsData.filter(e => e.question !== evt.question)
      this.questionsData.push(evt);
    },
    addCondition() {
      this.count++;
      this.conditions.push(this.count);
    },
    deleteCondition(id) {
      this.conditions = this.conditions.filter(e => e !== id)
    },
    createSurvey() {
      this.$store.dispatch('setQuestionsData', this.questionsData);
      this.$router.push('/survey')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-new {
  width: 100%;
  padding: 5rem 0;
  margin-bottom: 3rem;
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
