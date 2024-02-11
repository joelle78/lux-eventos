<script>
    export let data

</script>

<section class="section-three-work-at">
{#each data.werkenBijPages as werkenBijPage }
    <article>

        <h4>{werkenBijPage.titel3}</h4>

        <div class="flex-container-cards">
        {#each werkenBijPage.pijlers3 as pijler (pijler.text)}
            <p>{pijler.text}</p>
        {/each}
        </div>


    </article>
{/each}
</section>

<style>
    .section-three-work-at {
        background-color: var(--background-color-medium);
    }

    h4 {
        font-size: var(--header-two);
        text-align: center;
        padding-top: 8rem;
    }

    .flex-container-cards {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        
    }

</style>