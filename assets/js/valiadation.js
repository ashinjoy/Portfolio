const form = document.getElementById('contactForm');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const subject = document.getElementById('subject');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');

        function validateName() {
            const namepattern = /^[a-zA-Z]+$/;
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required';
            }
    
            else {
                if(namepattern.test(name.value) ) 
            {
                nameError.textContent = '';
            }
               else {
                nameError.textContent = 'Invalid Format';
            }
        }
        }

        function validateEmail() {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email.value)) {
                emailError.innerHTML = 'Invalid email format';
            } else {
                emailError.innerHTML = '';
            }
        }

        function validateMessage() {
            if (message.value.trim() === '') {
                messageError.innerHTML = 'Message is required';
            } else {
                messageError.innerHTML = '';
            }
        }
        function validateSubject() {
            if (subject.value.trim() === '') {
                subjectError.innerHTML = 'Subject is required';
            } else {
                subjectError.innerHTML = '';
            }
        }

        name.addEventListener('blur', validateName);
        email.addEventListener('blur', validateEmail);
        subject.addEventListener('blur', validateSubject);
        message.addEventListener('blur', validateMessage);

        form.addEventListener('submit', function (event) {
            validateName();
            validateEmail();
            validateSubject();
            validateMessage();

            if (nameError.innerHTML || emailError.innerHTML || messageError.innerHTML||subjectError.innerHTML) {
                event.preventDefault(); // Prevent form submission if there are errors
            }
        });