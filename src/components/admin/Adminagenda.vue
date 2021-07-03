<template>
  <section class="adminAgenda">
    
      <div class="titleBox">
        <h1 class="titre">Agenda</h1>
      </div>

      <h1 v-if="user"> connecté an tant que: {{user.email}}  </h1>
      
      

      <form  class="newDate" @submit.prevent="handleSubmit">
        <h3> Pour ajouter une nouvelle date à l'agenda, remplissez le formulaire et clickez sur "confirmer"</h3>

        <div class="dateFrBox">
            <label for="">date du spectacle:</label>
            <select class="dateFr jour" id="jour" v-model="day" >
              <option>1</option>2<option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option>
              <option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option>
              <option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option>
            </select>

            <select class="dateFr mois" id="mois" v-model="month" >
              <option value="0">janvier</option>
              <option value="1">février</option>
              <option value="2">mars</option>
              <option value="3">avril</option>
              <option value="4">mai</option>
              <option value="5">juin</option>
              <option value="6">juillet</option>
              <option value="7">août</option>
              <option value="8">septembre</option>
              <option value="9">octobre</option>
              <option value="10">novembre</option>
              <option value="11">décembre</option>
            </select>

            <select class="dateFr année" id="année" v-model="year" >
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
            </select>
        </div>

        <input class="inputField" type="text" placeholder="heure (ex.: 21h, 19h30) laissez vide si nécessaire" v-model="heure" >

        <label for="spectacle">Nom du spectacle</label>

        <select class="inputField" v-model="spectacle"  >
            <option>spectacle</option>
            <option>Sueño</option>
            <option>Kazu</option>
        </select>


        <input type="text" class="lieu inputField" placeholder="lieu" v-model="lieu" >
        <input type="text" class="ville inputField" placeholder="ville" v-model="ville" >
        <input type="text" class="codePostal inputField" placeholder=" département (ex: 29) ou pays" v-model="codePostal" >

        <span class="message"> {{error}} </span>
        <button class="pointer" v-if="!isPending">Confirmer</button>
        <button class="pointer" v-if="isPending">saving</button>
        <button class="showDate" @click="click">click</button>

      </form>

      <div class="componentBox">
        <Agenda :nombreMaxDeDate="nombreMaxDeDate" :button="button" />
      </div>

  </section>
</template>

<script>
import { ref } from 'vue'
import { projectAuth, timestamp } from '@/firebase/config.js'
import useCollection from '@/composables/useCollection'
import Agenda from '@/components/Agenda.vue'


export default {
  components: { Agenda },
  setup( props, { emit }){

    //désactiver le bouton 'toutes les dates' de l'agenda
    let button = false

    const day = ref()
    const month = ref()
    const year = ref()
    const heure = ref('')
    const spectacle = ref()
    const lieu = ref('')
    const ville = ref('')
    const isPending = ref(false)
    const codePostal = ref('')
    const user = projectAuth.currentUser
    const utilisateur = ref('')
    const nombreMaxDeDate = 100
    
    const date = new Date()

    function click(){
      console.log(date)
    }
    

    const { error, addDoc } = useCollection('agenda')
    
    const handleSubmit = async () => {
      
      if(user){
        
        if(year.value, month.value, day.value, heure.value && spectacle.value && ville.value && codePostal.value){
          
          date.setFullYear(year.value)
          date.setMonth(month.value)
          date.setDate(day.value)

          isPending.value = true
          
          
          await addDoc ({
            date: date.toLocaleDateString(),
            day: day.value,
            month: month.value,
            year: year.value,
            heure: heure.value,
            spectacle: spectacle.value,
            lieu: lieu.value,
            ville: ville.value,
            codePostal: codePostal.value,
            utilisatuer: user.email,
            createdAt: timestamp()
          })
          isPending.value = false
          error.value = 'la date a bien été ajoutée'
          emit('reload')


        }else{
          error.value = "Veuillez renseigner toutes les informations. (le lieu n'est pas obligatoire "
        }

      }else{
        error.value = 'vous devez être connecté pour ajouter une nouvelle date.'
      }
      
        

    }

    return { handleSubmit, date, day, month, year, heure, spectacle, lieu, user, 
            ville, codePostal, isPending, error, addDoc, utilisateur, nombreMaxDeDate, button, click }

  }

}
</script>

<style scoped>
  .adminAgenda{
    width: 100%;
  }
  .titleBox{
    padding: 20px;
  }
  .newDate{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--dark);
  }
  h3, label{
    color: var(--light);
    margin: 20px;
  }
  .inputField{
    width: min(500px, 100%);
    margin: 0px 0px 20px 0px;
  }
  input{
    font-size: 18px;
    border: 2px solid transparent;
    border-radius: 3px;
    padding: 5px;
}
  select{
    padding: 5px;
    border: 2px solid transparent;
    border-radius: 3px;
    text-align: center;
    background-color: var(--light);
    color: black;
}
option{
  color: var(--dark);
}
button{
    background-color: var(--light);
    padding: 10px;
    margin: 20px;
    border: 0;
    border-radius: 3px;
    display: grid;
    place-items: center;
}
.dateFr{
  margin: 10px;
}
.message{
  color: var(--light);
}

</style>