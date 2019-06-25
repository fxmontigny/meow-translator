<template>
  <div class="translator-wrapper">
    <div class="left-panel">
      <h1>Meow translator</h1>
      <p>
        This is not a certified translator.
        <br>But you can try to talk with your cat, just for fun.😅
      </p>
      <TranslatorPanel class="TranslatorPanel"/>
    </div>
    <div class="background-panel"></div>
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

.translator-wrapper {
  @include flex();
  height: 100%;

  > div {
    &.left-panel {
      flex: 40;
      max-width: 450px;
      background-color: #e9f1ff;
      padding: 32px 32px 16px 32px;
      @include flex();
      @include flex-direction(column);

      .TranslatorPanel {
        flex: 1;
      }
    }

    &.background-panel {
      flex: 60;
      background-image: url("../../assets/background.jpg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    @media screen and (max-width: 900px) {
      &.left-panel {
        max-width: none;
      }

      &.background-panel {
        display: none;
      }
    }
  }
}
</style>
