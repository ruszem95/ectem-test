import Vue, { PropType } from "vue";
import { ICategoryListItemData } from "@/models";

export const categoryListItemMixin = Vue.extend({
  props: {
    item: {
      required: true,
      type: Object as PropType<ICategoryListItemData>,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    isFolder(): boolean {
      return this.item.children?.length != 0;
    },
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
});
