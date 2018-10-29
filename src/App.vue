<template>
  <div id=app>
    <v-app id="inspire">
      <v-toolbar app>
        <v-toolbar-title>fuchami page</v-toolbar-title>
      </v-toolbar>
      <v-navigator-drawer app></v-navigator-drawer>
      <v-content>
        <v-vontainer fluid>
          やあ，ここはfuchamiのページだよ
          <router-view></router-view>
        </v-vontainer>
      </v-content>
    </v-app>
  </div>
</template>

<style>
  #app{
    text-align: center;
    font-size: 40px;
  }
  .header {
    height: 50px;
    background-color: #ebebeb;
    margin-bottom: 50px;
  }
  .footer {
    height: 50px;
    background-color: #ebebeb;
    margin-bottom: 50px;
  }
</style>
