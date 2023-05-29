<script>
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";
import MyCareer from "../modules/MyCareer.vue";

export default {
  components: {
    MyHeader,
    MyCareer,
    MyFooter,
  },
};
</script>

<template>
  <MyHeader></MyHeader>
  <MyCareer :isCareerDetail="true"></MyCareer>
  <MyFooter></MyFooter>
</template>

<style>
.test {
  padding-top: 4rem;
  width: 80vw;
  margin: auto;
}
</style>
