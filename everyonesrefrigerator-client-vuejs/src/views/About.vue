<template>
  <div class="text-xs-center">
    <h1>This is an about page</h1>
    <h1>클릭</h1>
    <router-link :to="{ name: 'Home'}">
      홈으로 가기
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
