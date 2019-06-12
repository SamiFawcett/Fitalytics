<template>
<v-app>
  <v-navigation-drawer app class="hidden-xs-only deep-purple accent-4 elevation-10" width="450px">
    <v-list class="hidden-sm-and-down   ">
      
      
      <div class="mt-4">
        <v-list-tile 
      
      text-lowercase
      flat
      v-for="(cr, index) in completed_routines"
      :key="cr.title"
      >
        <v-list-tile-content>
          <v-container>
            <v-layout row wrap>
              <v-flex xs8 offset-xs2>
                <v-btn class= "deep-purple--text headline roboto text-lowercase" @click="update_routine_index(index)" large depressed block>
                  {{cr.title}}
                  <v-icon>{{ current_index.includes(index) ? 'chevron_left' : 'chevron_right'}}</v-icon>
                  </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-content>
      </v-list-tile>
      </div>
    </v-list>
  </v-navigation-drawer>
  
</v-app>
</template>

<script>
  export default {
    data(){
      return{
        menu: false,
        current_index: [],
        completed_routines: [
          {title: 'first-routine'},
          {title: 'second-routine'},
          {title: 'third-routine'},
          {title: 'fourth-routine'},
        ]
        }
      },
      methods: {
        update_routine_index(index){
          if(!this.current_index.includes(index)){
            this.current_index.push(index);
          } else {
            let idx = this.current_index.indexOf(index);
            this.current_index.splice(idx, 1);
          }

        }
      }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400&display=swap');
  .roboto{
    font-family: 'Roboto', sans-serif;
  }

  .fit-title{
    font-size: 144px;
  }

</style>