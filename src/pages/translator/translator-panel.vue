<template>
  <div class="translator-panel">
    <p>TODO Record button</p>
    <div contenteditable="true" v-html="humanMessage" @focusout="onHumanMessageChange"></div>
    <button @click="onTranslate" color="primary">Translate</button>
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
  @include align-items(center);

  div[contentEditable] {
    min-width: 50%;
    padding: 8px;
    border: 1px solid grey;
    margin-bottom: 16px;
  }
}
</style>
