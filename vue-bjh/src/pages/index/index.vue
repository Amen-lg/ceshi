<template>
  <div>
    <h2>毕节徽</h2>
  </div>
</template>

<script>
import { test } from '@/axios/api'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    this.init();
  },
  methods:{
    async init(){
      //let res = await test();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {

  color: #42b983;
  p{
    color: #ff6433;
  }
}
</style>
