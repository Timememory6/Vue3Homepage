<script>
export default {
  props: {
    isCareerDetail: Boolean,
  },
  data() {
    return {
      careers: [
        {
          year: 2020,
          age: 16,
          event: "コロナの影響で時間ができたため、プログラミングを始める",
          detail:
            "時間が余った時にもとから興味のあったプログラミングを始めようと思い決心。最初は勉強法も迷走して上達しなかった。",
        },
        {
          year: 2021,
          age: 17,
          event: "フロントエンドに興味を持ち、自己紹介サイトを作成",
          detail:
            "サイト一つでなんでも表現できることに感動して自分も作ろうと思った。また、マネタイズ方法もあって夢があると感じた",
        },
        {
          year: 2022,
          age: 18,
          event:
            "バックエンドに興味を持ち、レンタルサーバーでサイトの管理を開始",
          detail:
            "フロントエンドをやっている間に裏でどうなっているのだろうと疑問に思い、勉強を始めた。",
        },
        {
          year: 2023,
          age: 19,
          event: "通信技術への興味から通信関連の研究のできる同学科へ進学",
          detail:
            "バックエンドの勉強中に通信自体にも興味を持って通信研究をしたいと考えた。アマチュア無線も始めたのでプロトコルなどを作ってみたいと思う。",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="MyCareer">
    <h2 class="title">Career</h2>
    <ul>
      <li v-for="career in careers" :key="career">
        <div class="career">
          <p>
            {{
              career.year + " " + "(" + career.age + "歳)" + "…" + career.event
            }}
          </p>
          <p v-if="isCareerDetail">
            {{ career.detail }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.career p {
  text-align: left;
}
</style>
