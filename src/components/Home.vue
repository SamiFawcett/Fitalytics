<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
      </v-flex>

      <v-flex mb-4>
        <h1 class="font-weight-thin home-title">
          Fitalytics
        </h1>
        <h3 class="title-sub font-weight-light">MEET YOUR GOALS</h3>
      </v-flex>

      <v-flex >
        <v-btn class="signup-button"  >
          Sign up
        </v-btn>
        <v-btn class="login-button"  >
          Login
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
  
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400&display=swap');
  *{
    font-family: 'Roboto', sans-serif;
  }
  .home-title{
    position: absolute;
    top: 35%;
    left: 30%;
    font-size: 160px;
  }
  .title-sub{
    position: absolute;
    top: 54%;
    left: 30.7%;
    font-size: 30px;
  }
  .signup-button{
    position:absolute;
    top: 60%;
    left: 50%;
  }
  .login-button{
    position:absolute;
    top: 60%;
    left: 55%;
  }
</style>
