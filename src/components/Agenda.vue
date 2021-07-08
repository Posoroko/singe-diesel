<template>

    <section class="agenda">

        

        <div class="agendaBigBox" v-if="documents">

            <div class="titleBox">
                <h1 class="title lightText titleFont">Agenda</h1>
                <h1 class="lightText" v-if="error">Suite à un problème, l'agenda n'a pas pu être chargée.</h1>
            </div>

            <div  v-for="doc in documents" :key="doc.id" class="carteDate">

                <div class="imageAndDate">

                    <img class="miniature" v-if="doc.spectacle == 'Kazu' " src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/miniatures%20spectacles%2Fminiatures%20Kazu%2Fkazu-miniature.jpg?alt=media&token=b5f8648b-f0d3-4d98-aa79-d99535091f99" alt="Kazu">
                    <img class="miniature" v-if="doc.spectacle == 'Sueño' " src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/miniatures%20spectacles%2Fminiatures%20Sue%C3%B1o%2Fsue%C3%B1o-miniature.jpg?alt=media&token=a6a2f2ec-5abd-44cb-903b-3d18691ef8fb" alt="Sueño" >

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

            
            <div class="moreButtonBox">
          
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
    props: ['nombreMaxDeDate', 'button'],
    setup(props){

        const { error, documents } = getCollection('agenda', props.nombreMaxDeDate)
        

       onBeforeUpdate( () => {
           documents.value.forEach(doc => {
               
               doc.date = new Date(doc.date).toLocaleDateString()  //transformation to local format
           
       });

       })
       
    

        return { error, documents }
        //document.value[i].date.toDate().toLocaleDateString()

    }

}
</script>

<style scoped>
.agendaBigBox{
    width: 100%;
    padding: 10vh 2vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}

.carteDate{
    width: min(1500px, 100%);
    padding: 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 0;
    /* color order for stripes: 1 - 2 - 2 - 1 - 1 - 2 - 2 */
    background-image: linear-gradient(45deg, var(--stripes1) 4.55%, var(--stripes2) 4.55%, var(--stripes2) 50%, var(--stripes1) 50%, var(--stripes1) 54.55%, var(--stripes2) 54.55%, var(--stripes2) 100%);
    background-size: 31.11px 31.11px;
    position: relative;
    
}
.dateInfo{
    color: var(--light);
}
.imageAndDate{
    /*width: min(300px, 100%);*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.miniature{
    height: min(80vw, 150px);
}
.when{
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.date{
    font-size: max(14px, 1.5vw);
}
.heure{
    font-size: max(1vw, 14px);
}
.what{
    width: min(300px, 100%);
    display: flex;
    justify-content: flex-start;
    place-items: flex-end;
}
.spectacle{
    font-size: max(14px, 3vw);
}

.where{
    width: min(300px, 100%);
    font-size: max(20px, 1.5vw);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
}
.codePostal{
    font-size: max(20px, 1vw);
}
.ville{
    font-size: max(20px, 1vw);
}

</style>