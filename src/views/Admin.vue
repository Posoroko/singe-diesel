<template>
  <section class="admin">
    
    
    <div class="adminPanel">

      <div class="tabBox">
        
        <h2 v-bind:class="{ isOn: tab == 'agenda'}" class="title tabText pointer" @click="changeTab" name="agenda" >
          agenda
        </h2>

        <!-- <h2 v-bind:class="{ isOn: tab == 'blog'}" class="title tabText pointer" name="blog" >
          blog
        </h2> -->
        <h2 v-bind:class="{ isOn: tab == 'galerie'}" class="title tabText pointer" @click="changeTab" name="galerie" >
          Galerie
        </h2>
        
        <button class="title tabText pointer logoutBtn" v-if='user' @click="logout">se déconnecter et quitter</button>
        <button class="title tabText pointer" v-if="!user" @click="goToLogin">se connecter</button>
        
      </div>
      <h1 v-if="user"> connecté an tant que: {{user.email}}  </h1>
      

      <div class="componentBox relative" v-if="tab === 'agenda'">
        <Adminagenda @reload="reloadForm"/>

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
                <div class="dateButtonBox">
                  <button class="dateButton lightText sansSerif pointer" :name="doc.id" @click="modifyDate">Modifier</button>
                  <button class="dateButton lightText sansSerif pointer" @click="eraseDate" :id="doc.id"  >supprimer</button>
                </div>
                
               
            </div>
          </div>
        </section>

        <div class="modifyDateBox" v-if="modActivated">

            <form ref="modifyForm" class="modifyForm" @submit.prevent="submitModification">
              <h1 class="lightText titleFont" >Modification <span class="material-icons pointer" @click="modActivated = !modActivated">close</span></h1>
              <input name="modDay" class="modDay modItem" type="text">
              <input class="modmonth modItem" type="text">
              <input class="modyear modItem" type="text">
              <input class="modTime modItem" type="text">
              <input class="spectacle modItem" type="text">
              <input class="modPlace modItem" type="text">
              <input class="modCity modItem" type="text">
              <input class="modCode modItem" type="text">
              <div class="buttonBox">
                <button>confirmer</button>
              </div>
              
            </form>

        </div>

close

      </div>

      <div class="componentBox" v-if="tab === 'galerie'">
        <Admingalery @reload="reloadForm" />
      </div>

    </div>
    
    
      
  </section>

</template>

<script>
import { ref, onBeforeUpdate, onMounted } from 'vue'
import useDocument from '@/composables/useDocument'
import Adminagenda from '@/components/admin/Adminagenda.vue'
import Admingalery from '@/components/admin/Admingalery.vue'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
import { projectAuth } from '@/firebase/config'

export default {

  components: { Adminagenda, Admingalery },
  setup(props, { emit }) {
    
    const { error, documents } = getCollection('agenda', 100, true) //collection et nombre max de date à afficher
    const tab = ref('agenda')
    const isPending = ref(false)
    const router = useRouter()
    const { deleteDoc } = useDocument('agenda', docToBeDeleted)
    let docToBeDeleted = ''
    const { user } = getUser()
    const modActivated = ref(false)
    const modifyForm = ref(null)

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

    //reloads the importImage form
        function reloadForm() {
            const currentTab = tab.value
            tab.value = null
            setTimeout(resolve, 1)
            function resolve(){
                tab.value = currentTab
            }
            

        }
    let dateFormated = false  //vérfie que le formatage en français ne soit fait qu'une seule fois
    onBeforeUpdate( () => {
        if(tab.value === 'agenda' && !dateFormated) {
          dateFormated = true
            documents.value.forEach(doc => {
                doc.date = new Date(doc.date).toLocaleDateString()  //transformation to local format 
            });
        }
            
    })
 

    const eraseDate = async (e) => {
      docToBeDeleted = e.target.id
      await deleteDoc(e.target.id)
    }
    const modifyDate = (e) => {
      modActivated.value = true
      let result = documents.value.filter(obj => {
        return obj.id === e.target.name
      })
      console.log(modifyForm.value)
      
    }

    const changeTab = (e) => {
      tab.value = e.target.name
    }
    

    return { changeTab, logout, tab, user, error, documents, goToLogin, reloadForm, eraseDate, modifyDate, modActivated, modifyForm }
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
  .isOn{
    background-color: var(--funkytouch);
  }
  .logoutBtn{
    background-color: red;
  }
  

  .modifyDateBox{
    width: min(500px, 95%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    background-color: var(--lessdark);
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 0 10px white;
  }
  .modifyForm{
    display: flex;
    flex-direction: column;
  }
  .modItem{
    margin: 5px 0px;
    font-size: 25px;
  }
  .modifyForm > h1{
    display: flex;
    justify-content: space-between;
  }
</style>