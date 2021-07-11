<template>
  <div class="navBar navAndFooter">


    

      <img @click="handleClick" class="logo pointer" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Flogo-long.png?alt=media&token=104ad1a5-4877-4818-bf34-318920f4ddae" alt="logo singe diesel">
     

      


    

    <div class="menuBox sansSerif">
      <router-link class="menu pointer" :to="{ name: 'Compagnie' }" >la compagnie</router-link>
      <router-link class="menu pointer" :to="{ name: 'Juanperezescala' }" >Juan Perez-Escala</router-link>
      <router-link @click="openMobileMenu" class="menu pointer" :to="{ name: 'Equipe' }" >équipe artistique</router-link>
      <router-link class="menu pointer" :to="{ name: 'Pagespectacles' }" >spectacles</router-link> 
      <router-link class="menu pointer" :to="{ name: 'Agenda' }" >agenda</router-link>
      <router-link class="menu pointer" :to="{ name: 'Contact' }" >contact</router-link>
    </div>
    <div class="mobileMenu">
      <img class="mobileMenuButton" @click="openMobileMenu" v-if="!mobileMenu" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Ficone-menu.png?alt=media&token=964c0b8c-f5d2-4285-b2e1-325e53fb9016" alt="">
      
          

    </div>
    <div class="popUpMenu sansSerif" v-if="mobileMenu">
        <img class="mobileMenuButton closeMenuButton" @click="openMobileMenu" v-if="mobileMenu" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Ficone-fermer-menu.png?alt=media&token=87898a92-0655-4705-a91b-1d10d24b56a3" alt="">
        <router-link @click="openMobileMenu" class="menu pointer" :to="{ name: 'Compagnie' }" >la compagnie</router-link>
        <router-link @click="openMobileMenu" class="menu pointer" :to="{ name: 'Juanperezescala' }" >Juan Perez-Escala</router-link>
        <router-link @click="openMobileMenu" class="menu pointer" :to="{ name: 'Equipe' }" >équipe artistique</router-link>
        <router-link @click="openMobileMenu" class="menu pointer" :to="{ name: 'Pagespectacles' }" >spectacles</router-link> 
        <router-link @click="openMobileMenu" class="menu pointer" :to="{ name: 'Agenda' }" >Agenda</router-link>
        <router-link @click="openMobileMenu" class="menu pointer" :to="{ name: 'Galerie' }" >Galerie</router-link>
        <router-link @click="openMobileMenu" class="menu pointer" :to="{ name: 'Contact' }" >Contact</router-link>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup(){
    let mobileMenu = ref(false)
    const router  = useRouter()

    function handleClick() {
      router.push( { name: 'Home'})
    }

    function openMobileMenu() {
      mobileMenu.value = !mobileMenu.value
    }


    return { openMobileMenu, mobileMenu, handleClick }
  }

}
</script>

<style scoped>
    .navBar{
    width: 100%;
    padding: 1vh 5vw;
    display: flex;
    flex-wrap: wrap;
    justify-content:  space-between;
    align-items: center;
  }
  .logo{
    width: min(100%, 150px);
    margin-top: 6px;  /* marge pour qu'il soit bien centré verticalement */
  }
  .homeBtn{
    display: block;
    width: 200px;
  }
  
  .menu, .homeBtn{
    color: var(--light);
    font-size: max(2vh, 12px);
    margin: 10px 10px;
    text-decoration: none;
  }
  .mobileMenu{
    display: flex;
    flex-direction: column;
  }
  .popUpMenu{
    position: fixed;
    width: min(100%, 350px);
    padding: 5vh;
    top: 0;
    right: 0;
    background-color: var(--lessdark);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 999;
  }
  .mobileMenuButton{
    width: 40px;
  }
  .closeMenuButton{
    margin: 10px 0px;
  }
  @media (min-width: 860px) {
    .mobileMenu{
      display: none;
    }
    .menuBox{
      display: flex;
    flex-wrap: wrap;
    }
    .popUpMenu{
      display: none;
    }
    .navBar{
      flex-wrap: wrap;
    }
  }
  @media (max-width: 859px){
    .mobileMenu{
      display: flex;
    }
    .menuBox{
      display: none;
    }
    .popUpMenu{
      display: flex;
      align-self: flex-end;
    }
  }
  @media (max-width: 285px) {
    .navBar{
      justify-content: center;
    }
  }
</style>