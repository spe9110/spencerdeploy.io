// Navbar
function navFunc(){
    document.querySelector('html').classList.toggle('open');
}

// Form validation with success message

        const errorNom = document.getElementById("nom-error");
        const errorSujet = document.getElementById("sujet-error");
        const errorEmail = document.getElementById("email-error");
        const errorMsg = document.getElementById("message-error");
        const errorSubmit = document.querySelector(".submit-error");

            //Message success 
        const successMsg = document.querySelector(".success-msg");
        const successh2 = document.querySelector(".success-msg h2");
        const successp = document.querySelector(".success-msg p");

        // Button submit
        const sendBtn = document.getElementById('submit-btn');

        // Nom
        function validateNom() {
            let nomVal = document.getElementById('noms').value.trim();

            if(nomVal.length === 0){
                errorNom.innerHTML = "Veuillez compléter le nom";
                document.getElementById('noms').style.border = "2px solid red";
                return false;
            } else {
                errorNom.innerHTML = "";
                document.getElementById('noms').style.border = "2px solid green";
                errorNom.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
                return true;
            }
        }
        // Sujet
        function validateSujet() {
            let sujetVal = document.getElementById('sujet').value.trim();

            if(sujetVal.length === 0){
                errorSujet.innerHTML = "Veuillez compléter le sujet";
                document.getElementById('sujet').style.border = "2px solid red";
                return false;
            } else {
                errorSujet.innerHTML = "";
                document.getElementById('sujet').style.border = "2px solid green";
                errorSujet.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
                return true;
            }
        }

        // mail
        const isEmail = (emailVal) =>{
            var atSymbol = emailVal.indexOf('@');
            if(atSymbol < 1) return false;
            var dot = emailVal.lastIndexOf('.');
            if(dot <= atSymbol + 2) return false;
            if(dot === emailVal.length -1) return false;
            return true;
        }

        function validateEmail() {
            let emailVal = document.getElementById('email').value.trim();

            if(emailVal.length === 0){
                errorEmail.textContent = "L'email ne peut pas être vide";
                document.getElementById('email').style.border = "2px solid red";
                return false;
            } else if(!isEmail(emailVal)) {
                errorEmail.textContent = "L'email n'est pas valide";
            } else {
                errorEmail.innerHTML = "";
                document.getElementById('email').style.border = "2px solid green";
                errorEmail.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
                return true;
            }
        }
        // msgContent
        function validateMessage() {
            let msgContentVal = document.getElementById('message').value.trim();
            
            const invalidMessage = msgContentVal.length <= 140;

            if(msgContentVal.length === 0){
                errorMsg.textContent = "Le message ne peut pas être vide";
                document.getElementById('message').style.border = "2px solid red";
                return false;
            } else if(invalidMessage){
                errorMsg.textContent = "Votre message ne doit pas dépasser 140 caractères";
                document.getElementById('message').style.border = "2px solid red";
                return false;
            } else {
                errorMsg.innerHTML = "";
                document.getElementById('message').style.border = "2px solid green";
                errorMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
                return true;
            }
        }

        function validateForm() {
            const errorSubmit = document.querySelector(".submit-error");
            if(!validateNom() || !validateSujet() ||   !validateEmail() || !validateMessage()){
                errorSubmit.style.display = "block";
                errorSubmit.innerHTML = "Veuillez compléter le formulaire avant d'envoyer";
                setTimeout(function(){errorSubmit.style.display = "none";}, 3000)
                return false;
            }
            else {
                let nomVal = document.getElementById('noms').value.trim();
                let mainContainer = document.querySelector(".contact-section");

                successh2.textContent = `Merci ${nomVal}!`;
                successp.textContent = `Votre message a bien été envoyé avec succès!`;
                mainContainer.classList.add('hide');
                successMsg.style.display = 'flex';
                return true;
            }
        };

        // Reset form
        function resetForm() {
            document.getElementById('prenom').value = "";
            document.getElementById('prenom').style.border = "";
            document.getElementById('noms').value = "";
            document.getElementById('noms').style.border = "";
            document.getElementById('sujet').value = "";
            document.getElementById('sujet').style.border = "";
            document.getElementById('email').value = "";
            document.getElementById('email').style.border = "";
            document.getElementById('message').value = "";
            document.getElementById('message').style.border = "";
            errorNom.innerHTML = "";
            errorSujet.innerHTML = "";
            errorEmail.innerHTML = "";
            errorMsg.innerHTML = "";
        }

        // Close Button
        function closePopup() {
            // const successMsg = document.querySelector(".success-msg");
            let mainContainer = document.querySelector(".contact-section");

            mainContainer.classList.add('hide');
            successMsg.style.display = 'none';
            resetForm();
        };

        // EmailJS
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();

            validateForm();

            var params = {
                noms : document.getElementById('noms').value,
                sujet : document.getElementById('sujet').value,
                email : document.getElementById('email').value,
                message : document.getElementById('message').value
            }

            const serviceID = "service_t920dja";
            const templateID = "template_axrhq5e";

            emailjs.send(serviceID, templateID, params)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err))
        });

// send message

