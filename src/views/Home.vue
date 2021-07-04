<template>
  <section class="home">
    <div class="topImgBox">
      <!-- top image is set as a background in css -->
    </div>
    <div class="bandeauBox">
      <h1 class="bandeau shippori">
        COMPAGNIE DE THEATRE DE MARIONNETTES
      </h1>
    </div>
    



      <div class="laCieBox">

        <p class="txtLaCie text sansSerif">
          La compagnie Singe Diesel est une compagnie de théâtre de marionnettes 
          dont Juan Perez Escala construit l’univers artistique, depuis le texte jusqu’à 
          la musique, en passant par la mise en scène et les marionnettes. Les 
          créations intègrent une dimension onirique et poétique. Par ce biais,  elles 
          posent un autre regard sur la réalité, inspirées par le réalisme magique sud 
          américain et empreintes de cultures populaires. Singe Diesel compte à son 
          actif plus de 200 marionnettes et une vingtaine de décors.  
        </p>

        <div class="moreButtonBox">
            
            <button class="moreButton moreCompagnie sansSerif">
              <router-link class="moreButtonText pointer" :to="{ name: 'Compagnie' }" >la compagnie</router-link>
            </button>
        </div>
     
      </div>

      <div class="juanBox">

        <img class="portrait" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Fportrait.jpg?alt=media&token=fcf6a4d3-b98e-4ab8-b40e-c8470c8c54b4" alt="Juan Perez-Escala">

        <div class="juanTxtBox">

          <h1 class="juanTitle manuscrite">Juan <br> Perez-Escala</h1>

          <p class="juanTxt text sansSerif">
            Fils d'un comédien de la Comedia d’Argentine, et directeur du “theatre del bosque”, Juan est immergé dans le 
            théâtre dès son plus jeune âge. Mais il se tourne vers les Beaux Arts et multiplie les expériences en tant 
            que sculpteur et dessinateur. Autodidacte, il acquiert un savoir-faire de fabrication de marionnettes et de 
            dramaturgie par l'image. Arrivé en France à 20 ans, il collabore à des séries d'animation et de marionnettes 
            sur Canal + et sur France 2. En s’installant en Bretagne, il entame des collaborations avec des compagnies de 
            marionnettes en tant que constructeur. A partir de 2011, Juan devient le metteur en scène de la compagnie Singe Diesel. Il écrit alors ses propres histoires et approfondit son univers graphique. 
          </p>

        </div>

        <div class="moreButtonBox">
            <button class="moreButton moreJuan sansSerif">
                <router-link class="moreButtonText pointer" :to="{ name: 'Juanperezescala' }" >Découvrir ...</router-link>
            </button>
        </div>

      </div>




    <div class="grandPereBox">
      <img class="grandPere" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Fgrand-p%C3%A8re.jpg?alt=media&token=221325b2-d2a0-450e-bb87-eb83858195f2" alt="marionnette Singe Diesel">
    </div>

    <Spectacles  />


    <div class="juanBureauBox">
      <img class="juanBureau" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Fjuan-bureau-02.jpg?alt=media&token=1d50ce41-de85-43cc-bb3d-7e257ac6f166" alt="Juan Perez-Escala">
    </div>


    <Agenda :button="button" />
    
    
    

    
      
   

  </section>
</template>

<script>
import Spectacles from '@/components/Spectacles.vue'
import Agenda from '@/components/Agenda.vue'

export default {
  name: 'Home',
  components: { Spectacles, Agenda },
  setup(){
    //activer le bouton 'toutes les dates' de l'agenda
    let button = true

    return { button }
  }
}
</script>

<style scoped>
  
  .home{
    background-color: var(--dark);
  }
  .topImgBox{
    width: 100%;
    height: 100vh;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/images%20misc%2Fscene-juan.jpg?alt=media&token=6ec0285d-d45c-426f-a0c9-85dccfa59279);
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
    font-size: 25px;
    color: var(--light);
    width: max(50%, 500px);
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
    font-size: max(5vw, 50px);
  }
  .portrait{
    width: min(100vw, 500px);
    margin: 0px 30px;
  }
  .juanTxtBox{
    width: min(100vw, 1000px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .juanTitle{
    color: var(--light);
    margin: 50px 0px;
  }
  .juanTxt{
    font-size: 25px;
    color: var(--light);
  }
  .grandPereBox{
    width: 100%;
    padding-top: 30vh;
    display: grid;
    place-items: center;
  }
  .grandPere{
    width: min(700px, 100%);
    mix-blend-mode: lighten;

  }
  .juanBureauBox{
    width: 100%;
    position: relative;
  }
  .juanBureau{
    width: 100%;
    mix-blend-mode: lighten;
  }
</style>
