<template>
  <div class="pa-3">
    <User v-bind:user="$store.getters.getUser"/>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/user.vue'
export default {
  name: 'Home',
  components: {
    User
  }
}
</script>
