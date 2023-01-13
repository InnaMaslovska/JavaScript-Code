const checkAge = function (age) { 
if (isNaN(age)) {
    console.log("Error, put numbers in field")
}   
if (age < 18) {
    console.log("you don't have permition cause your age is", age, " it's less then required")
        } else if (age >= 18 && age<60) {
            console.log("Welcome!")
        } else if (age>=60) {
            console.log("Keep calm and watch Culture channael")
        } else {
            console.log("Technical work")
        }      
    }
checkAge (17)
checkAge (18)
checkAge (61)
checkAge ("67")
checkAge ("6")
