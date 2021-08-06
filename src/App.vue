<template>
  <v-app>
    <v-main>
      <Navbar/>
      <Foodcard/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Foodcard from './components/Foodcard.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    
    Navbar,
    Foodcard,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
