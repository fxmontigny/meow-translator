<template>
  <div id="app">
    <TranslatorPage/>
  </div>
</template>

<script>
import TranslatorPage from "./pages/translator/translator.vue";

export default {
  name: "app",
  components: {
    TranslatorPage
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Mali&display=swap");
@import "./assets/styles/buttons";
@import "./assets/styles/global";

#app {
  font-family: "Mali", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
