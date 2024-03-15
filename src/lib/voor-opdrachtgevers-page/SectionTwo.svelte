<script>
    import ButtonContact from "$lib/reusable-components/buttons/ButtonContact.svelte";

    export let data

    const image7 = data.assets[5].url;

</script>

<section>
    {#each data.voorOpdrachtgeversPages as opdrachtgevers }
        <article>

            <h3>ONZE AANPAK</h3>
            <div

                    class="flex-container-1">
                <p>{opdrachtgevers.intro2}</p>
                <p>{opdrachtgevers.beschrijving2}</p>
                <div class="button">
                    <ButtonContact/>
                </div>

                <!--                <div class="color-background-1"></div>-->
                <!--                <img src={image7} alt="Description of the image"/>-->

            </div>

        </article>
    {/each}
</section>

<style>
    section {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--background-color-light);
    }

    h3 {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-style: normal;
        font-size: var(--header-one);
        margin-top: 2rem;
        margin-left: 9rem;
        margin-bottom: 1rem;
    }

    .flex-container-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .flex-container-1 p {
        font-family: "fira-sans", serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1.2rem;
        line-height: 2.2rem;
        margin-top: 2rem;
        margin-left: 9rem;
        width: 80%;
    }

    .button {
        margin-left: 9rem;
    }


    /*.color-background-1 {*/
    /*    position: relative;*/
    /*    background-color: var(--color-beige);*/
    /*    width: 30%;*/
    /*    height: 40vh;*/
    /*}*/

    /*img {*/
    /*    position: absolute;*/
    /*    width: 30%;*/
    /*    left: 49%;*/
    /*    top: 336.5%;*/
    /*}*/

    /*.flex-container-2 {*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    flex-direction: column;*/
    /*    text-align: center;*/
    /*    padding-bottom: 5rem;*/
    /*}*/

    /*.flex-container-2 p {*/
    /*    font-size: var(--paragraph);*/
    /*    font-family: "fira-sans", serif;*/
    /*    font-weight: 200;*/
    /*    font-style: normal;*/
    /*    width:80%;*/
    /*    line-height: 2.2rem;*/
    /*    margin-bottom: 2rem;*/
    /*    text-align: center;*/
    /*}*/

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        section {
            width: 130vw;
            height: 140vh;
        }

        h3 {
            margin-top: 2rem;
            margin-left: 5rem;
        }

        .flex-container-1 p {
            margin-left: 5rem;
            font-size: var(--par-tablet);
            width: 85%;
        }

        .button {
            margin-left: 5rem;
        }

        /*.color-background-1 {*/
        /*    width: 35%;*/
        /*    height: 33vh;*/
        /*    left: 3%;*/
        /*    top: 7vh;*/
        /*}*/
        /*img {*/
        /*    position: absolute;*/
        /*    width: 45%;*/
        /*    left: 70%;*/
        /*    top: 350.5%;*/
        /*}*/
        /*.flex-container-1 {*/
        /*    margin-bottom: 5rem;*/
        /*}*/
        /*.flex-container-2 p {*/
        /*    width:85%;*/
        /*    font-size: var(--par-tablet);*/
        /*    line-height: 2rem;*/
        /*    margin-bottom: 2rem;*/
        /*}*/
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        section {
            width: 200vw;
            height: 200vh;
        }

        .flex-container-1 p {
            font-size: 1.5rem;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        section {
            width: 220vw;
            height: 200vh;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        section {
            width: 260vw;
            height: 200vh;
        }
    }

</style>