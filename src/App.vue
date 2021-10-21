<template>
  <v-app>
    <v-col class="green align-center d-flex justify-end menu">
      <v-icon class="white--text" size="32">
        mdi-menu
      </v-icon>
    </v-col>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Montserrat:wght@100;200;400&display=swap");
* {
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}


</style>
