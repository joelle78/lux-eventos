<script>
    export let data

    const image9 = data.assets[7].url;
    const image10 = data.assets[8].url;
</script>

{#each data.overOnsPages as overOns }
    <article>
        <h3>{overOns.titel2}</h3>
        <p>{overOns.intro2}</p>
        <img src={image9} alt="Description of the image" />
        <img src={image10} alt="Description of the image" />
        <p>{overOns.beschrijving2}</p>
    </article>

{/each}