<script>
    import LogoTrans from '$lib/assets/logo-transparant.png';


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

    <img src={LogoTrans} alt="" aria-label=""/>
    </div>


</footer>

<style>
    footer {
        background-color: var(--background-color-light);
        padding-bottom: 2rem;
    }

    .flex-container-line {
        display: flex;
        justify-content: center;
        align-items: center;
    }

     .line-footer {
         border: 1px solid var(--color-beige);
         width: 80%;
         margin-top: 2rem;

    }

    ul {
        padding-top: 8rem;
        padding-bottom: 1rem;
        margin-left: 10rem;
        list-style: none;
    }

    li {
        color: black;
        font-family: "fira-sans", serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
    }

    .flex-wrapper-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    img {
        width: 25%;
        margin-top: 2rem;
        margin-right: 5rem;
    }

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        footer {
            width: 130%;
            height: auto;
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