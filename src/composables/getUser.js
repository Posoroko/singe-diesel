import { ref } from 'vue'
import { projectAuth } from '@/firebase/config'

// refs
const user = ref(projectAuth.currentUser)

// auth changes
projectAuth.onAuthStateChanged(_user => {

  if(_user){
    console.log('User state change. Current user is:', _user.displayName)
  }
  
  user.value = _user
});

const getUser = () => {
  if(user.value){

  }
  
  return { user } 
}

export default getUser