<script>
    import Insta from '$lib/assets/instagram.png';
    import LogoTrans from "$lib/assets/logo-transparant.png";


</script>

<footer>

    <div class="flex-container-line">
        <hr class="line-footer">
    </div>

    <div class="flex-wrapper-footer">
        <ul>
            <li>
                06 12345678
            </li>
            <li>
                Voorstraat
                1234 AB Utrecht
            </li>
            <li>
                info@lux-eventos.nl
            </li>
        </ul>

        <div class="socials-container">
            <p>Copyright © 2024 Lux-Eventos </p>
<!--            <a class="terms-conditions" href="/terms-conditions">Algemene voorwaarden</a>-->
            <a href="https://www.instagram.com/luxeventos.nl/"><img src={Insta} alt="" aria-label=""/>
            </a>
        </div>

    </div>

</footer>

<style>
    footer {
        background-color: var(--background-color-light);
        padding-bottom: 1rem;
    }

    p {
        color: var(--color-dark-brown);
    }

    .flex-container-line {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .line-footer {
        border: 1px solid var(--color-beige);
        width: 80%;
        margin-top: 2rem;
    }

    ul {
        padding-top: 2.5rem;
        list-style: none;
    }

    li {
        color: var(--color-dark-brown);
        font-family: "PT Serif", serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1rem;
        text-align: left;
        padding-bottom: 0.5rem;
        margin-left: 10rem;

    }

    .flex-wrapper-footer {
        position: relative;
        display: flex;

        align-items: start;
        flex-direction: row;
        justify-content: space-between;
    }

    .socials-container {
        display: flex;
        flex-direction: row;
        margin-top: 6rem;
        margin-right: 7rem;
        gap: 4rem;
        font-family: "PT Serif", serif;

    }

    img {
        width: 35%;

    }

    .terms-conditions {
        text-decoration: none;
        color: var(--color-dark-brown);
    }


    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        /* footer {
            width: 130%;
            height: auto;
        } */

        li {
            font-size: 1rem;
            margin-left: 6.5rem;
        }

        .socials-container {
            flex-direction: row;
            gap: 1.5rem;
            margin-right: 4rem;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        /* footer {
            width: 200%;
            height: auto;
        } */

       .line-footer {
           width: 95%;
       }

        li {
            font-size: 1.2rem;
            margin-left: 2rem;
        }

        .socials-container {
            margin-right: 1rem;
            margin-top: 7rem;
        }

    }


    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        /* footer {
            width: 220%;
            height: auto;
        } */
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        /* footer {
            width: 260%;
            height: auto;
        } */
    }
</style>