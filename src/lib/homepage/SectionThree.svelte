<script>
    export let data

    const image3 = data.assets[1].url;
</script>

<section class="section-three">
{#each data.homepages as homepage }

    <div class="image-container">
    <img src={image3} alt="Description of the image" />
    </div>


        <h4>WERKEN ALS <span>freelancer</span></h4>
    <div class="text-container">
        <p>{homepage.beschrijving3}</p>
    </div>
{/each}
</section>

<style>

    h4 {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        position: relative;
        font-size: var(--header-one);
        color: white;
        top: 40vh;
        left: 40vw;
        width: 50%;
    }

    span {
        display: block;
        font-family: "abril-fatface", serif;
        font-weight: 400;
        font-style: italic;
        font-size: var(--header-one);
        letter-spacing: 0.2rem;
        margin: 0.3rem 0 0 12rem;
    }

    .text-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: var(--background-color-light);
        width: 70%;
        height: 35vh;
        top: 50vh;
    }

    p {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        line-height: 2.3rem;
        width: 90%;
        margin-left: 1.5rem;
    }

    .section-three {
        background-color: var(--background-color-dark);
        height: 170vh;
    }

    .image-container {
        position: relative;
        background-color: white;
        width: 30vw;
        height: 40vh;
        top: 20vh;
        left: 10vw;
    }

    img {
        position: absolute;
        width: 110%;
        top: 2.3vh;
        left: 1.2vw;
    }

    @media screen and (max-width: 768px) {
        .section-three {
            width: 130%;
            height: 180vh;
        }

        p {
            font-size: var(--par-tablet);

        }

        .image-container {
            width: 42vw;
            height: 33vh;
            top: 20vh;
            left: 10vw;
        }

        img {
            width: 110%;
            left: 1.8vw;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 426px) {
        .section-three {
            width: 260%;
            height: 180vh;
        }


        .image-container {
            width: 80vw;
            height: 35vh;
            top: 20vh;
            left: 35vw;
        }

        img {
            width: 140%;
            left: 5vw;
        }

        h4 {
            width: 60%;
        }

        .text-container {
            width: 80%;
            margin-top: 2rem;
        }

    }

</style>