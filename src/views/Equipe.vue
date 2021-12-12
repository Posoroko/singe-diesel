<template>

    <section class="background">
    
        <div class="titleBox">
          <h1 class="title lightText titleFont">L'équipe artistique</h1>
        </div>

        <div class="equipeBox">
          
            <img class="photoEquipe" src="https://i.ibb.co/bBTZjW3/vincent.jpg">
            
                <div class="textEquipeBox">

                    <h1 class="subTitle lightText manuscrite">Vincent Roudaut</h1>

                    <p class="text lightText sansSerif">

                        Musicien
                    </p>
                    

                </div>
        </div>

        <div class="equipeBox">
          
            <img class="photoEquipe" src="https://i.ibb.co/GQfXGN0/b-rang-re.jpg">
            
                <div class="textEquipeBox">

                    <h1 class="subTitle lightText manuscrite">Églantine Quéllier</h1>

                    <p class="text lightText sansSerif">
                        Plasticienne
                        
                    </p>
                    

                </div>
        </div>
        
        <div class="equipeBox">
          
            <img class="photoEquipe" src="https://i.ibb.co/cXpdK1s/vince.jpg">
           
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