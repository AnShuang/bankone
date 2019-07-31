<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import { getData } from '@/mock/mockdata.js'
export default {
  name: 'home',
  data () {
    return {
      msg: []
    }
  },
  created () {
    this.msg = getData()
  }
}
</script>
