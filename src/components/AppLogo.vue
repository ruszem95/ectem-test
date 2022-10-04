<template>
  <div class="logo">
    <b-icon-flower3 class="logo__icon" />
    <div class="logo__text">Logo</div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 32px;

  &__icon {
    margin-right: 0.05em;
    font-size: 1.5em;
  }

  &__text {
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
