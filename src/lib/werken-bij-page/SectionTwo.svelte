<script>
    import ButtonSignUp from "$lib/reusable-components/buttons/ButtonSignUp.svelte";

    export let data

    const image5 = data.assets[3].url;
</script>

<section class="section-two-work-at">
{#each data.werkenBijPages as werkenBijPage }


    <article>
        <h3>Word <span>DE TOPPER</span> bij <span class="span-new-line">Lux-Eventos</span></h3>
        <p>{werkenBijPage.intro2}</p>

        <div class="image-color-container"></div>
        <div class="flex-container-1">
        <img src={image5} alt="Description of the image" />
        <p>{werkenBijPage.quote2}</p>
        </div>

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
        font-family: "roboto", serif;
        font-weight: 200;
        font-style: normal;
        text-align: center;
        line-height: 4rem;
    }

    p {
        font-size: 1rem;
        font-family: "roboto", serif;
        font-weight: 300;
        text-align: center;
        margin-top: 2rem;
        letter-spacing: 0.1rem;

    }

    span {
        font-size: var(--header-one);
        font-family: "cormorant-garamond", serif;
        font-weight: 800;
    }

    .span-new-line {
        font-family: "roboto", serif;
        font-weight: 200;
        font-style: italic;
    }


    .section-two-work-at {
        background-color: var(--background-color-light);
    }

    .image-color-container {
        position: absolute;
        background-color: var(--color-dark-brown);
        width: 30%;
        height: 40%;
        top: 322%;
        left: 9%;
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
        line-height: 2.5rem;
        text-align: left;
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
        line-height: 2.5rem;
        gap: 3rem;
    }

    .text-container p {
        width: 80%;
    }
</style>



