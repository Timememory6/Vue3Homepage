<template>
  <div class="MyLanguages">
    <h2 class="title">Available Languages</h2>
    <div class="languageType">
      <p>組み込み</p>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg"
        />
      </div>
    </div>
    <div class="languageType">
      <p>フロントエンド</p>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
        />
      </div>
    </div>
    <div class="languageType">
      <p>データ解析</p>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg"
        />
      </div>
    </div>
  </div>
</template>

<style>
.languageType {
  margin: auto;
  width: 50vw;
  padding: 1rem;
  border-bottom: 0.1rem black solid;
}

.languageType:last-of-type {
  border-bottom: 0;
}

.languageType > div {
  display: flex;
  justify-content: space-evenly;
}
</style>
