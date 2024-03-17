<script>
    import HeaderImgHome from '$lib/assets/header-home.png'

</script>

<header>
    <img src={HeaderImgHome} alt="" aria-label="">

    <article>
        <div class="flex-container">
            <h1>Het event team op maat gemaakt, <span>JOUW</span> succes begint met <span>ONZE</span> selectie</h1>
            <a href="/voor-opdrachtgevers">
                <button type="button">ONTDEK NU!</button>
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

        padding-bottom: 5rem;
    }

    span {
        font-family: "PT Serif", serif;
        font-weight: 500;
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
        height: 100vh;
        object-fit: cover;
       opacity: 0.7;
    }

    a {
        position: absolute;
        top: 80%;
    }

    button {
        font-family: "PT Serif", serif;
        font-weight: 400;
        font-style: normal;
        background-color: transparent;
        display: inline-block;
        padding: 13px 20px;
        border: 2px solid white;
        color: white;
        text-decoration: none;
        font-size: 19px;
        cursor: pointer;
        letter-spacing: 0.2rem;
        border-radius: 10px;
        transition: ease-out 0.5s;
    }

    button:hover {
        transition: ease-in 0.5s;
        border-radius: 25px;
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
            width: 130vw;
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