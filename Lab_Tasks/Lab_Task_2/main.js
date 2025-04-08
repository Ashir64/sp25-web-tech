const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const creditCard = document.getElementById('credit-card');
const cvc = document.getElementById('cvc');
const expiry = document.getElementById('expiry');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
                    });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
};

const isValidEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const isValidCreditCard = card => {
    const re = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return re.test(card);
};

const isValidCVC = cvc => {
    const re = /^\d{3}$/;
    return re.test(cvc);
};

const isValidExpiry = expiry => {
    const re = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    return re.test(expiry);
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const creditCardValue = creditCard.value.trim();
    const cvcValue = cvc.value.trim();
    const expiryValue = expiry.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '')
         setError(username, 'Username is required');
    else setSuccess(username);

    if(emailValue === '' || !isValidEmail(emailValue))
         setError(email, 'Valid email required');
    else setSuccess(email);

    if(addressValue === '') setError(address, 'Address is required');

    else setSuccess(address);

    if(creditCardValue === '' || !isValidCreditCard(creditCardValue)) setError(creditCard, 'Valid credit card required (XXXX-XXXX-XXXX-XXXX)');
    else setSuccess(creditCard);

    if(cvcValue === '' || !isValidCVC(cvcValue)) setError(cvc, 'Valid CVC required (3 digits)');
    else setSuccess(cvc);

    if(expiryValue === '' || !isValidExpiry(expiryValue)) setError(expiry, 'Valid expiry date required (MM/YY)');

    else setSuccess(expiry);

    if(passwordValue.length < 8) setError(password, 'Password must be at least 8 characters');

    else setSuccess(password);

    if(password2Value !== passwordValue) setError(password2, 'Passwords do not match');
    else setSuccess(password2);
};
