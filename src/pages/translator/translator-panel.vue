<template>
  <div class="translator-panel">
    <div class="list">
      <div class="sub-list">
        <TranslatorPanelRow
          v-for="message in list"
          :key="message.id"
          :message="message"
          class="TranslatorPanelRow"
        ></TranslatorPanelRow>
      </div>
    </div>
    <!--<p>TODO Record button</p>-->
    <div contenteditable="true" v-html="humanMessage" @focusout="onHumanMessageChange"></div>
    <div class="actions-button">
      <button @click="onTranslate" color="primary">Translate</button>
    </div>
    <!--<div class="translated-text" v-html="catMessage"></div>-->
    <!--<p>TODO sound button</p>-->
  </div>
</template>

<script>
import CatTranslator from "../../libs/cat-translator";
import TranslatorPanelRow from "./translator-panel-row.vue";

export default {
  name: "TranslatorPanel",
  components: {
    TranslatorPanelRow
  },
  data() {
    return {
      humanMessage: `Hi,
          <br>beautiful cat.
          <br>How are you?`,
      catMessage: null,
      list: []
    };
  },
  methods: {
    onTranslate() {
      this.catMessage = CatTranslator.translateText(this.humanMessage);
      this.list.push({
        humanMessage: this.humanMessage,
        catMessage: this.catMessage
      });
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

  .list {
    flex: 1;
    position: relative;

    .sub-list {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 8px;
      overflow: auto;

      .TranslatorPanelRow {
        margin-bottom: 16px;
      }
    }
  }

  div[contentEditable] {
    background-color: white;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 16px;
  }

  .actions-button {
    text-align: right;
  }
}
</style>
