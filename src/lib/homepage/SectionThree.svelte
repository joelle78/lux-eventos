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
        font-weight: 500;
        position: relative;
        font-size: var(--header-one);
        color: white;
        top: 40vh;
        left: 40vw;
        width: 50%;
    }

    span {
        display: block;
        font-family: "roboto", sans-serif;
        font-weight: 400;
        font-style: italic;
        letter-spacing: 0.2rem;
        margin: 0.3rem 0 0 9rem;
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
        font-family: "roboto", sans-serif;
        font-weight: 300;
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

</style>