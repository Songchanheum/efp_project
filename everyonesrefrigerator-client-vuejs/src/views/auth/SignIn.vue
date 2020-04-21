<template>
  <div class="pa-3">
    <LoginTable />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginTable from '@/components/manage/loginTable.vue'
export default {
  name: 'Home',
  components: {
    LoginTable
  }
}
</script>
