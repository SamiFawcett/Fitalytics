<template>
  <v-container>
    <v-layout row>
      <v-icon left>dashboard</v-icon>
      <v-flex xs1>
        <h1 class="roboto header font-weight-light">dashboard</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      current_index: [],
      completed_routines: [
        { title: "first-routine" },
        { title: "second-routine" },
        { title: "third-routine" },
        { title: "fourth-routine" }
      ]
    };
  },
  methods: {
    update_routine_index(index) {
      if (!this.current_index.includes(index)) {
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
@import url("https://fonts.googleapis.com/css?family=Roboto:100,400&display=swap");
.roboto {
  font-family: "Roboto", sans-serif;
}

.fit-title {
  font-size: 144px;
}
</style>
