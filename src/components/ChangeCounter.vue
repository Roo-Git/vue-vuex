<template>
  <button @click="addOne">Add 1</button>
  <button @click="addTwoWithPayload">Add 2</button>
  <button @click="addFourWithAction">Add 4 async</button>
</template>

<script>
export default {
  name: "Change-counter",
  methods: {
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
