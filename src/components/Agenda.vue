<template>

    <section class="agenda">

        

        <div class="agendaBigBox" v-if="documents">

            <div class="titleBox">
                <h1 class="title lightText titleFont">Agenda</h1>
                <h1 class="lightText" v-if="error">Suite à un problème, l'agenda n'a pas pu être chargée.</h1>
            </div>

            <div  v-for="doc in documents" :key="doc.id" class="carteDate">

                <div class="imageAndDate">

                    <img class="miniature" v-if="doc.spectacle == 'Kazu' || doc.spectacle == 'Kazu dans la nuit' || doc.spectacle == 'Kazu et les hommes volants'" src="https://i.ibb.co/dkNXphp/kazu-miniature.jpg" alt="Kazu">
                    <img class="miniature" v-if="doc.spectacle == 'Sueño' " src="https://i.ibb.co/fMb5r2w/sue-o-miniature.jpg" alt="Sueño" >

                    <div class="when">
                        
                        <p class="dateInfo date sansSerif"><span> {{doc.date}} </span>  <span class="date"></span></p>
                        <span class="dateInfo heure sansSerif">{{doc.heure}}</span>
                        
                    </div>

                </div>

                <div class="what">
                    <span class="dateInfo spectacle sansSerif"> {{doc.spectacle}} </span>
                </div>

                <div class="where">
                    <span class="dateInfo ville sansSerif"> {{doc.lieu}} - {{doc.ville}} - ({{doc.codePostal}}) </span>             
                </div>
                
               
            </div>

            
            <div class="moreButtonBox" v-if="button">
          
                <router-link class="pointer" :to="{ name: 'Agenda' }" >
                    <button class="lightText moreButton sansSerif">
                      découvrir...
                    </button>
              </router-link>
            </div>

        </div>

        


  </section>
</template>

<script>
import { ref, onBeforeUpdate } from 'vue'
import getCollection from '@/composables/getCollection'


export default {
    props: ['nombreMaxDeDate', 'button' ],
    setup(props){

        const { error, documents } = getCollection('agenda', props.nombreMaxDeDate)
        
        

       onBeforeUpdate( () => {
           documents.value.forEach(doc => {
               
               doc.date = new Date(doc.date).toLocaleDateString()  //transformation to local format
           
       });

       })
       
    

        return { error, documents }
       

    }

}
</script>

<style scoped>


</style>