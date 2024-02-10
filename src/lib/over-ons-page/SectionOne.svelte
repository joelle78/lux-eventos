<script>
    export let data

    const image8 = data.assets[6].url;
</script>

{#each data.overOnsPages as overOns }
    <article>
        <h2>{overOns.titel}</h2>
        <img src={image8} alt="Description of the image" />
        <p>{overOns.beschrijving}</p>
    </article>

{/each}