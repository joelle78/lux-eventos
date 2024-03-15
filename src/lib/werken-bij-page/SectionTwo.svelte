<script>
    import ButtonSignUp from "$lib/reusable-components/buttons/ButtonSignUp.svelte";

    export let data

    const image5 = data.assets[3].url;
    const image4 = data.assets[2].url;

</script>

<!--<section class="section-two-work-at">-->
<!--    {#each data.werkenBijPages as werkenBijPage }-->


<!--        <article>-->
<!--            <h3>Word <span>de topper</span> bij <span class="span-new-line">Lux-Eventos</span></h3>-->
<!--            <p class="p-intro">{werkenBijPage.intro2}</p>-->

<!--&lt;!&ndash;            <div class="image-color-container"></div>&ndash;&gt;-->
<!--            <div class="flex-container-1">-->
<!--&lt;!&ndash;                <img src={image5} alt="Description of the image"/>&ndash;&gt;-->
<!--                <p class="quote">{werkenBijPage.quote2}</p>-->
<!--            </div>-->
<!--            <p class="quote-display-none">{werkenBijPage.quote2}</p>-->

<!--            <div class="text-container">-->
<!--                <p>{werkenBijPage.beschrijving2}</p>-->
<!--                <ButtonSignUp/>-->
<!--            </div>-->
<!--        </article>-->
<!--    {/each}-->
<!--</section>-->

<section class="section-two-work-at">
    {#each data.werkenBijPages as werkenBijPage }

        <div class="image-container">
            <img src={image4} alt="Description of the image"/>
        </div>

        <article>
            <h3>Word <span>de topper</span> bij <span class="span-new-line">Lux-Eventos</span></h3>
            <!--            <p class="p-intro">{werkenBijPage.intro2}</p>-->

            <div class="text-container">
                <!--            <p class="quote">{werkenBijPage.quote2}</p>-->
                <p>{werkenBijPage.beschrijving2}</p>
            </div>


        </article>
    {/each}
</section>


<style>
    .section-two-work-at {
        position: relative;
        background-color: var(--background-color-dark);
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: clip;
    }

    .image-container {
        position: absolute;
    }

    img {
        position: relative;
        opacity: 0.09;
        height: 100vh;
        width: 70vw;
        right: 15vw;
        z-index: 1;
    }

    article {
        position: relative;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
    }

    h3 {
        font-size: var(--header-one);
        font-family: "fira-sans", serif;
        font-weight: 100;
        font-style: normal;
        text-align: center;
        line-height: 4rem;
        margin-left: 9rem;
        z-index: 2;
        color: white;
    }

    span {
        font-size: var(--header-one);
        font-family: "fira-sans", serif;
        font-weight: 100;
    }

    .span-new-line {
        display: block;
        font-size: var(--header-one);
        font-family: "fira-sans", serif;
        font-weight: 100;
        font-style: normal;
        text-align: left;
        margin-top: 2rem;
        margin-left: 30rem;

    }

    .text-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background-color: white;
        width: 75%;
        height: 35vh;
        margin-top: 5rem;
        z-index: 2;
    }

    p {
        font-size: var(--paragraph);
        font-family: "fira-sans", serif;
        font-weight: 200;
        text-align: left;
        margin-left: 1.5rem;
        width: 90%;
        line-height: 2.2rem;
    }


    /*.image-color-container {*/
    /*    position: absolute;*/
    /*    background-color: var(--color-beige);*/
    /*    width: 29%;*/
    /*    height: 40%;*/
    /*    top: 321%;*/
    /*    left: 9.4%;*/
    /*}*/

    /*.flex-container-1 {*/
    /*    display: flex;*/
    /*    flex-direction: row;*/
    /*    margin-top: 10rem;*/
    /*    gap: 7rem;*/
    /*}*/

    /*.flex-container-1 p {*/
    /*    padding-top: 2rem;*/
    /*    width: 25%;*/
    /*    line-height: 2.2rem;*/
    /*    text-align: left;*/
    /*}*/

    /*.quote {*/
    /*    font-style: italic;*/
    /*}*/

    /*img {*/
    /*    position: relative;*/
    /*    width: 30%;*/
    /*    margin-left: 10rem;*/
    /*}*/

    /*.text-container {*/
    /*    margin-top: 5rem;*/
    /*    padding-bottom: 5rem;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    line-height: 2.2rem;*/
    /*    gap: 3rem;*/
    /*}*/

    /*.text-container p {*/
    /*    width: 80%;*/
    /*}*/

    /*.quote-display-none {*/
    /*    visibility: hidden;*/
    /*}*/

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        .section-two-work-at {
            width: 130vw;
            height: 130vh;
        }

        h3 {
            text-align: left;
            margin-left: 7rem;
        }

        .span-new-line {
            display: block;
            margin-top: 2rem;
            margin-left: 20rem;
        }

        .text-container {
            background-color: white;
            width: 85%;
            height: 50vh;
            margin-top: 5rem;
            z-index: 2;
        }
    }

    /*.p-intro {*/
    /*    text-align: left;*/
    /*    width: 50%;*/
    /*    margin: 4rem 0 0 9rem;*/
    /*    line-height: 2rem;*/
    /*}*/

    /*.image-color-container {*/
    /*    width: 38%;*/
    /*    height: 40%;*/
    /*    top: 371%;*/
    /*    left: 19%;*/
    /*}*/

    /*.flex-container-1 {*/
    /*    display: flex;*/
    /*    flex-direction: row;*/
    /*    margin-top: 4.7rem;*/
    /*    gap: 7rem;*/
    /*}*/

    /*.quote-display-none {*/
    /*    visibility: hidden;*/


    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        .section-two-work-at {
            width: 200vw;
            height: 200vh;
        }

        img {
            visibility: hidden;
        }


        h3 {
            text-align: left;
            margin-left: 5rem;
        }

        .span-new-line {
            margin-left: 17rem;
        }

        p {
            font-size: 1.8rem;
        }

        .text-container {
            background-color: white;
            width: 85%;
            height: 90vh;
            margin-top: 5rem;
            z-index: 2;
        }
    }

    /*.p-intro {*/
    /*    margin: 3rem 0 0 5rem;*/
    /*    width: 75%;*/


    /*}*/

    /*.quote {*/
    /*    display: none;*/
    /*}*/

    /*.quote-display-none {*/
    /*    visibility: visible;*/
    /*    text-align: left;*/
    /*    font-style: italic;*/
    /*    width: 75%;*/
    /*    margin: 0 0 1rem 5rem;*/
    /*    line-height: 2rem;*/
    /*}*/

    /*.flex-container-1 {*/
    /*    margin-top: 3rem;*/
    /*}*/

    /*.image-color-container {*/
    /*    display: none;*/
    /*}*/

    /*.text-container {*/
    /*    margin: 3rem 0 1rem 5rem;*/
    /*    justify-content: left;*/
    /*    align-items: normal;*/
    /*}*/

    /*.text-container p {*/
    /*    text-align: left;*/
    /*    margin: 0;*/
    /*}*/


    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        .section-two-work-at {
            width: 220vw;
            height: 150vh;
        }

        img {
            width: 220vw;
            height: 150vh;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 320px) {

        .section-two-work-at {
            width: 260vw;
            height: 140vh;
        }

        img {
            width: 260vw;
            height: 140vh;
        }
    }


</style>



