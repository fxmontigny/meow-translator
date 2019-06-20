<template>
  <div>
    <h1>Meow translator</h1>
    <p>This is not a certify translator.</p>
    <p>But you can try to talk with your cat, just for fun.😅</p>
    <div class="translator">
      <TranslatorPanel/>
      <div class="background-panel"></div>
    </div>
    <div class="copyright">Copyright 2019</div>
  </div>
</template>

<script>
import CatTranslator from "../../libs/cat-translator";
import TranslatorPanel from "./translator-panel";

export default {
  name: "Translator",
  components: {
    TranslatorPanel
  },
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

.translator {
  @include flex();

  > div {
    flex: 1;
  }
}

.background-panel {
  background-image: url("../../assets/background.jpg");
  background-size: auto 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>
