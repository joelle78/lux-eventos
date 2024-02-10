<script>
    import ButtonSingUp from "$lib/reusable-components/buttons/ButtonSignUp.svelte";

    export let data
</script>

<section class="section-four">
{#each data.homepages as homepage }
    <article>
        <h5>{homepage.titel4}</h5>
        <p>{homepage.nummeredList4}</p>
        <p>{homepage.beschrijving4}</p>
    </article>
{/each}

<ButtonSingUp data={data}/>
</section>

<style>
    .section-four {
        background-color: var(--background-color-light);
    }
</style>