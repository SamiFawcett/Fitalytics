<template>
  <v-app>
    <v-navigation-drawer fixed v-model="sideNav">
      <v-list>
        <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link"
        >
              <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{ item.title }}
              </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon
      @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to='/' tag='span' style="cursor: pointer">Fitalytics</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link"
        >
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'directions_run', title: 'View', link: '/routines' },
        { icon: 'add', title: 'Create', link: '/routines/create' },
        { icon: 'bar_chart', title: 'Progress', link: '/progress' },
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' }
      ]
    }
  }
}
</script>

<style scoped>
.sideNav{
  margin-top: 20px;
  margin-left: 20px;
}
</style>
