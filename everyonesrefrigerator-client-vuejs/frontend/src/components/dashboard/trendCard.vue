<template>
  <v-card height="100%">
    <v-card-title primary-title>
      <span class="grey--text">{{title}}</span>
    </v-card-title>
    <v-card-text>
      <v-sparkline
        :value="value"
        :gradient="gradient"
        :type="trend"
        auto-draw
        smooth>
      </v-sparkline>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data(){
    return {
      value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
      gradients: false,
      trend: "trend"
    }
  }
}
</script>
