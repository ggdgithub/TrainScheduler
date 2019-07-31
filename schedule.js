function submitData() {
    if (trainName === ""
        || trainDestination === ""
        || firstTrainTime === ""
        || trainFrequency === "") {
            alert("Fill in ALL the fields")
        }
}
    // if any of the inputs are empty
        // alert/tell user that they need to fill the form
    // else if they are all full
        // record the input

// when input is recorded
    // calculate next arrival time
    // calculate how many minutes away via firebase
    // output all data to row
        // append every new train