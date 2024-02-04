<script>
    export let data

</script>

{#each data.werkenBijPages as werkenBijPage }
    <article>
        <h4>{werkenBijPage.titel3}</h4>
        {#each werkenBijPage.pijlers3 as pijler (pijler.text)}
            <p>{pijler.text}</p>
        {/each}
    </article>
{/each}