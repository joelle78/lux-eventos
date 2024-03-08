<script>
    import ButtonSignUp from "$lib/reusable-components/buttons/ButtonSignUp.svelte";

    export let data

    const image5 = data.assets[3].url;
</script>

<section class="section-two-work-at">
    {#each data.werkenBijPages as werkenBijPage }


        <article>
            <h3>Word <span>de topper</span> bij <span class="span-new-line">Lux-Eventos</span></h3>
            <p class="p-intro">{werkenBijPage.intro2}</p>

            <div class="image-color-container"></div>
            <div class="flex-container-1">
                <img src={image5} alt="Description of the image"/>
                <p class="quote">{werkenBijPage.quote2}</p>
            </div>
            <p class="quote-display-none">{werkenBijPage.quote2}</p>

            <div class="text-container">
                <p>{werkenBijPage.beschrijving2}</p>
                <ButtonSignUp/>
            </div>
        </article>
    {/each}

</section>

<style>
    h3 {
        padding-top: 10rem;
        font-size: var(--header-one);
        font-family: "fira-sans", serif;
        font-weight: 100;
        font-style: normal;
        text-align: center;
        line-height: 4rem;
    }

    p {
        font-size: 1rem;
        font-family: "fira-sans", serif;
        font-weight: 200;
        text-align: center;
        margin-top: 2rem;


    }

    span {
        font-size: var(--header-one);
        font-family: "fira-sans", serif;
        font-weight: 100;

    }

    .span-new-line {
        font-size: var(--header-one);
        font-family: "abril-fatface", serif;
        font-weight: 100;
        font-style: italic;

    }


    .section-two-work-at {
        background-color: var(--background-color-light);
    }

    .image-color-container {
        position: absolute;
        background-color: var(--color-beige);
        width: 29%;
        height: 40%;
        top: 321%;
        left: 9.4%;
    }

    .flex-container-1 {
        display: flex;
        flex-direction: row;
        margin-top: 10rem;
        gap: 7rem;
    }

    .flex-container-1 p {
        padding-top: 2rem;
        width: 25%;
        line-height: 2.2rem;
        text-align: left;
    }

    .quote {
        font-style: italic;
    }

    img {
        position: relative;
        width: 30%;
        margin-left: 10rem;
    }

    .text-container {
        margin-top: 5rem;
        padding-bottom: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 2.2rem;
        gap: 3rem;
    }

    .text-container p {
        width: 80%;
    }

    .quote-display-none {
        visibility: hidden;
    }

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        .section-two-work-at {
            width: 130%;
            height: 200vh;
        }

        h3 {
            text-align: left;
            margin-left: 9rem;
        }

        .span-new-line {
            display: block;
            margin-top: 1rem;
        }

        .p-intro {
            text-align: left;
            width: 50%;
            margin: 4rem 0 0 9rem;
            line-height: 2rem;
        }

        .image-color-container {
            width: 38%;
            height: 40%;
            top: 371%;
            left: 19%;
        }

        .flex-container-1 {
            display: flex;
            flex-direction: row;
            margin-top: 4.7rem;
            gap: 7rem;
        }

        .quote-display-none {
            visibility: hidden;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        .section-two-work-at {
            width: 200%;
            height: 185vh;
        }

        h3 {
            text-align: left;
            margin-left: 5rem;
        }

        p {
            font-size: 1.8rem;
            margin-left: 5rem;

        }

        .p-intro {
            margin: 3rem 0 0 5rem;
            width: 75%;


        }

        .quote {
            display: none;
        }

        .quote-display-none {
            visibility: visible;
            text-align: left;
            font-style: italic;
            width: 75%;
            margin: 0 0 1rem 5rem;
            line-height: 2rem;
        }

        .flex-container-1 {
            margin-top: 3rem;
        }

        .image-color-container {
            display: none;
        }

        img {
            display: none;
        }

        .text-container {
            margin: 3rem 0 1rem 5rem;
            justify-content: left;
            align-items: normal;
        }

        .text-container p {
            text-align: left;
            margin: 0;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        .section-two-work-at {
            width: 220%;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 320px) {

        .section-two-work-at {
            width: 260%;
        }
    }


</style>



