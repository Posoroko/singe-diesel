<template>
    <section class="background">
        <Agenda :nombreMaxDeDate="nombreMaxDeDate" :button="button" />
    </section>

</template>

<script>
import Agenda from '@/components/Agenda'
import { ref } from 'vue'

export default {
    components: { Agenda },
    setup(){
        const nombreMaxDeDate = ref(1000)
        const button = ref(false)


        return { nombreMaxDeDate, button }
    }

}
</script>

<style>

</style>