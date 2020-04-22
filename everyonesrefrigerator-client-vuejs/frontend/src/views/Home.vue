<template>
  <div class="home">
    <BoradCard />
    <smallCard />
    <!-- <TrendCard /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import BoradCard from '@/components/dashboard/boardCard.vue'
import SmallCard from '@/components/dashboard/smallCard.vue'
// import TrendCard from '@/components/dashboard/trendCard.vue'

export default {
  name: 'Home',
  components: {
    BoradCard,
    SmallCard,
    // TrendCard
  }
}
</script>
