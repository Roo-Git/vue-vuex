<template>
  <button @click="addOne">Add 1</button>
  <button @click="addTwoWithPayload">Add 2</button>
  <button @click="addFourWithAction">Add 4 async</button>
  <button @click="increment">Add 1 with async action</button>
  <button @click="increase({ value: 4 })">Add 4 with async action</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Change-counter",
  methods: {
    ...mapActions(["increment", "increase"]),
    addOne() {
      this.$store.commit("increment");
    },
    addTwoWithPayload() {
      this.$store.commit("increase", { value: 2 });
    },
    addFourWithAction() {
      this.$store.dispatch("increase", { value: 4 });
    },
  },
};
</script>

<style></style>
