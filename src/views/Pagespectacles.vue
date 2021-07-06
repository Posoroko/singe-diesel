<template>

    <section class="background">
    
        <div class="titleBox">
          <h1 class="title lightText manuscrite">Les Spectacles</h1>
        </div>

        <div class="suenoBox spectacleBox">
          
            <img class="photoSpectacle" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20spectacles%2FSue%C3%B1o%2Faffiche-sueno.jpg?alt=media&token=f03ca152-c552-490e-ab9c-ca811f4d75e9" alt="marionnettiste Sueño">
            
                <div class="textSpectacleBox">

                    <h1 class="title spectacleTitle lightText manuscrite">Sueño</h1>

                    <p class="textSpectacle text sansSerif">
                        pariatur nisi officia sint irure fugiat cillum.Tempor Lorem officia nostrud do tempor eu. Reprehenderit adipisicing sunt cupidatat magna commodo eiusmod excepteur velit excepteur sunt nisi eiusmod id. 
                        Sint commodo aliquip pariatur nisi officia sint irure fugiat cillum.Tempor Lorem officia nostrud do tempor eu. Reprehenderit adipisicing sunt cupidatat magna commodo eiusmod excepteur velit excepteur sunt nisi eiusmod id. 
                        Sint commodo aliquip pariatur nisi officia sint 
                    </p>
                    <div class="moreButtonBox">
                
                        <button class="moreButton sansSerif">
                            <router-link class="moreButtonText pointer" :to="{ name: 'Sueno' }" >découvrir...</router-link> 
                        </button>
                    </div>

                </div>
        </div>
        

         <div class="kazuBox spectacleBox">
          
            <img class="photoSpectacle" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20spectacles%2FKazu%2Faffiche-kazu.jpg?alt=media&token=af2d4fac-3d3c-45da-aab6-435721185900" alt="kazu">
            
                <div class="textSpectacleBox">

                    <h1 class="title spectacleTitle lightText manuscrite">Kazu</h1>

                    <p class="textSpectacle text sansSerif">
                        pariatur nisi officia sint irure fugiat cillum.Tempor Lorem officia nostrud do tempor eu. Reprehenderit adipisicing sunt cupidatat magna commodo eiusmod excepteur velit excepteur sunt nisi eiusmod id. 
                        Sint commodo aliquip pariatur nisi officia sint irure fugiat cillum.Tempor Lorem officia nostrud do tempor eu. Reprehenderit adipisicing sunt cupidatat magna commodo eiusmod excepteur velit excepteur sunt nisi eiusmod id. 
                        Sint commodo aliquip pariatur nisi officia sint 
                    </p>
                    <div class="moreButtonBox">
                
                        <button class="moreButton sansSerif">
                            <router-link class="moreButtonText pointer" :to="{ name: 'Kazu' }" >découvrir...</router-link> 
                        </button>
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
  margin: 5vh 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.photoSpectacle{
  width: min(100%, 500px);
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