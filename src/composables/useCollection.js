//pour importe une image en utilisant l'id automatique de firestore

import { ref } from "vue"
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) =>
{
    const error =  ref(null)
    const isPending = ref(false)

    //add new document
    const addDoc = async (doc) =>
    {
        error.value = null
        isPending.value = true
        

        try
        {
            await projectFirestore.collection(collection).add(doc)
            isPending.value = false
        }
        catch(err)
        {
            console.log(err.message)
            error.value = "la date n'a pas pu être ajoutée à l'agenda"
            isPending.value = false
        }

       
    }

    return { error, addDoc, isPending}
}

export default useCollection