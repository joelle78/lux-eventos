<script>
    import ButtonSingUp from "$lib/reusable-components/buttons/ButtonSignUp.svelte";

    export let data
</script>

<section class="section-five">
    {#each data.homepages as homepage }
        <article>
            <h6>Hoe word je onderdeel van <span>ons team?</span></h6>

            <ul>
                <li>
                    <span>1. Aanmelden:</span> Registreer je als freelancer op onze website en vul je profiel in. We
                    willen alles
                    weten over jouw ervaring, passies en specialiteiten.
                </li>
                <li>
                    <span> 2. Matchmaking:</span> Ons zorgvuldige selectieproces zorgt ervoor dat we niet alleen de
                    beste freelancers
                    aantrekken, maar ook degenen die perfect passen bij de unieke eisen van onze opdrachten.
                </li>
                <li>
                    <span>3. Samenwerking:</span> Zodra je bent geselecteerd voor een opdracht, begint de samenwerking.
                    Werk samen
                    met ons en ontdek hoe het is om deel uit te maken van een team dat jouw succes centraal stelt.
                </li>
            </ul>

            <p>{homepage.beschrijving5}</p>
            <ButtonSingUp data={data}/>
        </article>

    {/each}


</section>

<style>
    h6 {
        font-size: var(--header-two);
        font-family: "roboto", serif;
        font-weight: 300;
        font-style: normal;
        text-align: center;
    }

    span {
        font-family: "roboto", sans-serif;
        font-weight: 500;
        font-style: italic;
    }

    p {
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: italic;
        font-size: var(--paragraph);
        line-height: 2rem;
        width: 80%;
        text-align: center;
        margin-bottom: 1rem;

    }

    .section-five {
        background-color: var(--background-color-medium);
    }

    article {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 8rem 0 8rem 0;
    }

    ul {
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
        list-style: none;
        text-align: center;
        line-height: 2.5rem;
        margin: 3rem 0 2rem 0;
        width: 80%;
    }

    li {
        font-size: var(--paragraph);
        margin-bottom: 2rem;
    }

    li span {
        font-weight: 600;
        font-style: normal;
    }
</style>