

const passwordChecker = (string) => {
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])[A-Za-z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]]{8,}$/
    if(pwdRegex.test(string)){
        return true;
    }
    return false;
}

// password length check
const passwordLengthCheck = (string, length) => {
    if(string.length >= length){
        return true;
    }
    return false;
}

// password uppercase check
const passwordHasUppercaseCheck = (string) => {
    let i = 0, character='';
    const regex = /^(?=.*[A-Z]){1,}$/
    while(i <= string.length){
        character = string.charAt(i);
        if(character.toUpperCase() === character && character !== character.toLowerCase()){
            return true;
        }
        i++;
    }
    return false;
}

//password number check
const passwordHasNumber = (string) => {
    let i=0, character = '';
    const regex = /^[0-9]$/
    while(i <=  string.length ){
        character = string.charAt(i);
        if (regex.test(character)){
            return true;
        }
        
        i++;
    }
    
    return false;
}

//password contains symbol
const passwordHasSymbols = (string) => {
    let i = 0, character = '';
    while(i <= string.length){
        character = string.charAt(i);
        if(containsSpecialChars(character)){
            return true;
        }
        i++;
    }
    return false;
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  export {passwordChecker, passwordLengthCheck, passwordHasUppercaseCheck, passwordHasNumber, passwordHasSymbols}