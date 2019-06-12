<template>
  <v-app>
    <v-navigation-drawer fixed v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          class="text-lowercase"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="text-lowercase">
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark class="deep-purple darken-3">
      <v-toolbar-side-icon
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <v-container>
          <v-layout mt-3 row>
            <v-flex>
              <router-link
                class="roboto font-weight-light display-1"
                to="/"
                tag="span"
                style="cursor: pointer"
                ><p class="text-xs-center">FITALYTICS</p></router-link
              >
            </v-flex>
            <v-flex>
              <p
                class="roboto purple--text font-weight-thin display-1"
              >
                ALPHA
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          class="roboto font-weight-medium text-lowercase headline "
          flat
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: "folder", title: "routines", link: "/routines" },
        { icon: "add", title: "create", link: "/routines/create" },
        { icon: "bar_chart", title: "progress", link: "/progress" }
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,400&display=swap");
.roboto {
  font-family: "Roboto", sans-serif;
}
.sideNav {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
