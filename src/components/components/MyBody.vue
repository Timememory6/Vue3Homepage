<script>
import AboutMe from "../modules/AboutMe.vue";
import MyCareer from "../modules/MyCareer.vue";
import MyLanguages from "../modules/MyLanguages.vue";
import MyHobby from "../modules/MyHobby.vue";

export default {
  components: {
    AboutMe,
    MyCareer,
    MyLanguages,
    MyHobby,
  },
  data() {
    return {
      isClickHeaderMenu: false,
    };
  },
  props: {},
  methods: {
    clickHeaderMenu: function () {
      this.isClickHeaderMenu = !this.isClickHeaderMenu;
    },
  },
};
</script>

<template>
  <div class="body">
    <AboutMe></AboutMe>
    <MyCareer :isCareerDetail="false"></MyCareer>
    <MyLanguages></MyLanguages>
    <MyHobby></MyHobby>
  </div>
</template>

<style>
.body {
  padding-top: 4rem;
  width: 80vw;
  margin: auto;
}

.body > div {
  padding: 3rem;
}

.title {
  margin: 0;
  padding: 0.5rem;
  border-bottom: rgba(12, 50, 78, 0.4) solid 0.1rem;
}

ul {
  padding-left: 0;
}

li {
  margin: auto;
  width: 75%;
  padding: 0.1rem;
  list-style: none;
}
</style>
