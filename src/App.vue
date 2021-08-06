<template>
  <v-app>
    <v-main>
      <Navbar/>
      <Foodcard/>
      <FooterNav/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Foodcard from './components/Foodcard.vue';
import FooterNav from './components/FooterNav.vue'

export default {
  name: 'App',

  components: {
    Navbar,
    Foodcard,
    FooterNav
  },
};
</script>
