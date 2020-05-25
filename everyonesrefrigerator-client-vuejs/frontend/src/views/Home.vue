<template>
  <div class="home">
    <BoradCard />
    <!-- <TrendCard /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import BoradCard from '@/components/dashboard/boardCard.vue'
// import TrendCard from '@/components/dashboard/trendCard.vue'

export default {
  name: 'Home',
  components: {
    BoradCard,
    // TrendCard
  }
}
</script>
