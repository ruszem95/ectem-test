import Vue from "vue";
import Vuex from "vuex";
import { testCategoryData, testTreeDataList } from "@/data";
import { TreeDataItem } from "@/models";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: testCategoryData(),
    treesData: testTreeDataList(),
    activeMenuItemId: null as string | null,
  },
  getters: {
    activeTreeList(state) {
      if (state.activeMenuItemId == null) return null;
      return state.treesData.find((t) => t.parentId === state.activeMenuItemId);
    },
    allTreeDataItems(state) {
      return state.treesData
        .map((i) => i.items.map((i) => i.items).flat())
        .flat();
    },
  },
  mutations: {
    setActiveMenuItemId(state, id: string | null) {
      state.activeMenuItemId = id;
    },
    setTreeItemValue(state, payload: { item: TreeDataItem; value: number }) {
      payload.item.value = payload.value;
    },
  },
  actions: {
    setActiveMenuItemId({ commit }, id: string | null) {
      commit("setActiveMenuItemId", id);
    },
    setTreeItemValue(
      { commit, getters },
      payload: { id: number; value: number }
    ) {
      const item = getters.allTreeDataItems.find(
        (i: TreeDataItem) => i.id === payload.id
      );
      if (!item) return;
      commit("setTreeItemValue", {
        item,
        value: payload.value,
      });
    },
  },
  modules: {},
});
