<template>
  <div id="app">
    <app-header />
    <app-main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";

@Component({
  components: { AppMain, AppHeader },
})
export default class App extends Vue {}
</script>

<style></style>
