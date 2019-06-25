<template>
  <div class="translator-panel-row">
    <div class="item" v-html="messageHtml"></div>
  </div>
</template>

<script>
export default {
  name: "TranslatorPanelRow",
  props: {
    message: { type: Object, default: null }
  },
  computed: {
    messageHtml: function() {
      return (
        "<p>" +
        this.message.humanMessage +
        "</p><p>----------</p><p>" +
        this.message.catMessage +
        "</p>"
      );
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/utils";

.translator-panel-row {
  .item {
    display: inline-block;
    border-radius: 8px;
    padding: 4px 8px;
    background-color: white;
  }
}
</style>
