<template>
    <section class="background page">

        <section class="metaphoresTopSection relative">
                <img class="width" src="https://i.ibb.co/tDKrNqz/M-taphores.jpg" alt="">

                <div class="metaphoreTextBox absolute">

                    <div class="metaphoresTitleBox">
                        <h1 class="metaphoresTitle darkText titleFont ">Métaphores</h1>
                        <p class="metaphoresAge">à partir de 5 ans</p>
                    </div>

                    <div class="metaphoresQuoteBox">
                        <p class="darkText sansSerif quote">
                            "Ni mensonge, ni vérité, une métaphore est un voyage plus long, plus difficile, mais plus beau".
                        </p>
                    </div>

                    <div class="metaphoresTextBox">
                        <h2 class="metaphoresInfos darkText sansSerif">
                            Création prévue en septembre 2023
                        </h2>

                        

                    </div>

                </div>

        </section>

          

        
    
        


        <div class="showScore">
          

            <div class="distribution">
                <div class="jobBox">

                    <div class="job subTitle lightText sansSerif">
                      Distribution
                    </div>

                    <div class="name text lightText sansSerif">
                      
                    </div>

                </div>
                <div class="jobBox">

                    <div class="job text lightText sansSerif">
                      Conception, Écriture, Mise en scène :
                    </div>

                    <div class="name text lightText sansSerif">
                        Juan Perez-Escala
                    </div>

                </div>

                <div class="jobBox">

                    <div class="job text lightText sansSerif">
                        musique :
                    </div>

                    <div class="name text lightText sansSerif">
                        Vincent Roudaut
                    </div>

                </div>

                <div class="jobBox">

                    <div class="job text lightText sansSerif">
                      Marionnettes :
                    </div>

                    <div class="name text lightText sansSerif">
                        Juan Perez Escala assisté d’Eglantine Quellier
                    </div>

                </div>

                <div class="jobBox">

                    <div class="name text lightText sansSerif">
                        Suite de la distribution en cours d'élaboration
                    </div>

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

.metaphoresTopSection{
    width: min(1000px, 95%);
    /* background-image: url("https://i.ibb.co/tDKrNqz/M-taphores.jpg");
    background-position: center;
    background-size: cover; */
    margin: auto;
}
.metaphoreTextBox{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
}
/* .metaphoresTitleBox{
    top: 3vh;
    left: 5%;
} */
.metaphoresTitle{
    font-size: max(3.5vw, 25px);
}
.metaphoresAge{
    font-size: max(1vw, 10px);
    font-weight: normal;
}
.metaphoresText{
    font-size: max(1vw, 16px);
}
.quote{
    font-size: max(2vw, 20px);
    width: 80%;
    text-shadow: 0 0 10px rgb(255, 255, 255);
    font-weight: 700;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.151);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.337);
}
.metaphoresInfos{
    font-size: max(1vw, 12px);
    font-weight: 700;
}
</style>