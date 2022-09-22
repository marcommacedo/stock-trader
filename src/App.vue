<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./Components/Header.vue";

export default {
  components: { Header },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style>
</style>