<template>
  <div id=app>

    <v-app id="inspire">
      <v-toolbar app>
        <v-toolbar-title>
          <router-link to='/'>fuchami pages</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>
            <router-link to='./about'>about</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to='./skill'>skill</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to='./work'>work</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigator-drawer app></v-navigator-drawer>
      <v-content>
          <router-view></router-view>
      </v-content>

      <v-footer dark height="auto">
        <v-card class="flex" flat tile>

          <v-card-title class="cyan darken-2">

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-actions class="grey darken-3 justify-center">
              Copyrighting&copy;2018 - fuchami  - All Rights Reserved.
          </v-card-actions>

        </v-card>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-github'
      ]
    })
  }

</script>

<style>
</style>
