<template>
  <section class="home background">
    <div class="topImgBox">
      <!-- top image is set as a background in css -->
    </div>
    <div class="bandeauBox">
      <h1 class="bandeau shippori">
        COMPAGNIE DE THEATRE DE MARIONNETTES
      </h1>
    </div>
    



      <div class="laCieBox">

        <p class="txtLaCie text lightText sansSerif">
          La compagnie Singe Diesel est une compagnie de théâtre de marionnettes 
          dont Juan Perez Escala construit l’univers artistique, depuis le texte jusqu’à 
          la musique, en passant par la mise en scène et les marionnettes. Les 
          créations intègrent une dimension onirique et poétique. Par ce biais,  elles 
          posent un autre regard sur la réalité, inspirées par le réalisme magique sud 
          américain et empreintes de cultures populaires. Singe Diesel compte à son 
          actif plus de 200 marionnettes et une vingtaine de décors.  
        </p>

        <div class="moreButtonBox">
            
            
              <router-link class="pointer" :to="{ name: 'Compagnie' }" >
                  <button class="lightText moreButton moreCompagnie sansSerif">
                      découvrir...
                  </button>
              </router-link>
            
        </div>
     
      </div>

      <div class="juanBox">

        <img class="portrait" src="https://i.ibb.co/thLffB0/portrait.jpg" alt="Juan Perez-Escala">

        <div class="juanTxtBox">

          <h1 class="juanTitle titleFont">Juan <br> Perez-Escala</h1>

          <p class="text lightText sansSerif">
            Fils d'un comédien de la Comedia d’Argentine, et directeur du “theatre del bosque”, Juan est immergé dans le 
            théâtre dès son plus jeune âge. Mais il se tourne vers les Beaux Arts et multiplie les expériences en tant 
            que sculpteur et dessinateur. Autodidacte, il acquiert un savoir-faire de fabrication de marionnettes et de 
            dramaturgie par l'image.
          </p>

        </div>

        <div class="moreButtonBox">
          
            <router-link class="pointer" :to="{ name: 'Juanperezescala' }" >
                  <button class="lightText moreButton sansSerif">
                      découvrir...
                  </button>
              </router-link>
        </div>

      </div>


      
      <img class="juanBureau" src="https://i.ibb.co/zn1KZF8/juan-bureau-02.jpg" alt="Juan Perez-Escala">
      

    

    <Spectacles  />


    
    

    <Agenda :button="button" :nombreMaxDeDate="nombreMaxDeDate" />
    
    
    
    

    
      
   

  </section>
</template>

<script>
import { ref } from 'vue'
import Spectacles from '@/components/Spectacles.vue'
import Agenda from '@/components/Agenda.vue'

export default {
  name: 'Home',
  components: { Spectacles, Agenda },
  setup(){
    //activer le bouton 'toutes les dates' de l'agenda
    let button = true
    const nombreMaxDeDate = ref(3)

    return { button, nombreMaxDeDate }
  }
}
</script>

<style scoped>
  
  .home{
    width: 100%;
    overflow: hidden;
  }
  .topImgBox{
    width: 100%;
    height: 100vh;
    background-image: url(https://i.ibb.co/zXHHdHN/scene-juan.jpg);
    background-position: center;
    background-position-y: 65%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
    overflow: hidden;
  }
  
  p{
    color: light;
  }
  .bandeauBox{
    width: 100%;
    display: grid;
    place-items: center;
  }
  .bandeau{
    color: var(--light);
    font-size: 3.8vw;
    line-height: 90%;
    opacity: 0.1;
  }
  .laCieBox{
    width: 100%;
    padding-top: 30vh;
    display: grid;
    place-items: center;
  }
  .txtLaCie{
    width: min(90%, 800px);
  }
  .juanBox{
    width: 100%;
    padding-top: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .juanTitle{
    font-size: max(3vw, 30px);
    line-height: 90%;
  }
  .portrait{
    width: min(80%, 300px);
    margin: 0px 30px;
    align-self: center;
  }
  .juanTxtBox{
    width: min(100vw, 1000px);
    padding: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .juanTitle{
    color: var(--light);
    margin: 50px 0px;
  }
  
  .grandPereBox{
    width: 100%;
    padding-top: 5vh;
    display: grid;
    place-items: center;
  }
  .grandPere{
    width: min(700px, 100%);
    mix-blend-mode: lighten;

  }
  
  .juanBureau{
    width: 100%;
    mix-blend-mode: lighten;
  }
</style>
