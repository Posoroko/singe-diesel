import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { DOMDirectiveTransforms } from '@vue/compiler-dom'

const useDocument = (collection) => {
    let error = ref('')
    


    const deleteDoc = async (id) => {
        console.log(id)
        
        error.value = null
        
        try{
            const res = await projectFirestore.collection(collection).doc(id).delete()
            
            return res
        } catch (err) {
            console.log(err.message)
            
            error.value = 'il y a eu un problème. On a pas pu effacer la date.'
        }

    }

    return { error,  deleteDoc }
}

export default useDocument