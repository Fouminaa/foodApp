<template>
    <v-bottom-navigation :value="value" color="teal" class="hidden-sm-and-up" grow style="position:fixed">
      <v-btn>
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span>chat</span>

        <v-icon>mdi-chat</v-icon>
      </v-btn>

      <v-btn>
        <span>Cart</span>

        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn>
        <span>Profile</span>

        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>
<script>
export default {
  name: "Footer",
   data: () => ({ value:  2}),
};
</script>