<template>
  <main>
    <b-container class="main-container py-2">
      <b-row>
        <b-col sm="4">
          <categories-list :items="categories" />
        </b-col>
        <b-col>
          <trees-list />
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script lang="ts">
import CategoriesList from "@/components/CategoriesList.vue";
import TreesList from "@/components/TreesList.vue";
import { ICategoryListItemData } from "@/models";

export default {
  components: { TreesList, CategoriesList },
  computed: {
    categories(): ICategoryListItemData[] {
      return this.$store.state.categories;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  background: #f7f7f7;
}
</style>
