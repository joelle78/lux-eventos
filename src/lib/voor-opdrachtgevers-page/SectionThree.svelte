<script>
    export let data


</script>

{#each data.voorOpdrachtgeversPages as opdrachtgevers }
    <article>

        <h4>{opdrachtgevers.titel3}</h4>
        <p>{opdrachtgevers.nrlist3}</p>

    </article>
{/each}