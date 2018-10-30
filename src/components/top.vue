<template>
  <div id='app'>
    <v-app id="inspire">
      <v-parallax dark height="700" v-bind:src="top_img_url">
        
        <v-layout align-center column justify-center>
          <h1 class="display-2 font-weight-thin mb-3">
            fuchami's portfolio
          </h1>
          <h3>
            deep learning / web enginner
          </h3>
        </v-layout>
      </v-parallax>
    </v-app>
  </div>
  



</template>

<script>
  export default {
    data () {
      return {
        top_img_url: '/src/assets/images/top_Fotor.jpg'
      }
    }
  }
</script>

<style>

</style>

