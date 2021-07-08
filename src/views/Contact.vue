<template>
  <section class="background">

        

        <div class="bigBox contactBox">

            <div class="titleBox">
                <h1 class="title lightText titleFont contactElement">Contact</h1>
            </div>
            <div class="contactCard">

                <div class="adressBox text lightText sansSerif contactElement">
                    <p> 
                        <span> Compagnie SingeDiésel </span> 
                        <br>
                        18, rue Saint Valentin <br>
                        29820 Guilers, France 
                    </p>
                </div>

                <div class="mailBigBox contactElement">

                    <div class="mailBox">

                        <p class="text lightText sansSerif">informations:</p>
                        <p class="mail lightText sansSerif">singediesel@gmail.com</p>

                    </div>

                    <div class="mailBox lastMailBox">

                        <p class="text lightText sansSerif">diffusion</p>
                        <p class="mail  lightText sansSerif">all.et.compagnies@gmail.com</p>

                    </div>

                </div>

                <p class=" legal text lightText sansSerif contactElement">SIRET : 539 539 874 00039 - APE : 9001Z - LICENCES : 2-1090317 & 3-1090318 </p>

            </div>

        </div>


  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.contactCard{
    width: min(100%, 1000px);
    padding: 5vw;
    background-color: var(--lessdark);
    
}
.contactElement{
    margin: 3vh 0;
}
.mailBox{
    border-top: 1px solid white;
    padding-top: 1vh;
}
.mail{
    font-size: max(1.6vw, 10px);
    margin: 1vw 0;
}
.lastMailBox{
    border-bottom: 1px solid white; 
}
.legal{
    font-size: max(1vw, 10px);
}

</style>