<script>

    // export let data
</script>

<section>
    <div class="flex-container-contact-form-text">
    <h5 id="contact-employees">CONTACT</h5>
    <p>We verbinden u graag met gekwalificeerde ZZP'ers die passen bij uw specifieke behoeften. Vul het formulier
        hieronder in met uw contactgegevens en vragen. Ons team zal uw aanvraag zo spoedig mogelijk behandelen en
        contact met u opnemen om uw wensen verder te bespreken.</p>
    </div>

    <div class="flex-container-contact-form">
    <form action="#" method="POST">

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
        padding-top: 8rem;
        padding-bottom: 8rem;
    }

    h5 {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-style: normal;
        font-size: var(--header-two);
        margin-bottom: 2rem;

    }

    p {
        text-align: center;
        font-family: "roboto", serif;
        font-weight: 300;
        font-style: normal;
        font-size:var(--paragraph);
        width: 80%;
        line-height: 2.2rem;
        margin-bottom: 5rem;
    }

    label {
        font-family: "roboto", serif;
        font-weight: 300;
        font-style: normal;
        font-size:var(--paragraph);
        display: block;
    }

    input {
        font-family: "roboto", serif;
        font-weight: 300;
        font-style: normal;
        font-size: 1rem;
        width: 20rem;
        height: 2rem;
    }

    textarea {
        font-family: "roboto", serif;
        font-weight: 300;
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

    .flex-1, .flex-2{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        margin-bottom: 1rem;
    }

    label {
        margin-bottom: 1rem;
    }

    input, textarea{
        border: none;
    }

    input:focus,
    textarea:focus {
        outline: 2px solid var(--color-dark-brown);
    }

    button {
        margin-top: 2rem;
        font-family: "roboto", serif;
        font-weight: 400;
        font-style: normal;
        background-color: transparent;
        display: inline-block;
        padding: 10px 20px;
        border: 2px solid var(--color-dark-brown); /* Border color */
        color: black;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        transition: border-color 0.3s ease;

    }

    button:hover {
        border-radius: 5px;
        transition: ease 1s;
    }

</style>