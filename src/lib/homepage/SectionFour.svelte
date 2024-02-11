<script>

    export let data;






    import { onMount } from 'svelte';

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
            carrousel.scrollTo({ left: scrollDistance, behavior: 'smooth' });
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
                <svg width="97" height="85" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 85V3H97" stroke="#94694B" stroke-width="5"/>
                </svg>
            </div>

            <h5>Waarom freelancen <span>bij Lux-Eventos</span></h5>
            <p>{homepage.beschrijving4}</p>
        </article>
    {/each}

    <div class="carrousel-container">

<!--       <button class="left-arrow"> <svg  width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="M0.0242521 26L49.5452 0.926677L49.5032 51.1561L0.0242521 26Z" fill="#94694B"/>-->
<!--        </svg>-->
<!--       </button>-->

    <div class="carrousel">

        <div class="carrousel-text">
            <h6>Uurloon</h6>
            <p>Bij Lux-Eventos begrijpen we dat jouw talent van onschatbare waarde zijn. Daarom streven we ernaar om
                niet alleen een uitzonderlijke werkomgeving te bieden, maar ook een eerlijk en concurrerend uurloon dat
                jou weerspiegelt.

                In vergelijking met onze concurrenten nemen wij de beloning van freelancers serieus. Wij zijn
                trots om een bovengemiddeld uurloon aan te bieden, omdat we geloven dat jouw inzet van
                waarde zijn.</p>
        </div>

        <div class="carrousel-text">
            <h6>Variatie in opdrachten</h6>
            <p>Als freelancer heb je bij ons toegang tot een breed scala aan opdrachten in de horeca en
                events. Of het nu gaat om een intiem diner, een grootse bruiloft, of een zakelijk evenement,
                er wacht altijd een nieuwe uitdaging op je.</p>
        </div>

        <div class="carrousel-text" >
            <h6>Flexibiliteit</h6>
            <p>Wij begrijpen de waarde van flexibiliteit. Als freelancer bepaal jij zelf welke opdrachten bij jou
                passen en wanneer je beschikbaar bent. Jouw agenda, jouw regels.</p>
        </div>

        <div class="carrousel-text" >
            <h6>Ondersteuning en samenwerking</h6>
            <p>Bij Lux-Eventos geloven we in samenwerking en ondersteuning. Ons team staat altijd voor je
                klaar om je te begeleiden, vragen te beantwoorden en successen te vieren.</p>
        </div>

        <div>
        <div class="page-indicator">
            {#each Array.from({ length: data.homepages.length }) as _, i}
                <span class="page-indicator-dot active {i === activeDotIndex ? 'active' : ''}"></span>
                <span class="page-indicator-dot"></span>
                <span class="page-indicator-dot"></span>
                <span class="page-indicator-dot"></span>
            {/each}
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
        width: 7%; /* Adjust this value as needed */
        margin-left: 5%; /* Adjust this value as needed */
    }

    .svg-container svg {
        width: 100%; /* Make the SVG fill its container */
        height: auto; /* Maintain aspect ratio */
    }



    h5, span {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-style: normal;
        margin-left: 10rem;
    }

    h5 {
        font-size: 4.5rem;
    }

    span {
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: italic;
        font-size: 3rem;
        margin-left: 1rem;
        display: block;
    }

    article p {
        width: 60%;
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: 1.5rem;
        line-height: 2.8rem;
        margin: 2rem 0 0 24rem;
        padding-bottom: 8rem;
    }

    .carrousel-container{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 4rem;
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
        font-family: "cormorant-garamond", serif;
        font-weight: 600;
        font-style: normal;
        text-align: center;
        font-size: 2rem;
        margin-top: 4rem;
        margin-bottom: 2rem;
    }

    .carrousel-text p {
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
        text-align: center;
        font-size: 1.3rem;
        line-height: 2.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .carrousel-text {
        /* Laat afbeeldingen niet groeien */
        flex-grow: 0;
        /* Laat afbeeldingen niet kleiner worden */
        flex-shrink: 0;
        /* Maak ze standaard 100% breed */
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
        background-color: var(--color-dark-brown);
    }



</style>

