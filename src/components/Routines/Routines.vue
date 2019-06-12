<template>
  <v-card >
    <v-list class="hidden-sm-and-down   ">
      <div class="mt-4">
        <v-list-tile>
        <v-list-tile-content>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <div>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        
                        large
                        class="mb-2 amber darken-3 white--text roboto text-lowercase headline font-weight-light"
                        v-on="on"
                      >
                        completed routines
                      </v-btn>
                    </template>
                  </v-menu>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-content>
      </v-list-tile>
      </div>
      
      <div class="mt-5">
        <v-list-tile 
      
      text-lowercase
      flat
      v-for="(cr, index) in completed_routines"
      :key="cr.title"
      >
        <v-list-tile-content>
          <v-container>
            <v-layout row wrap>
              <v-flex xs4 mx-4 mt-2>
                <v-btn class= "amber darken-2 white--text headline roboto text-lowercase" @click="update_routine_index(index)" large depressed block>
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
  </v-card>
    
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