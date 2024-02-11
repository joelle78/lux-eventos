<script>
    import HeaderImgWerkenBij from '$lib/assets/header-werken-bij.png'
</script>

<header>
    <img src={HeaderImgWerkenBij} alt="" aria-label="">

    <article>
        <h1>Ontdek <span>OP MAAT</span> gemaakte opdrachten die passen bij <span>JOUW</span> expertise en ambities</h1>
    </article>
</header>



<style>

    h1 {
        font-family: "roboto", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--header-two);
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