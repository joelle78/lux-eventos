<script>

    export let data;


    import {onMount} from 'svelte';

    let carrousel;
    let dots = [];
    let activeDotIndex = 0;

    onMount(() => {
        carrousel = document.querySelector('.carrousel');
        dots = Array.from(document.querySelectorAll('.page-indicator-dot'));

        const updateActiveState = () => {
            // Calculate the index of the active dot based on scroll position
            const scrollWidth = carrousel.scrollWidth - carrousel.clientWidth;
            const scrollLeft = carrousel.scrollLeft;
            const newIndex = Math.round((scrollLeft / scrollWidth) * (dots.length - 1));

            // Update activeDotIndex
            activeDotIndex = newIndex;

            // Update active class for dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeDotIndex);
            });
        };

        const handleScroll = () => {
            updateActiveState();
        };

        const handleDotClick = (index) => {
            const scrollDistance = (index / (dots.length - 1)) * (carrousel.scrollWidth - carrousel.clientWidth);
            carrousel.scrollTo({left: scrollDistance, behavior: 'smooth'});
        };

        carrousel.addEventListener('scroll', handleScroll);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                handleDotClick(index);
            });
        });

        return () => {
            carrousel.removeEventListener('scroll', handleScroll);
            dots.forEach((dot, index) => {
                dot.removeEventListener('click', () => {
                    handleDotClick(index);
                });
            });
        };
    });
</script>


<section class="section-four">
    {#each data.homepages as homepage }
        <article>

            <div class="svg-container">
                <svg width="37" height="25" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 85V3H97" stroke="#B8A096" stroke-width="3"/>
                </svg>
            </div>

            <h5>Waarom freelancen <span>bij Lux-Eventos</span></h5>
            <p>{homepage.beschrijving4}</p>
        </article>
    {/each}

    <div class="carrousel-container">
        <div class="carrousel">

            <div class="carrousel-text">
                <h6>Uurloon</h6>
                <p>Bij Lux-Eventos begrijpen we dat jouw talent van onschatbare waarde zijn. Daarom streven we ernaar om
                    niet alleen een uitzonderlijke werkomgeving te bieden, maar ook een eerlijk en concurrerend uurloon
                    dat jou weerspiegelt.
                </p>
            </div>

            <div class="carrousel-text">
                <h6>Variatie in opdrachten</h6>
                <p>Als freelancer heb je bij ons toegang tot een breed scala aan opdrachten in de horeca en
                    events. Of het nu gaat om een intiem diner, een grootse bruiloft, of een zakelijk evenement,
                    er wacht altijd een nieuwe uitdaging op je.</p>
            </div>

            <div class="carrousel-text">
                <h6>Flexibiliteit</h6>
                <p>Wij begrijpen de waarde van flexibiliteit. Als freelancer bepaal jij zelf welke opdrachten bij jou
                    passen en wanneer je beschikbaar bent. Jouw agenda, jouw regels.</p>
            </div>

            <div class="carrousel-text">
                <h6>Ondersteuning en samenwerking</h6>
                <p>Bij Lux-Eventos geloven we in samenwerking en ondersteuning. Ons team staat altijd voor je
                    klaar om je te begeleiden, vragen te beantwoorden en successen te vieren.</p>
            </div>

            <div>
                <div class="page-indicator">
                    {#each Array.from({length: data.homepages.length}) as _, i}
                        <span class="page-indicator-dot active {i === activeDotIndex ? 'active' : ''}"></span>
                        <span class="page-indicator-dot"></span>
                        <span class="page-indicator-dot"></span>
                        <span class="page-indicator-dot"></span>
                    {/each}
                </div>


            </div>

        </div>
    </div>


</section>


<style>
    .section-four {
        background-color: var(--background-color-light);
    }

    article {
        padding-top: 10rem;
    }

    .svg-container {
        width: 7%;
        margin-left: 5%;
    }

    .svg-container svg {
        width: 100%;
        height: auto;
    }

    h5, span {
        font-family: "catamaran", sans-serif;
        font-weight: 200;
        font-style: normal;
        margin-left: 10rem;
    }

    h5 {
        font-size: var(--header-one);
    }

    span {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: italic;
        font-size: var(--header-two);
        margin: 0.5rem 0 0 0.3rem;
        display: block;
    }

    article p {
        width: 60%;
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        line-height: 2.8rem;
        margin: 2rem 0 0 20rem;
        padding-bottom: 8rem;
    }

    .carrousel-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 2rem 0 0 0;
        padding-bottom: 5rem;
    }

    .carrousel {
        background-color: white;
        width: 60%;
        height: 60vh;
        display: flex;
        overflow: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
    }

    h6 {
        font-family: "catamaran", sans-serif;
        font-weight: 300;
        font-style: normal;
        text-align: center;
        font-size: var(--header-three);
        margin: 4rem 0 2rem 0;
    }

    .carrousel-text p {
        font-family: "fira-sans", sans-serif;
        font-weight: 300;
        font-style: normal;
        text-align: center;
        font-size: var(--paragraph);
        line-height: 2.5rem;
        padding: 0 2rem 0 2rem;
    }

    .carrousel-text {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100%;
        scroll-snap-align: center;
    }

    .page-indicator {
        position: absolute;
        display: flex;
        left: 47%;
        bottom: 20%;
    }

    .page-indicator-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
        margin: 0 5px;
        cursor: pointer;
    }

    .page-indicator-dot.active {
        background-color: var(--color-beige);
    }

    /*MEDIA QUERY TABLET*/
    @media screen and (max-width: 768px) {
        .section-four {
            width: 130%;
            height: 210vh;
        }

        h5 {
            font-family: 'cormorant-garamond', sans-serif;
            margin-top: 0;
            margin-left: 7rem;
        }

        span {
            margin-left: 1rem;
        }

        article p {
            font-size: var(--par-tablet);
            line-height: 2rem;
        }

        .carrousel {
            width: 80%;
            height: 65vh;
        }

        .carrousel-text p {
            font-size: var(--par-tablet);
            line-height: 2rem;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        .section-four {
            width: 200%;
            height: 190vh;
        }

        svg {
            display: none;
        }

        h5 {
            line-height: 4rem;
        }

        article p {
            margin-top: 3rem;
            margin-bottom: 7rem;
            margin-left: 8rem;
            padding-bottom: 0;
            width: 75%;
            font-size: 1.8rem;
            line-height: 2.2rem;
        }

        .carrousel {
            margin-top: 0;
            width: 80%;
            height: 50vh;

        }

        h6 {
            margin-top: 2rem;
            font-size: 2rem;
        }

        .carrousel-text p {
            font-size: 1.2rem;
        }

        .page-indicator {
            bottom: 28%;
        }
    }


    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        .section-four {
            width: 220%;
            height: 180vh;
        }

        h5 {
            line-height: 4rem;
        }

        article p {
            margin-top: 3rem;
            margin-bottom: 7rem;
            margin-left: 8rem;
            padding-bottom: 0;
            width: 75%;
            font-size: 1.2rem;
        }

        .carrousel {
            margin-top: 0;
            width: 80%;
            height: 60vh;

        }

        h6 {
            margin-top: 2rem;
            font-size: 2rem;
        }

        .carrousel-text p {
            font-size: 1.2rem;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        .section-four {
            width: 260%;
            height: 190vh;
        }
    }


</style>

