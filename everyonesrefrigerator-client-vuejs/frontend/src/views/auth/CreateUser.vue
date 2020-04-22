<template>
  <div class="pa-3">
    <CreateTable />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTable from '@/components/manage/createUserTable.vue'
export default {
  name: 'Home',
  components: {
    CreateTable
  }
}
</script>
