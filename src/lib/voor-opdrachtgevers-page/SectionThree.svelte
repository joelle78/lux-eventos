<script>
    export let data


</script>

<section>
{#each data.voorOpdrachtgeversPages as opdrachtgevers }
    <article>

        <div class= "svg-container">
        <svg width="37" height="25" viewBox="0 0 221 204" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 204V3H221" stroke="white" stroke-width="5.39322"/>
        </svg>
        </div>

        <h4>{opdrachtgevers.titel3}</h4>
<!--        <p>{opdrachtgevers.nrlist3}</p>-->
        <ol>
            <li>
                Toegang tot goed opgeleide en gescreende professionals voor hun evenementen en
                projecten.
            </li>
            <li>
                Verhoogde efficiëntie en kwaliteit van dienstverlening door gekwalificeerde
                zzp'ers.

            </li>
            <li>
                Mogelijkheid om snel en effectief in te spelen op piekmomenten en drukte.
            </li>
            <li>
                Alle feedback nemen wij uiterst serieus mee. Hierdoor kunnen wij op inspelen en
                ervoor zorgen dat de kwaliteit gewaarborgd blijft.
            </li>
        </ol>


    </article>
{/each}
</section>

<style>
    section {
        background-color: var(--background-color-dark);
        padding-top: 8rem;
    }

    h4 {
        color: white;
        font-size: var(--header-two);
        font-family: "catamaran", sans-serif;
        font-weight: 400;
        font-style: normal;
        margin-left: 10rem;
        line-height: 4rem;
        width: 60%;
    }

    p {
        color: white;
        font-family: "roboto", serif;
        font-weight: 400;
        font-size: var(--paragraph);
        display: block;
    }

    .svg-container {
        width: 7%; /* Adjust this value as needed */
        margin-left: 5%; /* Adjust this value as needed */
    }

    svg {
        width: 100%; /* Make the SVG fill its container */
        height: auto; /* Maintain aspect ratio */
    }

    ol {
        list-style-type: decimal;
        position: relative;
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        color: white;
        text-align: left;
        margin-top: 3rem;
        left:43%;
        width: 50%;
        padding-bottom: 5rem;
    }

    li {
        font-size: var(--paragraph);
        line-height: 2.2rem;
        margin-bottom: 2rem;
    }

</style>