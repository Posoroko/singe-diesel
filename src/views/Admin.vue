<template>
  <section class="admin">
    
    
    <div class="adminPanel">

      <div class="tabBox">
        <h2 class="" @click="changeTab('agenda')" v-if=" tab !== 'agenda' ">
          agenda
        </h2>
        <h2 class="title tabText pointer isOn" @click="changeTab('agenda')" v-if=" tab === 'agenda' ">
          agenda
        </h2>

        <h2 class="title tabText pointer" @click="changeTab('blog')" v-if=" tab !== 'blog' ">
          blog
        </h2>
        <h2 class="title tabText pointer isOn" @click="changeTab('blog')" v-if=" tab === 'blog' ">
          blog
        </h2>
        <button class="title tabText pointer" v-if='user' @click="logout">déconnexion</button>
        <button class="title tabText pointer" v-if="!user" @click="goToLogin">se connecter</button>
        
      </div>
      

      <div class="componentBox" v-if="tab === 'agenda'">
        <Adminagenda @reload="reloadForm"/>
      </div>

      <section class="agenda">

        

        <div class="agendaBigBox" v-if="documents">

            <div class="titleBox">
                <h1 class="title lightText titleFont">Agenda</h1>
                <h1 class="lightText" v-if="error">Suite à un problème, l'agenda n'a pas pu être chargée.</h1>
            </div>

            <div  v-for="doc in documents" :key="doc.id" class="carteDate">

                <div class="imageAndDate">

                    <img class="miniature" v-if="doc.spectacle == 'Kazu' || doc.spectacle == 'Kazu dans la nuit' || doc.spectacle == 'Kazu et les hommes volants'" src="https://firebasestorage.googleapis.com/v0/b/singe-diesel.appspot.com/o/miniatures%20spectacles%2Fminiatures%20Kazu%2Fkazu-miniature.jpg?alt=media&token=b5f8648b-f0d3-4d98-aa79-d99535091f99" alt="Kazu">
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
                
                <button class="dateErase lightText sansSerif pointer" @click="eraseDate" :id="doc.id"  >supprimer</button>
               
            </div>

            
           

          </div>

        


        </section>
      





    </div>
    
      
  </section>

</template>

<script>
import { ref, onBeforeUpdate } from 'vue'
import useDocument from '@/composables/useDocument'
import Adminagenda from '@/components/admin/Adminagenda.vue'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'

export default {

  components: { Adminagenda },
  setup(props, { emit }) {
    
    const { error, documents } = getCollection('agenda', 100) //collection et nombre max de date à afficher
    const tab = ref('agenda')
    const isPending = ref(false)
    const router = useRouter()
    const { deleteDoc } = useDocument('agenda', docToBeDeleted)
    let docToBeDeleted = ''
    

    const { user } = getUser

    const goToLogin = () => {
      router.push( { name: 'Login'})
    }
    
    const logout = async () =>
    {
        isPending.value = true
      
        try
        {
            await projectAuth.signOut()
            console.log("l'utilisateur s'est déconnecté")
            isPending.value = false
            router.push({ name: 'Home'})
        }
        catch(err)
        {
            console.log(err.message)
            isPending.value = false
        }
    }

    //reloads the importImage (from importImage component) form
        function reloadForm() {
            tab.value = null
            setTimeout(resolve, 1)
            function resolve(){
                tab.value = 'agenda'
            }
            

        }

    onBeforeUpdate( () => {
           documents.value.forEach(doc => {
               
               doc.date = new Date(doc.date).toLocaleDateString()  //transformation to local format
           
       });

       })

    const eraseDate = async (e) => {
      docToBeDeleted = e.target.id
      
      await deleteDoc(e.target.id)
      
    }





    const changeTab = (e) => {
      tab.value = e
    }

    return { changeTab, logout, tab, user, error, documents, goToLogin, reloadForm, eraseDate }
  }
  
}
</script>

<style scoped>
  .admin{
    width: 100%;
    display: grid;
    place-items: center;
  }
  .adminPanel{
    width: min(100%, 1500px);
    margin-top: 20px;
    
  }
  .tabBox{
    width: min(100%, 1000px);
    background-color: var(--dark);
    padding: 20px 0px 0px;
    display: flex;
    flex-wrap: wrap;
  }
  .tabText{
    width: max(10%, 100px);
    font-size: 16px;
    color: var(--dark);
    background-color: var(--light);
    text-align: center;
    margin: 0px 20px 20px;
    padding: 5px;
    border-radius: 3px;
  }
  .tabText:hover{
    background-color: var(--funkytouch);
  }
  .isOn{
    background-color: var(--funkytouch);
  }
 
  
  
  

</style>