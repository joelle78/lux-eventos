<script>
    import ButtonReturn from "$lib/reusable-components/buttons/ButtonReturn.svelte";
</script>

<section>
    <article>
        <h1>
            Bedankt voor je aanvraag! We nemen zo spoedig mogelijk contact met je op.
        </h1>
       <ButtonReturn/>
    </article>

</section>

<style>
    section {
        height: 100vh;
        background-color: var(--background-color-light);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    article {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


    }

    h1 {
        font-family: "PT Serif", sans-serif;
        font-size: 3rem;
        text-align: center;
        width: 75%;
        margin-bottom: 3rem;
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
       h1 {
           font-size: 2rem;
        }
    }
</style>

