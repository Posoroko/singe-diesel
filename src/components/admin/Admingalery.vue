<template>
  <section class="adminGalerySection">
        <form class="importImageForm">

            <label class="lightText subTitle">sélectionnez une image sur votre ordinateur pour l'ajouter à la galerie</label>
            <input type="file" class="lightText" @change="handleChange">
            
                <img class="imagePreview" :src="filePreview" alt="">
            
            <div class="error lightText"> {{ fileError }}</div>
            <button type="button" class="importImage moreButton lightText" @click="handleSubmitImage">ajouter</button>

        </form>

  </section>
</template>

<script>
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import { timestamp } from '@/firebase/config'
import getUser from '@/composables/getUser'
import { ref } from 'vue'
export default {
    setup(props, { emit }) {
        const { url, filePath, uploadImage } = useStorage()
        const file = ref(null);
        const filePreview = ref()
        const { error, addDoc } = useCollection('galerie')
        const { user } = getUser()

        

        //allowed file types
        const types = ['image/png', 'image/jpeg']
        //if there is an error when selecting the image
        const fileError = ref(null)

        //handle the selected file
        const handleChange = (e) => {
            const selected = e.target.files[0]
            if (selected && types.includes(selected.type)) {
                console.log(selected.name)
                file.value = selected
                filePreview.value = URL.createObjectURL(selected)
                fileError.value = null
            } else {
                file.value = null
                fileError.value = 'Sélectionner une image compatible. (.png ou .jpg)'  
            }
        }

        //hanfdle the export of the image to fireStore
        const handleSubmitImage = async () => {
            if (file.value) {
                await uploadImage(file.value)
                await addDoc({
                    name: file.value.name,
                    addedBy: user.value.email,
                    url: url.value,
                    filePath: filePath.value,
                    createdAt: timestamp()
                })
                if(!error.value) {
                    console.log('image added')
                    emit('reload')
                }
            }
        }

        return { handleChange, handleSubmitImage, file, fileError, filePreview }
    }

}
</script>

<style scoped>
.adminGalerySection{
    border: 1px solid red;
    padding: 5%;
    background-color: var(--dark);
}
input{
    display: block;
}

.imagePreview{
    width: min(100%, 250px);
}
button, input{
    margin: 20px 0px;
    padding:  20px;
}
</style>