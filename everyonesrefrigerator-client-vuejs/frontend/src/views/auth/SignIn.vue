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
  created() {
    this.setReturnPath();
  },
  methods: {
    setReturnPath () {
      const search = window.location.href
      const tokens = search.replace(/^\?/, '').split('&')
      const pair = tokens[0].split('=')
      const returnPath = pair[1]
      console.log(returnPath)
      if (!returnPath || returnPath.indexOf('undefined') !== -1) {
        localStorage.setItem('returnPath', '/')
      } else {
        localStorage.setItem('returnPath', returnPath)
      }
    }
  },
  components: {
    LoginTable
  }
}
</script>
