<template>
  <section class="galerieSection">

    <div class="titleBox">
        <h1 class="title lightText titleFont">Galerie</h1>
        <h1 class="lightText" v-if="error">Suite à un problème, la galerie n'a pas pu être chargée.</h1>
    </div>

    <div class="galerieBox" v-if="documents">

        <img  v-for="doc in documents" 
              :key="doc.id" :src="doc.url" 
              alt="Singe Diesel" 
              class="imageGalerie pointer small" 
              @click="agrendissement">

    </div>



  </section>
</template>

<script>
import { ref } from 'vue'
import getCollection from '@/composables/getCollection'
export default {
  props: ['nombreMaxDeDate'],
  setup(props){
    const { error, documents } = getCollection('galerie', props.nombreMaxDeDate, false)
    let openedImage = null


    const agrendissement = (e) => {
      if(openedImage) {
        if(openedImage.src === e.target.src) {
          e.target.classList.replace('big', 'small')
          openedImage = null
        } else {
          openedImage.classList.replace('big', 'small')
          e.target.classList.replace('small', 'big')
          openedImage = e.target
        }
      } else {
        e.target.classList.replace('small', 'big')
        openedImage = e.target
      }
      
      
      
    }

    return { error, documents, agrendissement, openedImage }
  }
 
}
</script>

<style>
.galerieSection{
    width: 100%;
    background-color: var(--lessdark);
}
.galerieBox{
    width: 100%;
    padding: 5% 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

.imageGalerie{
  margin: 15px;
}
.small{
  width: 200px;
}
.big{
  width: min(100%, 800px);
}
</style>