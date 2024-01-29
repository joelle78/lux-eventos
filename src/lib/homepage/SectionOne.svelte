<script>
    export let data
</script>

{#each data.homepages as homepage }
    <article>
        <h2>{homepage.titel}</h2>
        <p>{homepage.beschrijving}</p>

    </article>
{/each}