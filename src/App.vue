<template>
  <div id=app>
    <div class='header'>ヘッダーです</div>
    <router-view></router-view>
    <br>
    <div class='footer'>フッターです</div>
  </div>
</template>

<style>
  #app {
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
