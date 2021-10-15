<template>
  <v-col class="ma-0 pa-0">
    <v-col class="green darken-4 justify-center align-center d-md-none d-flex">
      <v-col class="primary align-center d-flex justify-end">
        <v-icon class="white--text" size="32">
          mdi-menu
        </v-icon>
        <h1 class="white--text">Oskar Ljungdahl</h1>
		<h5>frontedutvecklare</h5>
      </v-col>
    </v-col>
    <!-- mobil slut -->
    <v-col
      class="cyan darken-4 justify-center align-center d-sm-none d-md-flex d-flex pa-0 ma-0"
    >
      <p>laptop desktop!</p>
    </v-col>
  </v-col>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Montserrat:wght@100;200;300;400&display=swap");

h1 {
  /* font-family: "Comfortaa", ; */
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
</style>
