const checkAge = prompt ("How old are you?"); 
if (isNaN(checkAge)) {
    alert("Error, put numbers in field")}
    else{
if (checkAge < 18) {
        alert("you don't have permition cause your age is", checkAge, " it's less then required")
        } else if (checkAge>= 18 && checkAge<60) {
            alert("Welcome!")
        } else if (checkAge>=60) {
            alert("Keep calm and watch Culture channael")
        } else {
            alert("Technical work")
        }      
    }