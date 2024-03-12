<script>
    export let data

    // const image2 = data.assets[0].url;
</script>

<section class="section-two">
    <article>
        {#each data.homepages as homepage }

                <div class="text-container">
                    <h3>Wie zijn <span>wij?</span></h3>
                    <p>{homepage.beschrijving2}</p>
                </div>
<!--                <img src={image2} alt="Description of the image"/>-->


        {/each}
    </article>
</section>

<style>
    .section-two {
        position: relative;
        background-color: var(--background-color-medium);
        padding-bottom: 15rem;
        height: 100vh;
    }

    article {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 100vh;
    }

    h3, p {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        margin-left: 2rem;
    }

    h3 {
        font-family: "catamaran", serif;
        font-weight: 200;
        font-size: var(--header-two);
        margin-top: 1rem;

    }

    span {
        font-style: normal;
        font-weight: 200;
    }

    p {
        font-size: var(--paragraph);
        line-height: 2.2rem;
        margin-top: 2rem;
        width: 84%;
    }


    .text-container {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 25%;
        height: 70vh;
        margin-top: -8rem;


    }

    img {
        position: relative;
        width: 23%;
        left: -1vw;
        top: 7vh;

    }

    /*MEDIA QUERY TABLET*/
    @media screen and (max-width: 768px) {
        .section-two {
            width: 130%;
            height: 130vh;
        }

        h3 {
            margin-top: 2rem;
        }

        p {
            font-size: var(--par-tablet);
        }

        .text-container {
            height: 80%;
            width: 40%;
            top: 12vh;

        }

        img {
            width: 30%;
            left: -4vw;
            margin-top: 15rem;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        .section-two {
            width: 200%;
            height: 180vh;
        }

        .text-container {
            height: 100%;
            width: 95vw;
            top: 35vh;
            left: 3vw;

        }

        img {
            width: 43%;
            left: -5vw;
            top: 40vh;
        }

        p {
            font-size: 1.8rem;
            width: 80%;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        .section-two {
            width: 220%;
            height: 200vh;
        }

        .text-container {
            height: 110%;
            width: 110%;
            top: 340vh;
            left: 13vw;
        }

        img {
            width: 43%;
            left: 110vw;
            top: 23vh;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        .section-two {
            width: 260%;
            height: 190vh;
        }


        .text-container {
            height: 115%;
            width: 125%;
            top: 340vh;
            left: 13vw;
        }

        img {
            width: 43%;
            left: 130vw;
            top: 23vh;
        }
    }

</style>
