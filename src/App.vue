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

<style>
@import "./assets/styles/global.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
