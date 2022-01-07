<template>

    <section class="agenda">

        

        <div class="agendaBigBox" v-if="documents">

            <div class="titleBox">
                <h1 class="title lightText titleFont">Agenda</h1>
                <h1 class="lightText" v-if="error">Suite à un problème, l'agenda n'a pas pu être chargée.</h1>
                
            </div>
            <div>
                
                <div class="showButtonBoard">
                    <h1 class="showButtonText lightText sansSerif">Sélectionnez le spectacle à afficher</h1>
                        <div class="showButtonBox">
                            <button class="showButton suenoButton lightText sansSerif" :class="sueno && selected" @click="handleSelection" name="Sueño">Sueño</button>
                            <button class="showButton kazuNuitButton lightText sansSerif" :class="nuit && selected" @click="handleSelection" name="Kazu dans la nuit">Kazu dans la nuit</button>
                            <button class="showButton kazuVolantButton lightText sansSerif" :class="volant && selected" @click="handleSelection" name="Kazu et les hommes volants">Kazu et les hommes volants</button>
                            <button class="showButton tousSpectaclesButton lightText sansSerif" :class="all && selected" @click="getAll">tous les spectacles</button>
                        </div>
                    </div>
                </div>


         
                <div  v-for="doc in dateSelection" :key="doc.id" class="carteDate">

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
                      voir toutes les dates
                    </button>
              </router-link>
            </div>

        </div>

        






  </section>
</template>

<script>
import { ref, onBeforeUpdate, computed } from 'vue'
import getCollection from '@/composables/getCollection'


export default {
    props: ['nombreMaxDeDate', 'button' ],
    setup(props){

        const { error, documents } = getCollection('agenda', props.nombreMaxDeDate, true) //collection, nb max à afficher, en ordre ou pas
        const dateSelection = ref(null)
        const activeShow = ref('all')


        const selected = ref('selected') //class pour allumer les boutons
        //si une des variable est true, son bouton est allumé
        const sueno = ref(false)
        const nuit = ref(false)
        const volant = ref(false)
        const all = ref(true)
    
        const handleSelection =  (e) => {
            highlightButton(e.target.name)
            let dates = []
            for(let i = 0; i < documents.value.length; i++) {
                if(documents.value[i].spectacle == e.target.name) {
                    dates.push(documents.value[i])
                }
            }
            dateSelection.value = dates
            activeShow.value = e.target.name
        }
        const getAll = () => {
            dateSelection.value = documents.value
            activeShow.value = 'all'
        }

        const highlightButton = (name) => {
            sueno.value = false
            nuit.value = false
            volant.value = false
            all.value = false

            switch (name) {
                case "Sueño":
                    sueno.value = true
                    break
                case "Kazu dans la nuit":
                    nuit.value = true
                    break
                case "Kazu et les hommes volants":
                    volant.value = true
                    break
                case "all":
                    all.value = true
            }
            console.log()
        }
      
        
       
        let dateFormated = false
        onBeforeUpdate( () => {
            if(!dateFormated) {
                documents.value.forEach(doc => { 
                doc.date = new Date(doc.date).toLocaleDateString()  //transformation to local format for
                dateFormated = true
                dateSelection.value = documents.value
            });
            }
            
            
            
        })
       
    

        return { error, documents, handleSelection, activeShow, dateSelection, getAll, selected, sueno, volant, nuit, all}
       

    }

}
</script>

<style scoped>
.showButtonBoard{
    background-color: var(--stripes2);
    background-image: url("https://www.transparenttextures.com/patterns/subtle-dark-vertical.png");
    padding: 20px;
    border-radius: 5px;
    margin: 50px 0px;
}
.showButtonText{
    padding: 20px;
}
.showButtonBox{
    display: flex;
    justify-content: center;
    
}
.showButton{
    margin: 20px;
}
.selected{
    color: var(--dark);
    background-color: var(--light);
}
</style>