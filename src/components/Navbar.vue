<template>
  <div class="Navbar">
    <v-toolbar class="Toolbar hidden-xs-and-down">
      <v-text-field
        class="mt-7 ml-15"
        solo
        value="Street 1, line 4..."
        append-icon="mdi-map-marker"
        style="color: #72b6b6 !important"
      ></v-text-field>
      <v-text-field
        class="mt-7"
        solo
        label="Search"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-badge color="yellow" dot>
        <fa id="bell" icon="bell" />
      </v-badge>
      <v-spacer></v-spacer>
      <v-btn depressed class="mr-2">
        <span class="h3">12.5 KWD</span>
        <v-badge color="yellow" content="3"
          ><fa icon="shopping-cart" class="h3"
        /></v-badge>
      </v-btn>
      <v-btn depressed>
        <fa icon="user" class="h3 mr-1" /> <span class="h3">Name</span>
      </v-btn>
    </v-toolbar>
    <!-- <v-toolbar app class="Toolbar hidden-sm-and-up">
      <v-toolbar-title>Mobile Menu</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-toolbar-side-icon dark slot="activator"></v-toolbar-side-icon>
        <v-card>
          <v-toolbar flat color="blue-grey darken-2">
            <v-toolbar-title>Mobile Menu</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-card>
      </v-dialog>
    </v-toolbar> -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  // data() {
  //   return {
  //     items: ["English", "Spanish", "french"],
  //   };
  // },
};
</script>
<style >
.v-text-field .v-input__control .v-input__slot {
  min-height: 20px !important;
  display: flex !important;
  align-items: center !important;
  width: 80% !important;
  height: 35px !important;
}

.Toolbar {
  background-color: #36c6e1 !important;
}
.Dropdown {
  margin-left: 30px !important;
  background-color: white;
  height: 30px;
  width: 15%;
}
#bell {
  margin-left: 20px !important;
  color: white;
  font-size: 30px;
}

::placeholder {
  /*chrome*/
  color: #72b6b6;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: red;
}
</style>
