<template>
  <div class="mx-15 mb-15">
    <h3 class="h3 mt-7 mb-7">Total (3) items</h3>

    <div class="row mb-5">
      <div class="col-lg-8 col-sm-12">
        <v-row v-for="n of 3" :key="n" class="mb-6">
          <v-col>
            <v-card raised class="rounded-lg">
              <fa icon="window-close" class="closeButton"></fa>
              <v-row>
                <v-col class="my-4" cols="3" sm="12" md="4" align="center" justify="center">
                  <v-img
                    height="100"
                    width="100"
                    src="../assets/kfc.jpg"
                  ></v-img>
                </v-col>
                <v-col>
                  <p class="font-weight-black mb-1 mt-4">Super Dinner</p>
                  <p class="text--disabled font-weight-bold mb-1">
                    KFC Salmiya
                  </p>
                  <p class="font-weight-bold mb-1">2.350 x 1 = 2.350 KD</p>
                  <v-row>
                    <v-col>
                      <v-text-field
                        class="custom-placeholer-color"
                        placeholder="Promocode 2"
                        color="red"
                      ></v-text-field>
                    </v-col>
                    <v-col align="center" justify="center">
                      <v-btn class="ma-2" rounded outlined depressed>
                        Apply
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="center">
                  <div class="quantity">
                    <a href="#" class="quantity__minus"><span>-</span></a>
                    <input
                      name="quantity"
                      type="text"
                      class="quantity__input"
                      value="1"
                    />
                    <a href="#" class="quantity__plus"><span>+</span></a>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="col-lg-4 col-sm-12">
        <v-row>
          <v-col>
            <v-card class="rounded-lg" raised>
              <v-row>
                <v-col class="mt-7 mx-10 text-right">
                  <p class="font-weight-bold mb-1">
                    Sub Total(3 Items) : KD 10.35
                  </p>
                  <p class="font-weight-regular">Promo Discount: KD 2.0</p>
                  <p class="font-weight-bold h3">Total : KD 8.35</p>
                </v-col>
              </v-row>
              <v-row class="text-center">
                <v-col>
                  <v-btn rounded class="bg"> Checkout </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <h3 class="h3 mb-5">You may also like</h3>
    <v-row sm="12">
      <v-col v-for="n of 6" :key="n" cols="12" sm="6" md="2" class="mb-3">
        <v-card raised class="rounded-lg">
          <v-row>
            <v-col align="center" justify="center">
              <v-img
                height="100"
                width="100"
                src="../assets/niveaa.jpg"
              ></v-img>
              
            </v-col>
          </v-row>

          <v-row class="mx-4">
            <v-col>
              <p class="font-weight-medium mb-0" style="font-size: 11px">Nivea body Milk</p>
              <p class="font-weight-bold mb-0" style="font-size: 11px">1.200 KD</p>
              <v-row>
                <v-col class="text-left "  >
                  <p class="mb-0" color="red" style="font-size: 11px;color:red"><fa icon="tag"></fa>upto 20% OFF</p>
                </v-col>
                <v-col md="12" lg="4" sm="12" cols="12" class="text-right  ">
                  <p class="mb-0" style="font-size: 11px;">10 min</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Foodcard",
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
<style>
.h3 {
  color: #36c6e1;
  /* background-color: #36c6e1; */
}
.bg {
  background-color: #36c6e1 !important;
  color: white !important;
}
.mx-autofood {
  margin-left: 20px;
  border-radius: 5px !important;
}
.btn-check {
  background-color: #36c6e1 !important;
}
.mx-autocheck {
  display: flex;
  margin-right: 50px !important;
  border-radius: 5px !important;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mx-autodown {
  border-radius: 5px !important;
}

/**css for plus and minus */
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.quantity__minus,
.quantity__plus {
  display: block;
  width: 22px;
  height: 23px;
  margin: 0;
  background: #dee0ee;
  text-decoration: none;
  text-align: center;
  line-height: 23px;
}
.quantity__minus:hover,
.quantity__plus:hover {
  background: #575b71;
  color: #fff;
}
.quantity__minus {
  border-radius: 3px 0 0 3px;
}
.quantity__plus {
  border-radius: 0 3px 3px 0;
}
.quantity__input {
  width: 32px;
  height: 19px;
  margin: 0;
  padding: 0;
  text-align: center;
  border-top: 2px solid #dee0ee;
  border-bottom: 2px solid #dee0ee;
  border-left: 1px solid #dee0ee;
  border-right: 2px solid #dee0ee;
  background: #fff;
  color: #8184a1;
}
.quantity__minus:link,
.quantity__plus:link {
  color: #8184a1;
}
.quantity__minus:visited,
.quantity__plus:visited {
  color: #fff;
}

/**Css fot close button */
.closeButton {
  font-size: 24px;
  position: absolute;
  top: -8px;
  right: -8px;
  color: #ea0012;
}
</style>

