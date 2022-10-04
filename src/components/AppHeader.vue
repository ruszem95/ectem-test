<template>
  <header>
    <b-container class="p-2">
      <b-row>
        <b-col>
          <app-logo />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script lang="ts">
import AppLogo from "@/components/AppLogo.vue";

export default {
  components: { AppLogo },
};
</script>

<style lang="scss" scoped>
header {
  background: #999;
}
</style>
