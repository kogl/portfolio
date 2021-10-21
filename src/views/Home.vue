<template>
  <v-col class="ma-0 pa-0">
    <!-- <v-col class="green align-center d-flex justify-end menu">
 
      <v-icon class="white--text" size="32">
        mdi-menu
      </v-icon>
    </v-col> -->
    <!-- mobilstart -->
    <v-col class="start d-flex align-end justify-center">
      <h3 class="name-text white--text">
        Oskar Ljungdahl
      </h3>
    </v-col>
    <v-col
      cols="12"
      class="justify-center align-start d-md-none d-flex about main black flex-row"
    >
      <v-col cols="6" class="">
        <v-img src="../assets/hej.jpg" id="hej" class="circle-image"> </v-img>
      </v-col>
      <v-col cols="6" class=" d-flex justify-center">
        <p class="white--text about-text" id="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum
          magnam dicta, deserunt perferendis labore ad minus itaque, sunt qui
          cumque rem. Nesciunt a alias, quos mollitia natus explicabo incidunt
          fugiat consectetur fugit totam cumque, dolor deleniti et ratione,
          asperiores eligendi debitis placeat ut nulla? Beatae tenetur quisquam
          fugit eligendi!
        </p>
      </v-col>
    </v-col>
    <v-col class="black cv">
      <!-- <h1 class="white--text">CV</h1> -->
      <v-col cols="12" class=" d-flex justify-end pa-0 ma-0">
        <h2 class="white--text">Utbildning</h2>
      </v-col>
      <v-col cols="12" class="flex-row d-flex">
        <v-col cols="3" class="green d-flex align-center justify-center"
          ><h4 class="cv-year">
            2019-2021
          </h4>
        </v-col>
        <v-col cols="9" class="white d-flex justify-center">
          <h4 class="cv-title">
            Jensen Yrekeshögskola, Frontendutveckling o websäkerhet
          </h4>
        </v-col>
      </v-col>
      <v-col cols="12" class="flex-row d-flex">
        <v-col cols="3" class="green d-flex align-center justify-center"
          ><h4 class="cv-year">
            2015 – 2017
          </h4>
        </v-col>
        <v-col cols="9" class="white d-flex justify-center">
          <h4 class="cv-title">
            Nackademin Yrkeshögskola, Applikationsutveckling
          </h4>
        </v-col>
      </v-col>
      <v-col cols="12" class="flex-row d-flex">
        <v-col cols="3" class="green d-flex align-center justify-center"
          ><h4 class="cv-year">
            2005-2007
          </h4>
        </v-col>
        <v-col cols="9" class="white d-flex justify-center">
          <h4 class="cv-title">Södertörns Högskola, Medieteknik A & B</h4>
        </v-col>
      </v-col>
      <v-col cols="12" class="flex-row d-flex">
        <v-col cols="3" class="green d-flex align-center justify-center"
          ><h4 class="cv-year">
            2007-2008
          </h4>
        </v-col>
        <v-col cols="9" class="white d-flex justify-center">
          <h4 class="cv-title">
            Södertörns Högskola, Media och kommunikationsvetenskap A & B
          </h4>
        </v-col>
      </v-col>
      <v-col cols="12" class="flex-row d-flex">
        <v-col cols="3" class="green d-flex align-center justify-center"
          ><h4 class="cv-year">
            2005-2007
          </h4>
        </v-col>
        <v-col cols="9" class="white d-flex justify-center">
          <h4 class="cv-title">
            Örebro Universitet , Media Design
          </h4>
        </v-col>
      </v-col>
      <v-col cols="12" class="flex-row d-flex">
        <v-col cols="3" class="green d-flex align-center justify-center"
          ><h4 class="cv-year">
            2002-2005
          </h4>
        </v-col>
        <v-col cols="9" class="white d-flex justify-center">
          <h4 class="cv-title">
            IT, kommunikation och ledarskap;
          </h4>
        </v-col>
      </v-col>
      <v-col cols="12" class=" d-flex justify-end pa-0 ma-0">
        <h2 class="white--text">Arbetslivserfarenhet</h2>
      </v-col>
    </v-col>
    <v-col class="green portfolio">
      <h1>Portfolio</h1>
    </v-col>
    <v-col class="green kontakt">
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
  mounted: function() {
    // this.gsap.to('#hej', {y:100, ease:"bounce.inOut", duration: 3, delay:3 })
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      let tl = this.gsap.timeline({
        scrollTrigger: {
          trigger: ".start",
          start: "10%",
          end: "90%",
          //   markers: true,
          scrub: true,
          ease: "bounce.out",
          pin: "true",
        },
      });

      tl.fromTo(
        ".name-text",
        { scale: 3 },
        { scale: 1, top: "2rem", left: "3rem", x: "-145", y: "-650" }
      ),
        tl.fromTo(".circle-image", { opacity: 0 }, { opacity: 1 });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Montserrat:wght@100;200;300;400&family=Heebo:wght@200;300;400&display=swap");

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

.social-media-links {
  list-style: none;
}
.start {
  height: 100vh;
  background: url("../assets/IMG_1050.jpg");
  background-position: center;
  background-size: cover;
}

.name-text {
  font-weight: 300;
}

.main {
  height: 100vh;
}

.about {
  height: 100vh;
}
.cv {
  height: 100vh;
}
.kontakt {
  height: 100vh;
}
.portfolio {
  height: 100vh;
}

p {
  font-weight: 300;
}

h2 {
  font-family: "Heebo", sans-serif;
  font-weight: 200;
}

.cv-year {
  font-family: "Heebo", sans-serif;
  font-weight: 200;
  font-size: 12px;
}

.cv-title {
  font-family: "Heebo", sans-serif;
  font-weight: 200;
  font-size: 12px;
}
</style>
