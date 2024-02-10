<script>
    import HeaderImgHome from '$lib/assets/header-home.png'
</script>

<header>
    <img src={HeaderImgHome} alt="" aria-label="">

    <article>
        <h1>Het event team op maat gemaakt, <span>JOUW</span> succes begint met <span>ONZE</span> selectie</h1>
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




</style>