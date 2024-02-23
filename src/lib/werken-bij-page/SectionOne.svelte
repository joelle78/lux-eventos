<script>
    export let data

    const image4 = data.assets[2].url;
</script>

<section class="section-one-work-at">
    {#each data.werkenBijPages as werkenBijPage }

        <article>
            <h2 id="your-trip">Jouw <span>event</span> reis <span class="span-next-line">begint hier</span></h2>
            <img src={image4} alt="Description of the image"/>

            <div class="text-container">
            <p>{werkenBijPage.beschrijving}</p>
            </div>

        </article>
    {/each}
</section>


<style>


    h2 {
        font-size: var(--header-one);
        font-family: "fira-sans", sans-serif;
        font-weight: 100;
        font-style: normal;
        margin: 0 0 7rem 8rem;
        line-height: 4rem;
    }

    span {
        font-size: var(--header-one);
        font-family: "fira-sans", serif;
        font-weight: 100;
    }

    .span-next-line {
        display: block;
        font-family: "amaranth", serif;
        font-weight: 400;
        font-style: italic;
        font-size: var(--header-one);
        margin-top: 2rem;
        margin-left: 17rem;
    }

    .text-container {
        position: relative;
        z-index: 1;
        top:20vh;
        left: 43%;
        background-color: white;
        width: 35%;
        height: 65vh;
    }

    p {
        font-size: var(--paragraph);
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        text-align: left;
        line-height: 2.5rem;
        width: 65%;
        padding-top: 4rem;
        margin-left: 8rem;
    }

    .section-one-work-at {
        background-color: var(--background-color-medium);
        padding-top: 10rem;
        height: 160vh;
    }

    img {
        position: absolute;
        z-index: 2;
        width: 40%;
        margin-left: 8rem;

    }


</style>