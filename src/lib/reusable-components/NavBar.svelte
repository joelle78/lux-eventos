<script>
    import LogoTrans from '$lib/assets/logo-transparant.png';


</script>

<header>


    <div class="header-wrapper">
        <input id="toggle" type="checkbox">

        <label for="toggle" class="hamburger">
            <div class="top-bun"></div>
            <div class="meat"></div>
            <div class="bottom-bun"></div>
        </label>

        <div class="nav">
           <a href="/"><img src={LogoTrans} alt="" aria-label=""/></a>
            <div class="nav-wrapper">

                <nav>
                    <ul class="menu">
                        <li><a href="/" class="menu-item">HOME</a></li>
                        <li><a href="/werken-bij" class="menu-item">WERKEN BIJ</a></li>
                        <li><a href="/voor-opdrachtgevers" class="menu-item">VOOR OPDRACHTGEVERS</a></li>
<!--                        <li><a href="/over-ons" class="menu-item">OVER ONS</a></li>-->
                        <li><a href="/contact" class="menu-item">CONTACT</a></li>


                    </ul>
                </nav>
            </div>
        </div>

    </div>
</header>

<style>


    ul {
        font-family: "fira-sans", serif;
        font-weight: 300;
        font-style: normal;
        font-size: 1rem;
        letter-spacing: 0.2rem;
        display: flex;
        flex-direction: column;
        list-style: none;
    }


    #toggle {
        display: none;
    }

    /**
      Hamburger
    **/
    .hamburger {
        position: fixed;
        top: 5em;
        right: 5%;
        margin-left: -2em;
        margin-top: -45px;
        width: 2em;
        height: 40px;
        z-index: 5;

    }

    .hamburger div {
        position: relative;
        width: 3em;
        height: 7px;
        background-color: white;
        margin-top: 8px;
        transition: all 0.3s ease-in-out;
    }

    /**
    Nav Styles
    **/
    .nav {
        position: fixed;
        z-index: 3;
        width: 100%;
        height: 100%;
        background-color: var(--background-color-medium);
        top: -100%;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        transform: scale(0);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .nav-wrapper {
        position: relative;
        overflow: hidden;
        overflow-y: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }


    nav {
        text-align: center;
        margin-top: 1%;
    }

    img {
        position: absolute;
        width: 20%;
        top: 5vh;
        left: -5vh;
    }

    nav a {
        position: relative;
        text-decoration: none;
        color: var(--color-beige);
        font-size: 2em;
        display: inline-block;
        margin-top: 1.25em;
        transition: color 0.2s ease-in-out;
        letter-spacing: 1px;

    }

    /*nav a:before {*/
    /*    content: '';*/
    /*    height: 0;*/
    /*    position: absolute;*/
    /*    width: 0.25em;*/
    /*    background-color: white;*/
    /*    left: -0.5em;*/
    /*    transition: all 0.2s ease-in-out;*/
    /*}*/
    nav a:hover {
        color: white;
    }

    nav a:hover:before {
        height: 100%;
    }

    /**
    Animations
    **/
    #toggle:checked + .hamburger .top-bun {
        transform: rotate(-45deg);
        margin-top: 25px;
    }

    #toggle:checked + .hamburger .bottom-bun {
        opacity: 0;
        transform: rotate(45deg);
    }

    #toggle:checked + .hamburger .meat {
        transform: rotate(45deg);
        margin-top: -7px;
    }

    #toggle:checked + .hamburger + .nav {
        top: 0;
        transform: scale(1);
    }

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        img {
            width: 30%;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        img {
            width: 45%;
        }

        nav a {
            font-size: 2.5rem;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        img {
            width: 45%;
        }

    }

</style>