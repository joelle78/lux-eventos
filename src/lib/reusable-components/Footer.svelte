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
            <a href="https://www.instagram.com/luxeventos.nl/"><li class="flex-wrapper-socials"><img src={Insta} alt="" aria-label=""/>
            </li> </a>

        </ul>

    </div>

</footer>

<style>
    footer {
        background-color: var(--background-color-light);
        padding-bottom: 1rem;
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
        color: black;
        font-family: "fira-sans", serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1rem;
        text-align: center;
        padding-bottom: 1rem;
    }

    .flex-wrapper-footer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    img {
        width: 10%;
        margin-top: 1rem;
    }


    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        footer {
            width: 130%;
            height: auto;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        footer {
            width: 200%;
            height: auto;
        }

        li {
            font-size: 1.2rem;
        }

    }


    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        footer {
            width: 220%;
            height: auto;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        footer {
            width: 260%;
            height: auto;
        }
    }
</style>