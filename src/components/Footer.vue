<template>
  <section class="footerSection navAndFooter">
     
         
          
             
    <!-- contrôle, alt, click pour se diriger vers la page Login -->
    <img class="logoFooter" @click.ctrl.alt="login" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Flogo-carr%C3%A9-blanc.png?alt=media&token=01adf2b2-6c15-4741-a2cd-e78ad06eb36d" alt="logo Singe Diesel">

          
          
      

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