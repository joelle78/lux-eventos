<script>
    export let data

    const image2 = data.assets[0].url;
</script>

<section class="section-two">
{#each data.homepages as homepage }

    <div class="text-container">
    <article>
        <h3>Wie zijn <span>wij?</span></h3>
        <p>{homepage.beschrijving2}</p>
    </article>
    </div>

    <img src={image2} alt="Description of the image" />
{/each}
</section>

<style>
    .section-two {
        background-color: var(--background-color-medium);
        padding-bottom: 15rem;
    }

    h3, p {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        margin-left: 1rem;
    }

    h3 {
        font-family: "catamaran", serif;
        font-weight: 200;
        font-size: var(--header-two);
        margin-top: 4rem;
        line-height: 4rem;
    }

    span {
        font-style: normal;
        font-weight: 200;
    }

    p {
        font-size: var(--paragraph);
        line-height: 2.2rem;
        margin-top: 1.5rem;
        width: 75%;
    }

    article {
        margin-left: 1.5rem;
    }

    .text-container {
        position: absolute;
        height: 80%;
        width: 28%;
        background-color: white;
        top: 230vh;
        left: 25vw;
    }

    img {
        position: relative;
        width: 25%;
        left: 49vw;
        margin-top: 15rem;
    }

    /*MEDIA QUERY TABLET*/
    @media screen and (max-width: 768px) {
        .section-two {
            width: 130%;
            height: 150vh;
        }

        h3 {
            margin-top: 2rem;
        }

        p {
            font-size: var(--par-tablet);
        }

        .text-container {
            height: 80%;
            width: 50%;
            top: 250vh;
            left: 25vw;
        }

        img {
            width: 30%;
            left: 70vw;
            margin-top: 21rem;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 426px) {
        .section-two {
            width: 260%;
            height: 160vh;
        }

        .text-container {
            height: 85%;
            width: 100%;
            top: 230vh;
            left: 50vw;
        }

        img {
            width: 35%;
            left: 140vw;
            margin-top: 21rem;
        }
    }

</style>
