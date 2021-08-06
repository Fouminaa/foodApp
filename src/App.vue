<template>
  <v-app>
    <v-main>
      <navbar/>
      <foodcard/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Foodcard from './components/Foodcard.vue';

export default {
  name: 'App',

  components: {
    
    Navbar,
    Foodcard
  },

  data: () => ({
    //
  }),
};
</script>
