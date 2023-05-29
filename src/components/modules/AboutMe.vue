<script>
export default {
  data() {
    return {
      myInfos: {
        名前: "宗田 明紘",
        大学: "早稲田大学",
        "学科/専攻": "電子物理システム学科",
        年齢: 19,
      },
    };
  },
};
</script>

<template>
  <div class="aboutMe">
    <h2 class="title">About</h2>
    <ul>
      <li v-for="(myInfo, type) in myInfos" :key="type">
        <div class="type">
          <p>{{ type }}</p>
        </div>
        <div clcass="myInfo">
          <p>{{ myInfo }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.myInfo {
  padding: 0.2rem;
}

.aboutMe {
  padding: 0.1rem;
  padding-top: 0.5rem;
}

.type {
  font-weight: bold;
}
</style>
