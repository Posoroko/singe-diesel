<template>

  <Galerie :nombreMaxDeDate="nombreMaxDeDate" />
</template>

<script>
import Galerie from '@/components/Galerie'
export default {
    components: { Galerie },
    setup() {
        const nombreMaxDimage = 3;

        return { nombreMaxDimage }
    }


}
</script>

<style>

</style>