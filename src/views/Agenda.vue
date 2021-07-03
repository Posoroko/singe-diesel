<template>
    <section class="background page">
        <Agenda :nombreMaxDeDate="nombreMaxDeDate" />
    </section>

</template>

<script>
import Agenda from '@/components/Agenda'
import { ref } from 'vue'

export default {
    components: { Agenda },
    setup(){
        const nombreMaxDeDate = ref(1)


        return { nombreMaxDeDate }
    }

}
</script>

<style>

</style>