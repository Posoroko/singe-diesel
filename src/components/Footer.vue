<template>
  <section class="footerSection navAndFooter">
     
         
          
             
    <!-- contrôle, alt, click pour se diriger vers la page Login -->
    <img class="logoFooter" @click.ctrl.alt="login" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Flogo-carr%C3%A9-blanc.png?alt=media&token=7eae1d0d-aeda-4351-b6cf-e34ed23a564c" alt="">

          
          
      

  </section>
</template>

<script>

import { useRouter } from 'vue-router'

export default {

    setup(){

        const router = useRouter()

        function login() {

            router.push({ name: 'Login'})
            
        }
        return { login }
    }

}
</script>

<style scoped>
    .footerSection{
        width: 100%;
        padding: 10vh 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    
    
    .logoFooter{
        width: min(200px, 50%);
    }
</style>