<script>
    export let data

</script>

<section class="section-three-work-at">
    {#each data.werkenBijPages as werkenBijPage }
        <article>

            <h4>WAT BIEDEN WIJ JOU?</h4>

            <div class="container-of-containers">
                <div class="flex-container-1">
                    <div class="card-container">
                        <div class="text-container">
                            <h5>Concurrerend uurloon 💵</h5>
<!--                            <p>Ontvang wat je waar bent. Bij Lux-Eventos bieden we een concurrerend uurloon dat jouw-->
<!--                                expertise en toewijding eerlijk weerspiegelt.</p>-->
                            {#each werkenBijPage.pijlers3 as pijler, i}
                                {#if i === 0}
                                    <p>{pijler.text}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>

                    <div class="card-container">
                        <div class="text-container">
                            <h5>Variatie in opdrachten 💼</h5>
<!--                            <p>Van intieme diners tot grootschalige evenementen. Bij ons krijg je toegang tot een-->
<!--                                gevarieerd scala aan opdrachten in de horeca en events, waardoor geen dag hetzelfde-->
<!--                                is.</p>-->
                            {#each werkenBijPage.pijlers3 as pijler, i}
                                {#if i === 1}
                                    <p>{pijler.text}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>

                    <div class="card-container">
                        <div class="text-container">
                            <h5>Flexibiliteit 🗓️</h5>
<!--                            <p>Bij Lux-Eventos geloven we in de kracht van individuen. Hier ontvang je niet alleen een-->
<!--                                beloning voor je werk, maar ook erkenning voor de unieke bijdrage die je levert aan de-->
<!--                                evenementen die we samen creëren.</p>-->
                            {#each werkenBijPage.pijlers3 as pijler, i}
                                {#if i === 2}
                                    <p>{pijler.text}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>
                </div>


                <div class="flex-container-2">
                    <div class="card-container">
                        <div class="text-container">
                            <h5>Ondersteuning en samenwerking 🤝</h5>
<!--                            <p>Bij Lux-Eventos geloven we in een hechte samenwerking. Ons team staat altijd voor je-->
<!--                                klaar om te begeleiden, vragen te beantwoorden en successen te vieren.</p>-->
                            {#each werkenBijPage.pijlers3 as pijler, i}
                                {#if i === 3}
                                    <p>{pijler.text}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>

                    <div class="card-container">
                        <div class="text-container">
                            <h5>Professionele groei 📈</h5>
<!--                            <p>-->
<!--                                Investeer in je professionele ontwikkeling. Ontvang kansen om je vaardigheden aan te-->
<!--                                scherpen en te groeien in een dynamische en inspirerende omgeving.-->
<!--                            </p>-->

                            {#each werkenBijPage.pijlers3 as pijler, i}
                                {#if i === 4}
                                    <p>{pijler.text}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>

                    <div class="card-container">
                        <div class="text-container">
                            <h5>Waardering voor jouw bijdrage 👍</h5>
                            {#each werkenBijPage.pijlers3 as pijler, i}
                                {#if i === 5}
                                    <p>{pijler.text}</p>
                                {/if}
                            {/each}
<!--                            <p>Bij Lux-Eventos geloven we in de kracht van individuen. Hier ontvang je niet alleen een-->
<!--                            beloning voor je werk, maar ook erkenning voor de unieke bijdrage die je levert aan de-->
<!--                            evenementen die we samen creëren.</p>-->
                        </div>
                    </div>
                </div>
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

    h4 {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-style: normal;
        margin-bottom: 5rem;
    }

    h5 {
        font-family: "roboto", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        line-height: 2rem;

    }

    p {
        font-family: "roboto", serif;
        font-weight: 300;
        font-style: normal;
        font-size: 1rem;
    }

    span {
        padding-bottom: 10rem;
    }

    .container-of-containers {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .flex-container-1, .flex-container-2 {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        width: 75%;
        margin-bottom: 8rem;

    }

    .card-container {
        outline: 2px solid var(--color-dark-brown);
        width: 100%;
        height: 50vh;
    }

    .text-container {
        margin-left: 2rem;
        width: 80%;
        line-height: 2rem;
    }

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        .section-three-work-at {
            width: 130%;
            height: 200vh;
        }

        h5 {
            font-size: 1.4rem;
        }

        .flex-container-1, .flex-container-2 {
            gap: 1.5rem;
            width: 85%;
            margin-bottom: 3rem;

        }

        .card-container {
            height: 70vh;
        }
    }


</style>