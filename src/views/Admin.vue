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

      





    </div>
    
      
  </section>

</template>

<script>
import { ref } from 'vue'
import Adminagenda from '@/components/admin/Adminagenda.vue'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'

export default {

  components: { Adminagenda },
  setup(props, { emit }) {

    const tab = ref('agenda')
    const isPending = ref(false)
    const router = useRouter()

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

   


    const changeTab = (e) => {
      tab.value = e
    }

    return { changeTab, logout, tab, user, goToLogin, reloadForm }
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
    width: min(100%, 1000px);
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