<script>
    import ButtonContact from "$lib/reusable-components/buttons/ButtonContact.svelte";

    export let data

    const image7 = data.assets[5].url;

</script>

<section>
    {#each data.voorOpdrachtgeversPages as opdrachtgevers }
        <article>

            <h3>ONZE AANPAK</h3>
            <div class="flex-container-1">
                <p>{opdrachtgevers.intro2}</p>

                <div class="color-background-1"></div>
                <img src={image7} alt="Description of the image"/>

            </div>

            <div class="flex-container-2">
                        <p>{opdrachtgevers.beschrijving2}</p>
                <ButtonContact/>
            </div>
        </article>
    {/each}
</section>

<style>
    section {
        padding-top: 8rem;
        background-color: var(--background-color-light);
    }

    h3 {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-style: normal;
        font-size: var(--header-one);
        margin-left: 10rem;
        margin-bottom: 3rem;
    }

    .flex-container-1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 10rem;
    }

    .flex-container-1 p {
        position: relative;
        width: 30%;
        font-family: "fira-sans", serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        right: 9%;
        line-height: 2.2rem;
        margin-top: 3rem;

    }

    .color-background-1 {
        position: relative;
        background-color: var(--color-beige);
        width: 30%;
        height: 40vh;
    }

    img {
        position: absolute;
        width: 30%;
        left: 49%;
        top: 336.5%;
    }

    .flex-container-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding-bottom: 5rem;
    }

    .flex-container-2 p {
        font-size: var(--paragraph);
        font-family: "roboto", serif;
        font-weight: 300;
        font-style: normal;
        width:80%;
        line-height: 2.2rem;
        margin-bottom: 2rem;
        text-align: center;

    }


</style>