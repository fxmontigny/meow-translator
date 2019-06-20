<template>
  <div class="translator-panel">
    <p>TODO Record button</p>
    <div contenteditable="true" v-html="humanMessage" @focusout="onHumanMessageChange"></div>
    <button @click="onTranslate">Translate</button>
    <p>----- To ------</p>
    <div class="translated-text" v-html="catMessage"></div>
    <p>TODO sound button</p>
  </div>
</template>

<script>
import CatTranslator from "../../libs/cat-translator";

export default {
  name: "TranslatorPanel",
  data() {
    return {
      humanMessage: `Hi,
          <br>beautiful cat.
          <br>How are you?`,
      catMessage: null
    };
  },
  methods: {
    onTranslate() {
      this.catMessage = CatTranslator.translateText(this.humanMessage);
    },
    onHumanMessageChange(event) {
      this.humanMessage = event.target.innerHTML;
    }
  },
  mounted() {
    this.onTranslate();
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/utils";

.translator-panel {
  @include flex();
  @include flex-direction(column);
}
</style>
