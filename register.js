/* GUIDELINES
Name -> Must consists of minimum 5 characters
Password
     -> Must consists of minimum 8 characters
     -> Minimum 1 lower case letter (a-z)
     -> Minimum 1 upper case letter (A-Z)
     -> Minimum 1 numeric character (0-9)
     -> Minimum 1 special character (~`!@#$%^&*()-_+={}[]|\;:"<>,./?)
Email -> Must be in email format (example: recipient@domain.topLevelDomain)
    Recipient name:
        Uppercase and lowercase letters in English (A-Z, a-z)
        Digits from 0 to 9
        Special characters such as ! # $ % & ' * + - / = ? ^ _ ` { |
        Cannot contain consecutive special characters
    Domain:
        Uppercase and lowercase letters in English (A-Z, a-z)
        Digits from 0 to 9 
        A hyphen (-)
        A period (.)
    Top level domain:
        .com
        .net
        .org
Date -> Must be sooner than today
Agreement -> Must be checked
*/

function showMenu() {
    document.querySelector('.menuButton').classList.toggle('open');
    document.querySelector('.navBar').classList.toggle('active');
}
let nameError = document.getElementById("nameError");
let passwordError = document.getElementById("passwordError");
let emailError = document.getElementById("emailError");
let dateError = document.getElementById("dateError");
let agreementError = document.getElementById("agreementError");
let success = document.getElementById("success");

function validate() {
    let allTrue = true;
    let name = document.getElementById('name').value.trim();
    let password = document.getElementById('password').value.trim();
    let email = document.getElementById('email').value.trim();
    let date = document.getElementById('date').value;
    let agreement = document.getElementById('agreement');

    if(validateName(name) == true) {
        nameError.innerHTML = "";
    } else allTrue = false;
    
    if(validatePassword(password) == true) {
        passwordError.innerHTML = "";
    } else allTrue = false;

    if(validateEmail(email) == true) {
        emailError.innerHTML = "";
    } else allTrue = false;
    
    if(validateDate(date) == true) {
        dateError.innerHTML = "";
    } else allTrue = false;
    
    if(validateAgreement(agreement) == true) {
        agreementError.innerHTML = "";
    } else allTrue = false;

    if(allTrue){
        success.innerHTML = "Registered successfully!";
    }
    else success.innerHTML = "";
    return;
}

function validateName(name) {
    if(name.length < 5){
        nameError.innerHTML = "Name must be at least 5 characters";
        return false;
    }
    return true;
}

function isLower(c){
    if(c === c.toLowerCase()){
        return true;
    }
    return false;
}

function isUpper(c){
    if(c === c.toUpperCase()){
        return true;
    }
    return false;
}

function isNumeric(c){
    if(c >= '0' && c <= '9'){
        return true;
    }
    return false;
}

function isSpecial(c){
    let specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
    return specialChars.includes(c);
}

function validatePassword(password) {
    if(password.length < 8) {
        console.log(password);
        passwordError.innerHTML = "Password must be at least 8 characters";
        return false;
    }
    let lower = false;
    let upper = false;
    let numeric = false;
    let special = false;
    for(let i = 0; i<password.length; i++) {
        
        if(isNumeric(password[i])) {
            numeric = true;
        }
        else if(isSpecial(password[i])) {
            special = true;
        }
        else if(isLower(password[i])) {
            lower = true;
        }
        else if(isUpper(password[i])) {
            upper = true;
        }
    }
    let s = "Password must contain at least one ";
    if(!lower) s += "lowercase letter, ";
    if(!upper) s += "uppercase letter, ";
    if(!numeric) s += "numeric character, ";
    if(!special)  s += "special character, ";
    
    if(!lower || !upper || !numeric || !special){
        passwordError.innerHTML = s.slice(0, s.length-2);
        return false;
    }
    return true;
}

function validateEmail(email) {
    let i = 0;
    let isEmail = true;
    let index = email.search("@gmail.com");
    if(email.length == 0) {
        emailError.innerHTML = "Please enter your email";
        return false;
    }
    if(email[0]=='@') isEmail = false;
    let n = email.length - 4;
    if(!email.includes(".com", n) && !email.includes(".net", n) && !email.includes(".org", n)) isEmail = false;
    while(i < email.length && email[i] != '@') {
        if(!isUpper(email[i]) && !isLower(email[i]) && !isNumeric(email[i]) && isSpecial(email[i])) {
            alert(i);
            isEmail = false;
            break;
        }
        if(i > 0 && isSpecial(email[i]) == true && isSpecial(email[i]) == true) {
            isEmail = false;
            break;
        }
        i++;
    }
    if(i == email.length) isEmail = false;
    i++;
    if(email[i]=='.') isEmail = false;
    while(i < email.length) {
        if(!isUpper(email[i]) && !isLower(email[i]) && !isNumeric(email[i]) && email[i]!='-' && email[i]!='.') {
            isEmail = false;
            alert(i);
            break;
        }
        i++;
    }
    if(isEmail == false) {
        emailError.innerHTML = "Email is invalid";
        return false;
    }
    return true;
}

function validateDate(date) {
    if(date.length == 0){
        dateError.innerHTML = "Please choose a date";
        return false;
    }
    const dateNow = new Date();
    date = new Date(date);
    if(date > dateNow){
        dateError.innerHTML = "Date is invalid";
        return false;
    }
    return true;
}

function validateAgreement(agreement) {
    if(agreement.checked == false){
        agreementError.innerHTML = "Please check the terms and conditions";
        return false;
    }
    return true;
}