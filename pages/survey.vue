<template>
  <div class="container">
   <div v-for="item in questionsData">
     <span v-text="item.question"/>
     <label v-for="answer in item.answers">
       <input type="checkbox"/>
       <span v-text="answer"/>
     </label>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Survey',
  data() {
    return {
      questionsData: []  ,
    }
  },

  mounted() {
    this.questionsData = this.$store.state.questionsData;
  }
}
</script>
