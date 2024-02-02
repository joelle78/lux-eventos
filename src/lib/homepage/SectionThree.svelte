<script>
    export let data
</script>

{#each data.homepages as homepage }
    <article>
        <h4>{homepage.titel3}</h4>
        <p>{homepage.beschrijving3}</p>

    </article>
{/each}