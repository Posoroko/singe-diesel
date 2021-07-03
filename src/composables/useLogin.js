import { ref } from "vue"
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => 
{
    error.value = null
    isPending.value = true

    try
    {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        console.log(res)
        isPending.value = false
        return res
    }
    catch(err)
    {
        console.log('une erreur pendant le login', err.value)
        error.value = 'Identifiants Incorrects'
        isPending.value = false
    }

}

const useLogin = () => {
    return { error, login, isPending }
}

export default useLogin