<script>
    import ButtonContact from "$lib/reusable-components/buttons/ButtonContact.svelte";

    export let data

    const image7 = data.assets[5].url;

</script>

{#each data.voorOpdrachtgeversPages as opdrachtgevers }
    <article>

        <h3>{opdrachtgevers.titel2}</h3>
        <p>{opdrachtgevers.intro2}</p>
        <img src={image7} alt="Description of the image" />
        <p>{opdrachtgevers.beschrijving2}</p>
        <ButtonContact/>
    </article>
{/each}