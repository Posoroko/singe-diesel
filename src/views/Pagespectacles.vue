<template>

    <section class="background">
    
        <div class="titleBox">
          <h1 class="title lightText titleFont">Les Spectacles</h1>
        </div>

        <div class="suenoBox spectacleBox">
          
            <img class="photoSpectacle" src="https://i.ibb.co/sq7bLXQ/affiche-sueno.jpg" alt="marionnettiste Sueño">
            
                <div class="textSpectacleBox">

                    <h1 class="title spectacleTitle lightText manuscrite">Sueño</h1>

                    <p class="textSpectacle text sansSerif">
                        Embarquez pour une performance marionnettique dans les mondes de Tom. 
                    </p>
                    <div class="moreButtonBox">
          
                        <router-link class="pointer" :to="{ name: 'Sueno' }" >
                            <button class="lightText moreButton sansSerif">
                                découvrir...
                            </button>
                        </router-link>
                    </div>
                </div>
        </div>
        

         <div class="kazuBox spectacleBox">
          
            <img class="photoSpectacle" src="https://i.ibb.co/cCDnk9Z/affiche-kazu.jpg" alt="kazu">
            
                <div class="textSpectacleBox">

                    <h1 class="title spectacleTitle lightText manuscrite">Kazu</h1>

                    <p class="textSpectacle text sansSerif">
                         Ce spectacle est une plongée dans l’atelier de marionnettes de Juan Perez Escala et dans l’univers du réalisme 
                         magique et de la micro fiction, courant artistique d’Amérique du Sud.
                    </p>
                    
                   
                    <div class="moreButtonBox">
          
                        <router-link class="pointer" :to="{ name: 'Kazu' }" >
                            <button class="lightText moreButton sansSerif">
                                découvrir...
                            </button>
                        </router-link>
                    </div>

                </div>
        </div>
        
          <div class="kazuBox spectacleBox">
          
            <img class="photoSpectacle" src="https://i.ibb.co/kXBCr4J/M-taphores.jpg" alt="kazu">
            
                <div class="textSpectacleBox">

                    <h1 class="title spectacleTitle lightText manuscrite">Métaphores</h1>

                    <p class="textSpectacle text sansSerif">
                         "Ni mensonge, ni vérité, une métaphore est un voyage plus long, plus difficile, mais plus beau".
                         <br>
                         Prochaine création Singe Diesel prévue en septembre 2023
                    </p>
                    
                   
                    <div class="moreButtonBox">
          
                        <router-link class="pointer" :to="{ name: 'Metaphores' }" >
                            <button class="lightText moreButton sansSerif">
                                découvrir...
                            </button>
                        </router-link>
                    </div>

                </div>
        </div>

  </section>




</template>

<script>
export default {

}
</script>

<style scoped>

.spectacleBox{
  width: 100%;
  padding: 5vh 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.photoSpectacle{
  width: min(100%, 300px);
  align-self: center;
}
.textSpectacleBox{
  width: min(100vw, 800px);
  padding: 5vh 5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.textSpectacle{
  color: var(--light);
  display: block;
}

</style>