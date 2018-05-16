<template>
  <div class="home">
    后台home
    <div>
      <router-link :to="{name:'Test'}">
        Test页面
      </router-link>
    </div>
    <div>
      <router-link :to="{name:'Logistics'}">
        物流页面
      </router-link>
    </div>

    <t-more></t-more>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    props: {},
    data(){
      return{ }
    },
    created() {

    },
    mounted() {
      console.log(111)
      this.$axios.get('/api/data').then(res=>{
        console.log(2222)
        console.log(res)
      }).catch((err)=>{
        console.log(3333)
        console.log(err)
      })
    },
    methods:{},
    components: {}
  }
</script>

<style lang="less" scoped="scoped">
.home{

}
</style>
