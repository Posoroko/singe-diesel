import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection, limit, order) => {

  const documents = ref(null)
  const error = ref(null)
  let collectionRef;

  // register the firestore collection reference
  //the 'ORDER' parametre defines if the documents need to be ordered by date or not
  if(order) {
    collectionRef = projectFirestore.collection(collection)
    .orderBy('date')
    .limit(limit)
  } else {
    collectionRef = projectFirestore.collection(collection)
    .limit(limit)
  }
  
  const unsub = collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      doc.data().createdAt && results.push({...doc.data(), id: doc.id})
    });

    // update values
    documents.value = results
    error.value = null
    console.log(documents.value)
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch the data'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents }
}

export default getCollection