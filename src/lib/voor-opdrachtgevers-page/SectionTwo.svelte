<script>
    import ButtonContact from "$lib/reusable-components/buttons/ButtonContact.svelte";

    export let data

    const image7 = data.assets[5].url;

</script>

<section>
{#each data.voorOpdrachtgeversPages as opdrachtgevers }
    <article>

        <h3>Onze aanpak</h3>
        <div class="flex-container-1">
        <p>{opdrachtgevers.intro2}</p>
        <img src={image7} alt="Description of the image" />
        </div>
        <p>{opdrachtgevers.beschrijving2}</p>
        <ButtonContact/>
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
        font-weight: 600;
        font-style: normal;
        font-size: var(--header-one);
        margin-left: 10rem;
        margin-bottom: 3rem;
    }

   .flex-container-1 {
       display: flex;
       flex-direction: row;
       justify-content: center;
   }

   .flex-container-1 p {
       width: 30%;
   }

   img {
       width: 30%;
   }
</style>