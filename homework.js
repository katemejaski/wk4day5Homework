var form = document.getElementById("form-group");

document.getElementById("form-group").addEventListener("click", function () {
  form.submit();
});

// setup the generic sentance creator function; it is the callback function in the getUserInput function below.
function genericSentance(name, gender) {
    console.log(name + " is the coolest " + gender + " everrr!");
}

//The callback, which is the last item in the parameter, will be the genericSentance function defined above.
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;

    // Make sure the callback is a function
    if (typeof callback === "function") {
    // Execute the callback function and pass the parameters to it
    callback(fullName, gender);
    }
}

getUserInput("JJ", "Mejaski", "boy", genericSentance);

 