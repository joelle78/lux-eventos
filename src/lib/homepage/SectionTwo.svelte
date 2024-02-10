<script>
    export let data

    const image2 = data.assets[0].url;
</script>

<section class="section-two">
{#each data.homepages as homepage }

    <div class="text-container">
    <article>
        <h3>WIE ZIJN <span>WIJ?</span></h3>
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
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
        margin-left: 1rem;
    }

    h3 {
        font-family: "cormorant-garamond", serif;
        font-weight: 500;
        font-size: 3rem;
        margin-top: 4rem;
        line-height: 4rem;
    }

    span {
        font-style: normal;
        font-weight: 500;
    }

    p {
        font-size: 1.2rem;
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
        margin-top: 7rem;

    }

</style>
