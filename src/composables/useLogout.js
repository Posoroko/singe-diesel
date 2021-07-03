import { ref } from "vue"
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const logout = async () =>
{
    error.value = null
    isPending.value = true
    
    try
    {
        await projectAuth.signOut()
        console.log("l'utilisateur s'est déconnecté")
        isPending.value = false
    }
    catch(err)
    {
        console.log(err.message)
        error.value = error.message
        isPending.value = false
    }
}

const useLogout = () =>
{
    return { error, logout, isPending }
}

export default useLogout