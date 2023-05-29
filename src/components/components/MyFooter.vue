<script>
import MyLogo from "../basics/MyLogo.vue";

export default {
  components: {
    MyLogo,
  },
  methods: {
    clickHeaderMenu: function () {
      this.isClickHeaderMenu = !this.isClickHeaderMenu;
    },
  },
};
</script>

<template>
  <div class="footer">
    <MyLogo></MyLogo>
    <p>©2023 AKIHIRO MUNETA</p>
  </div>
</template>

<style>
.footer {
  padding: 1rem;
  display: flex;
  flex-wrap: nowrap;
  flex-flow: column;
  justify-content: center;
  background-color: grey;
  height: 6rem;
}

.footer img {
  margin: auto;
}

.footer p {
  margin-bottom: 0;
}
</style>
