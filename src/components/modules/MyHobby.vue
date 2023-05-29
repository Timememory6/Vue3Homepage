<script>
export default {
  data() {
    return {
      hoverFlag: {
        soroban: false,
        travel: false,
        boardgame: false,
        program: false,
      },
    };
  },
  methods: {
    mouseOverAction(value) {
      this.hoverFlag[value] = true;
    },
    mouseLeaveAction(value) {
      this.hoverFlag[value] = false;
    },
  },
};
</script>

<template>
  <div class="MyHobby">
    <h2 class="title">Hobby</h2>
    <div class="hobbies">
      <div class="hobby soroban">
        <p>そろばん</p>
        <div
          @mouseover="mouseOverAction('soroban')"
          @mouseleave="mouseLeaveAction('soroban')"
        >
          <Transition>
            <img src="/assets/img/soroban.png" v-if="hoverFlag.soroban" />
          </Transition>
          <Transition>
            <img src="/assets/img/soroban_boy.png" v-if="!hoverFlag.soroban" />
          </Transition>
        </div>
      </div>
      <div class="hobby travel">
        <p>旅行</p>
        <div
          @mouseover="mouseOverAction('travel')"
          @mouseleave="mouseLeaveAction('travel')"
        >
          <img src="/assets/img/mountain_yama.png" class="pre" />
          <Transition>
            <img
              src="/assets/img/kumo.png"
              class="last"
              v-if="!hoverFlag.travel"
            />
          </Transition>
        </div>
      </div>
      <div class="hobby boardgame">
        <p>ボードゲーム</p>
        <div
          @mouseover="mouseOverAction('boardgame')"
          @mouseleave="mouseLeaveAction('boardgame')"
        >
          <Transition>
            <img
              src="/assets/img/game_backgammon_start.png"
              class="pre"
              v-if="hoverFlag.boardgame"
            />
          </Transition>
          <Transition>
            <img
              src="/assets/img/game_reversi_board.png"
              class="middle"
              v-if="!hoverFlag.boardgame"
            />
          </Transition>
        </div>
      </div>
      <div class="hobby program">
        <p>プログラミング</p>
        <div
          @mouseover="mouseOverAction('program')"
          @mouseleave="mouseLeaveAction('program')"
        >
          <Transition>
            <img
              src="/assets/img/computer_screen_programming.png"
              class="pre"
              v-if="hoverFlag.program"
            />
          </Transition>
          <Transition>
            <img
              src="/assets/img/job_programmer.png"
              class="last"
              v-if="!hoverFlag.program"
            />
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hobbies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.hobby {
  height: 17.5rem;
  width: 45%;
}

.hobby > div {
  position: relative;
  height: 10rem;
}

.hobby img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
