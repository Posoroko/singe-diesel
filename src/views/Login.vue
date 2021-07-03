<template>
  <section class="loginPage">

      <form @submit.prevent="handleSubmit">

            <h3 class="title">Hola!</h3>
            <input type="email" placeholder='Email' v-model="email">
            <input type="password" placeholder='mot de passe' v-model="password">

            <p class="forgotPW pointer">T'as perdu ton mot de passe?</p>
            <div v-if = "error" class="error">{{ error }}</div>

            <button class="pointer" v-if=!isPending >log in</button>
            <button class="login" v-if=isPending>connexion</button>
            

        </form>
      
  </section>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const {error, login, isPending } = useLogin()
        const email = ref('')
        const password = ref('')
        const router = useRouter()

        

        const handleSubmit = async () =>
        {

            const res = await login(email.value, password.value)
            if (!error.value)
            {
                router.push({ name:'Admin' })
                
            }
        }

        return { error, login, isPending, handleSubmit, email, password }
    }
}
</script>

<style scoped>
    .loginPage{
        width: 100vw;
        height: 100vh;
        background-color: var(--dark);
        display: grid;
        place-items: center;
    }
    form{
        width: min(100vw, 1000px);
        background-color: #1d2424;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3{
        color: var(--light);
        font-size: 25px;
        font-family: 'Shippori Mincho', serif;

        
    }
    input{
        width: 400px;
        height: 45px;
    }
    h3, input, button{
        margin: 20px;
    }
    .error, .forgotPW{
        color: var(--light);
    }
    .error{
        color: red;
    }
    button {
        width: 200px;
        height: 45px;
        color: var(--dark);
        background-color: var(--light);
    }

</style>