<script>
import MyLogo from "../basics/MyLogo.vue";

export default {
  components: {
    MyLogo,
  },
  data() {
    return {
      isClickHeaderMenu: false,
    };
  },
  methods: {
    clickHeaderMenu: function () {
      this.isClickHeaderMenu = !this.isClickHeaderMenu;
    },
  },
};
</script>

<template>
  <div class="header">
    <MyLogo></MyLogo>
    <div>
      <img
        src="/assets/img/menu.png"
        @click="clickHeaderMenu"
        :class="['menu-button', { 'is-active': isClickHeaderMenu }]"
      />
      <Transition name="menu">
        <div class="menu" v-if="isClickHeaderMenu">
          <router-link to="/" class="menu_item">Home</router-link>
          <router-link to="/abacus" class="menu_item">Abacus</router-link>
          <router-link to="/career" class="menu_item">Career</router-link>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  padding: 0.1rem;
  border-bottom: rgba(12, 50, 78, 0.4) solid 0.1rem;
  position: fixed;
  height: 4rem;
  width: 100%;
  top: 0;
  left: 0;
  background-color: grey;
  z-index: 10;
}

.menu-button {
  position: fixed;
  right: 0px;
  z-index: 3;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.menu-button.is-active {
  border: 1px solid #fff;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #555;
}

.menu_item {
  width: 100%;
  height: auto;
  font-size: 2rem;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

.menu-enter-to {
  transition: transform 1.3s ease-out;
  transform: translateX(0px);
}
.menu-enter-from {
  transform: translateX(100vw);
}

.menu-leave-to {
  transition: transform 1.3s ease-out;
  transform: translateX(100vw);
}
.menu-leave-from {
  transform: translateX(0px);
}
</style>
