<script>
    import HeaderImgHome from '$lib/assets/header-home.png'

</script>

<header>
    <img src={HeaderImgHome} alt="" aria-label="">

    <article>
        <h1>Het event team op maat gemaakt, <span>JOUW</span> succes begint met <span>ONZE</span> selectie</h1>
        <a href="/voor-opdrachtgevers" >
            <button type="button">Ontdek nu!</button>
        </a>
    </article>

</header>



<style>

    h1 {
        font-family: "roboto", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 3rem;
        text-align: center;
        position: absolute;
        line-height: 5rem;
        letter-spacing: 0.3rem;
        color: white;
        top: 40%;
        width: 80%;
    }

    span {
        font-family: "cormorant-garamond", serif;
        font-weight: 900;
        font-style: normal;
    }

    article {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    header {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        background-color: black;

    }

    img {
        width: 100%;
        object-fit: cover;
        filter: grayscale(1);
    }

    a {
        position: absolute;
        top: 80%;
    }

    button {
        margin-top: 2rem;
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



</style>