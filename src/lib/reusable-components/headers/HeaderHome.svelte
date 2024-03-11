<script>
    import HeaderImgHome from '$lib/assets/header-home.png'

</script>

<header>
    <img src={HeaderImgHome} alt="" aria-label="">

    <article>
        <div class="flex-container">
            <h1>Het event team op maat gemaakt, <span>JOUW</span> succes begint met <span>ONZE</span> selectie</h1>
            <a href="/voor-opdrachtgevers">
                <button type="button">Ontdek nu!</button>
            </a>
        </div>
    </article>

</header>

<style>
    header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100vh;
        overflow: clip;
        background-color: black;
    }

    h1 {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--header-two);

        text-align: center;
        line-height: 5rem;
        letter-spacing: 0.2rem;
        color: white;
        width: 80%;
    }

    span {
        font-family: "cormorant-garamond", serif;
        font-weight: 900;
        font-style: normal;
    }

    article {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        position: absolute;
        width: 100vw;
        object-fit: cover;
        filter: grayscale(0.5);
    }

    a {
        position: absolute;
        top: 80%;
    }

    button {
        margin-top: 5rem;
        font-family: "roboto", serif;
        font-weight: 300;
        font-style: normal;
        background-color: transparent;
        display: inline-block;
        padding: 10px 20px;
        border: 2px solid white;
        color: white;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        transition: border-color 0.3s ease;
        letter-spacing: 0.2rem;
    }

    button:hover {
        border-radius: 5px;
        transition: ease 1s;
        border: 2px solid var(--background-color-medium);
        color: var(--background-color-medium);
    }

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2rem;
            line-height: 2.5rem;
            width: 80%;
        }

        header {
            width: 130vw;
        }

        img {
            width: auto;
        }

        button {
            margin-top: 7rem;
            font-size: 20px;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        header {
            width: 200vw;
            height: 150vh;
        }

        img {
            width: auto;
            height: 160vh;
        }

        h1 {
            font-size: 3rem;
            line-height: 3.5rem;
            width: 90%;
        }

        button {
            margin-top: 10rem;
            font-size: 23px;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        header {
            width: 220%;
            height: 150vh;
        }

        img {
            width: auto;
            height: 160vh;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 320px) {

        header {
            width: 260%;
            height: 170vh;
        }

        img {
            width: auto;
            height: 180vh;
            /*overflow: clip;*/
        }
    }


</style>