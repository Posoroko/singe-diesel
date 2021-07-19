<template>

    <section class="background">
    
        <div class="titleBox">
          <h1 class="title lightText titleFont">L'équipe artistique</h1>
        </div>

        <div class="equipeBox">
          
            <img class="photoEquipe" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Fvincent.jpg?alt=media&token=f0e7902b-32db-4efc-98e3-f9b897aafd69">
            
                <div class="textEquipeBox">

                    <h1 class="subTitle lightText manuscrite">Vincent Rodaut</h1>

                    <p class="text lightText sansSerif">

                        Musicien
                    </p>
                    

                </div>
        </div>

        <div class="equipeBox">
          
            <img class="photoEquipe" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Fb%C3%A9rang%C3%A8re.jpg?alt=media&token=695cd07e-e04e-45b3-9df4-ed25142c5a10">
            
                <div class="textEquipeBox">

                    <h1 class="subTitle lightText manuscrite">Églantine Quéllier</h1>

                    <p class="text lightText sansSerif">
                        Costumière
                    </p>
                    

                </div>
        </div>
        
        <div class="equipeBox">
          
            <img class="photoEquipe" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Fvince.jpg?alt=media&token=1698a55c-2251-49bb-88df-63a4cf202290">
            
                <div class="textEquipeBox">

                    <h1 class="subTitle lightText manuscrite"> Vincent Bourcier</h1>

                    <p class="text lightText sansSerif">
                        Décorateur
                    </p>
                    

                </div>
        </div>

        
        

  </section>

</template>

<script>
export default {

}
</script>

<style scoped>

.equipeBox{
  width: 100%;
  padding: 5vh 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.photoEquipe{
  width: min(100%, 300px);
  align-self: center;
}
.textEquipeBox{
  width: min(100%, 800px);
  padding: 5vh 5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}


</style>