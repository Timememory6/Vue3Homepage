<script>
import MyHeader from "../components/MyHeader.vue";
import MyBody from "../components/MyBody.vue";
import MyFooter from "../components/MyFooter.vue";

export default {
  components: {
    MyHeader,
    MyBody,
    MyFooter,
  },
};
</script>

<template>
  <MyHeader></MyHeader>
  <MyBody></MyBody>
  <MyFooter></MyFooter>
</template>
