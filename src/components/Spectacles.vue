<template>
  <section class="spectacles">
      

        <div class="bigBox">

            <div class="titleBox">
                <h1 class="title lightText manuscrite">Spectacles</h1>
            </div>

                <div class="afficheBigBox">
                    <div class="afficheBox">
                        <img class="affiche" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20spectacles%2FSue%C3%B1o%2Faffiche-sueno.jpg?alt=media&token=f03ca152-c552-490e-ab9c-ca811f4d75e9" alt="affiche Sueno Singe Diesel">
                        <h1 class="showName sansSerif">Sueno</h1>
                    </div>
                    <div class="afficheBox">
                        <img class="affiche" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20spectacles%2FKazu%2Faffiche-kazu.jpg?alt=media&token=af2d4fac-3d3c-45da-aab6-435721185900" alt="affiche Kazu Singe Diesel">
                        <h1 class="showName sansSerif">Kazu</h1>
                    </div>
                </div>
            
            <div class="moreButtonBox">
                
               <button class="moreButton sansSerif">
                    <router-link class="moreButtonText pointer" :to="{ name: 'Pagespectacles' }" >Tous les spectacles ...</router-link> 
                </button>
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
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .afficheBox{
        display: grid;
        place-items: center;
        border: 1px solid red;
    }
    .affiche{
        width: min(500px, 100vw);
        margin: 5vh;
    }
    .showName{
        font-size: 25px;
        color: var(--light);

    }
</style>