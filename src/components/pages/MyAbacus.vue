<script>
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<template>
  <MyHeader></MyHeader>
  <h2 class="abacus">aba</h2>
  <MyFooter></MyFooter>
</template>

<style>
.abacus {
  padding-top: 4rem;
  width: 80vw;
  margin: auto;
}
</style>
