<script>
    import ButtonSingUp from "$lib/reusable-components/ButtonSingUp.svelte";

    export let data
</script>

{#each data.homepages as homepage }
    <article>
        <h5>{homepage.titel4}</h5>
        <p>{homepage.nummeredList4}</p>
        <p>{homepage.beschrijving4}</p>
    </article>
{/each}

<ButtonSingUp data={data} />