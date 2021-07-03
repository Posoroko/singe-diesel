<template>
  <div class="navBar">

    <Navbar />
    
  </div>
  <div class="content">

    <router-view/>

  </div>

  <div class="footer">
    <Footer />
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Navbar, Footer },
  setup(){

  }

}

        
</script>


<style scoped>
  .navBar{
    width: 100%;

  } 
  .content{
    max-width: 100vw;

  }
  .footer{
    width: 100%;
  }
</style>
