<template>
  <section class="spectacles">
      

        <div class="bigBox">

            <div class="titleBox">
                <h1 class="title lightText titleFont">Spectacles</h1>
            </div>

                <div class="afficheBigBox">
                    <div class="afficheBox">
                        <img class="affiche" src="https://i.ibb.co/sq7bLXQ/affiche-sueno.jpg" alt="affiche Sueno Singe Diesel">
                        <h1 class="subTitle lightText sansSerif">Sueno</h1>
                    </div>
                    <div class="afficheBox">
                        <img class="affiche" src="https://i.ibb.co/cCDnk9Z/affiche-kazu.jpg" alt="affiche Kazu Singe Diesel">
                        <h1 class="subTitle lightText sansSerif">Kazu</h1>
                    </div>
                </div>
            
            
            <div class="moreButtonBox">
          
                <router-link class="pointer" :to="{ name: 'Pagespectacles' }" >
                    <button class="lightText moreButton sansSerif">
                      découvrir...
                    </button>
              </router-link>
            </div>

        </div>

        
      
    </section>
</template>

<script>
export default {
    props: {  },
    setup(){

    }

}
</script>

<style scoped>
    .spectacles{
        width: 100%;

    }
    .afficheBigBox{
        width: 100%;
        padding: 2vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .afficheBox{
        display: grid;
        place-items: center;

    }
    .affiche{
        width: min(500px, 100vw);
        margin: 5vh;
    }
    
</style>