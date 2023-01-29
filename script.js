function storeName() {
    // get the value of the input field
    var name = document.getElementById("name-input").value;
    
    // store the value in a variable or object for later use
    var storedName = name;
    
    // you can also store the name in local storage
    localStorage.setItem("name", name);

    // redirect the user to the RSVP.html page
    window.location.href = "RSVP.html";

    console.log(name)
  }
  