<template>
    <section class="background">
        <Agenda :nombreMaxDeDate="nombreMaxDeDate" :admin="admin" />
    </section>

</template>

<script>
import Agenda from '@/components/Agenda'
import { ref } from 'vue'

export default {
    components: { Agenda },
    setup(){
        const nombreMaxDeDate = ref(1000)
        const admin = ref(false)


        return { nombreMaxDeDate }
    }

}
</script>

<style>

</style>