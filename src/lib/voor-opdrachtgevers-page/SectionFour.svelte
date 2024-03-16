<script src="https://web3forms.com/client/script.js" async defer></script>

<section>




    <div class="flex-container-contact-form-text">
        <h5 id="contact-employees">CONTACT</h5>
        <p>We verbinden u graag met gekwalificeerde ZZP'ers die passen bij uw specifieke behoeften. Vul het formulier
            hieronder in met uw contactgegevens en vragen. Ons team zal uw aanvraag zo spoedig mogelijk behandelen en
            contact met u opnemen om uw wensen verder te bespreken.</p>
    </div>

    <div class="flex-container-contact-form">



        <form action="https://api.web3forms.com/submit" method="POST">

            <input type="hidden" name="access_key" value="33363e93-6b07-4679-8fad-6251f4982f3b">

            <div class="flex-1">
                <div>
                    <label for="naam">Naam:</label>
                    <input type="text" id="naam" name="naam" required>
                </div>

                <div>
                    <label for="bedrijf">Bedrijf/Instelling:</label>
                    <input type="text" id="bedrijf" name="bedrijf">
                </div>
            </div>

            <div class="flex-2">
                <div>
                    <label for="telefoonnummer">Telefoonnummer:</label>
                    <input type="tel" id="telefoonnummer" name="telefoonnummer">
                </div>
                <div>
                    <label for="e-mail">E-mail:</label>
                    <input type="email" id="e-mail" name="e-mail">
                </div>
            </div>

            <div>
                <label for="bericht">Bericht:</label>
                <textarea id="bericht" name="bericht" rows="10" required></textarea>
            </div>

            <button type="submit">Verstuur</button>
        </form>
    </div>


</section>

<style>
    section {
        background-color: var(--background-color-medium);
        position: relative;
        height: 110vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 5rem;
        padding-bottom: 5rem;
    }

    h5 {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-style: normal;
        font-size: var(--header-two);
        margin-bottom: 1rem;

    }

    p {
        text-align: center;
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        width: 80%;
        line-height: 2.2rem;
        margin-bottom: 2rem;
    }

    label {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        display: block;
    }

    input {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1rem;
        width: 20rem;
        height: 2rem;
        border-radius: 10px;
    }

    textarea {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1rem;
        width: 43rem;
        resize: none;
    }

    .flex-container-contact-form-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .flex-container-contact-form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .flex-1, .flex-2 {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        margin-bottom: 1rem;
    }

    label {
        margin-bottom: 1rem;
    }

    input, textarea {
        border: none;
        border-radius: 10px;
    }

    input:focus,
    textarea:focus {
        outline: 2px solid var(--color-beige);
    }

    button {
        margin-top: 2rem;
        font-family: "roboto", serif;
        font-weight: 400;
        font-style: normal;
        background-color: transparent;
        display: inline-block;
        padding: 10px 20px;
        border: 2px solid var(--color-beige); /* Border color */
        color: black;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        transition: border-color 0.3s ease;
        border-radius: 10px;

    }

    button:hover {
        border-radius: 5px;
        transition: ease 1s;
    }

    /*MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        section {
            width: 130vw;
            height: 140vh;

        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        section {
            width: 200%;
            height: 200vh;
        }

        p {
            font-size: 2rem;
            line-height: 3rem;
            width: 90%;
            padding-bottom: 2rem;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        section {
            width: 220vw;
            height: 145vh;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        section {
            width: 260vw;
            height: 150vh;

        }
    }
</style>