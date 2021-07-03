<template>
  <section class="footerSection background">
      <div class="footerBox">
          <div class="leftBox threeBoxes">

          </div>
          <div class="centerBox threeBoxes">
             
    <!-- contrôle, alt, click pour se diriger vers la page Login -->
    <img class="logoFooter" @click.ctrl.alt="login" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Flogo-carr%C3%A9-blanc.png?alt=media&token=7eae1d0d-aeda-4351-b6cf-e34ed23a564c" alt="">

          </div>
          <div class="rightBox threeBoxes">
              

          </div>
      </div>

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
        height: 50vh;
    }
    .footerBox{
        width: 100%;
        display: flex;
        height: 100%;
    }
    .threeBoxes{
        width: 33.33%;
        height: 100%;
    }
    .centerBox{
        display: grid;
        place-items: center
    }
    .logoFooter{
        height: 50%;
    }
</style>