<template>
  <v-col class="ma-0 pa-0">
    <v-col class="green align-center d-flex justify-space-between">
      <h3 class="menu-logo-text white--text">
        Oskar Ljungdahl
      </h3>
      <v-icon class="white--text" size="32">
        mdi-menu
      </v-icon>
    </v-col>
    <!-- mobilstart -->
    <v-col class="start">
      <h3 class="menu-logo-text white--text">
        Oskar Ljungdahl
      </h3>
    </v-col>
    <v-col
      cols="12"
      class="justify-center align-start d-md-none d-flex  main black flex-row"
    >
      <v-col cols="6" class="">
        <v-img src="../assets/hej.jpg" id="hej" class="circle-image"> </v-img>
      </v-col>
      <v-col cols="6" class="brown d-flex justify-center">
      </v-col>
    </v-col>
    <v-col class="green about">
      <h1>CV</h1>
    </v-col>
    <v-col class="green about">
      <h1>Portfolio</h1>
    </v-col>
    <v-col class="green about">
      <h1>Kontakt</h1>
    </v-col>
    <!-- mobil slut -->
    <v-col
      class="primary justify-center align-center d-none d-sm-flex pa-0 ma-0"
    >
      <v-col cols="12" class="green main">
        <v-col cols="12" class=" flex-column align-center justify-center">
          <p class="white--text">Oskar laptop</p>
        </v-col>
      </v-col>
    </v-col>
  </v-col>
</template>

<script>
export default {
  name: "Home",

  components: {},
  mounted() {

	// this.gsap.to('#hej', {y:100, ease:"bounce.inOut", duration: 3, delay:3 }) 
  },
  //   methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Montserrat:wght@100;200;300;400&display=swap");

h1 {
  /* font-family: "Comfortaa", ; */
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}

.menu-logo-text {
  font-weight: 200;
}

.circle-image {
  border-radius: 99rem;
}

.start {
  height: 100vh;
  background: url("../assets/IMG_1050.jpg");
  background-position: center;
  background-size: cover;
}

.social-media-links {
  list-style: none;
}

.main {
  height: 100vh;
}

.about {
  height: 100vh;
}



</style>
