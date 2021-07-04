<template>
  <div class="navBar background">

    <router-link class="homeBtn" :to="{ name: 'Home' }" >
      <img class="logo" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Flogo02.png?alt=media&token=03ec3bbe-ad3c-4387-8d12-b43f94003c35" alt="">
     
    </router-link> 

    

    <div class="menuBox sansSerif">
      <router-link class="menu pointer" :to="{ name: 'Compagnie' }" >la compagnie</router-link>
      <router-link class="menu pointer" :to="{ name: 'Juanperezescala' }" >Juan Perez-Escala</router-link>
      <router-link class="menu pointer" :to="{ name: 'Pagespectacles' }" >spectacles</router-link> 
      <router-link class="menu pointer" :to="{ name: 'Agenda' }" >Agenda</router-link>
      <router-link class="menu pointer" :to="{ name: 'Galerie' }" >Galerie</router-link>
      <router-link class="menu pointer" :to="{ name: 'Contact' }" >Contact</router-link>

    </div>
    
  </div>
</template>

<script>
export default {
  setup(){
    


    return {  }
  }

}
</script>

<style scoped>
    .navBar{
    width: 100%;
    padding: 0 5vw;
    display: flex;
    flex-wrap: wrap;
    justify-content:  space-between;
    align-items: center;
  }
  .logo{
    width: min(80%, 125px);
    margin: 10px;


  }
  .menuBox{
    display: flex;
    flex-wrap: wrap;
  }
  
  .menu, .homeBtn{
    color: var(--light);
    font-size: max(20px, 5%);
    margin: 10px 10px;
    text-decoration: none;
  }
</style>