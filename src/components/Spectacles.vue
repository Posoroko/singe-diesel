<template>
  <section class="spectacles">
      

        <div class="bigBox">

            <div class="titleBox">
                

                <h1 class="title lightText titleFont relative titleStrokeBox" >
                    <div class="strokeBox ">
                        <!-- <Stroke /> -->
                    </div>
                    <span class="textOnStroke absolute">Spectacles</span>
                </h1>
            </div>

                <div class="afficheBigBox">
                    <div class="afficheBox">
                        <router-link class="pointer" :to="{ name: 'Sueno' }" >
                            <img class="affiche shadow" src="https://i.ibb.co/sq7bLXQ/affiche-sueno.jpg" alt="affiche Sueno Singe Diesel">
                        </router-link>
                        <router-link class="pointer link" :to="{ name: 'Kazu' }" >
                            <h1 class="subTitle lightText sansSerif">Sueno</h1>
                        </router-link>
                    </div>
                    <div class="afficheBox">
                        <router-link class="pointer" :to="{ name: 'Kazu' }" >
                            <img class="affiche shadow" src="https://i.ibb.co/cCDnk9Z/affiche-kazu.jpg" alt="affiche Kazu Singe Diesel">
                        </router-link>
                        <router-link class="pointer link" :to="{ name: 'Kazu' }" >
                            <h1 class="subTitle lightText sansSerif">Kazu</h1>
                        </router-link>
                    </div>
                </div>
            
            
            <div class="moreButtonBox">
          
                <router-link class="pointer" :to="{ name: 'Pagespectacles' }" >
                    <button class="lightText moreButton sansSerif">
                      tous les spectacles
                    </button>
              </router-link>
            </div>

        </div>

        
      
    </section>
</template>

<script>
import Stroke from '@/components/Stroke'

export default {
    props: {  },
    components: { Stroke },
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
        margin: 2vh;
    }
    .affiche{
        width: min(500px, 100vw);

    }
    
</style>