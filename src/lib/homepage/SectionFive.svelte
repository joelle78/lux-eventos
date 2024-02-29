<script>
    import ButtonSignUp from "$lib/reusable-components/buttons/ButtonSignUp.svelte";

    export let data
</script>

<section class="section-five">
    {#each data.homepages as homepage }
        <article>

            <h6>Hoe word je onderdeel van <span>ons team?</span></h6>
<!--            <p>{homepage.beschrijving5}</p>-->

            <ul>
                <li>
                    <span>Aanmelden 📝</span> Registreer je als freelancer op onze website en vul je profiel in. We
                    willen alles
                    weten over jouw ervaring, passies en specialiteiten.
                </li>
                <li>
                    <span>Matchmaking 🤝</span> Ons zorgvuldige selectieproces zorgt ervoor dat we niet alleen de
                    beste freelancers
                    aantrekken, maar ook degenen die perfect passen bij de unieke eisen van onze opdrachten.
                </li>
                <li>
                    <span>Samenwerking 💼</span> Zodra je bent geselecteerd voor een opdracht, begint de samenwerking.
                    Werk samen
                    met ons en ontdek hoe het is om deel uit te maken van een team dat jouw succes centraal stelt.
                </li>
            </ul>


             <div class="button"><ButtonSignUp data={data}/>   </div>
        </article>

    {/each}


</section>

<style>
    .section-five {
        background-color: var(--background-color-medium);
    }

    h6 {
        font-size: var(--header-two);
        font-family: "catamaran", serif;
        font-weight: 200;
        font-style: normal;
        margin-left: 10rem;
        margin-bottom: 3rem;
    }

    span {
        font-family: "catamaran", sans-serif;
        font-weight: 200;
        font-style: normal;
    }

    /*p {*/
    /*    font-family: "roboto", sans-serif;*/
    /*    font-weight: 300;*/
    /*    font-style: italic;*/
    /*    font-size: var(--paragraph);*/
    /*    line-height: 2.2rem;*/
    /*    width: 50%;*/
    /*    margin-bottom: 1rem;*/
    /*    margin-left: 20rem;*/

    /*}*/



    article {
        display: flex;
        flex-direction: column;
        padding: 8rem 0 8rem 0;
    }

    ul {
        font-family: "fira-sans", sans-serif;
        font-weight: 300;
        font-style: normal;
        list-style: none;
        text-align: left;
        line-height: 2.5rem;
        margin: 3rem 0 1rem 20rem;
        width:50%;
    }

    ul span {
        display: block;
    }

    li {
        font-size: var(--paragraph);
        margin-bottom: 5rem;
    }

    li span {
        font-weight: 600;
        font-style: normal;
    }

    .button {
        margin-left: 20rem;
    }

    /*MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        .section-five {
            width: 130%;
            height: 210vh;
        }

        h6 {
            margin: 0 0 1rem 7rem;
        }

        ul {
            margin-left: 18rem;
        }

        .button {
            margin-left: 18rem;
        }
    }


    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        .section-five {
            width: 220%;
            height: 210vh;
        }

        li {
            font-size: 1.2rem;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 320px) {
        .section-five {
            width: 260%;
            height: 210vh;
        }

    }

</style>