// Andrew McLean - User Input Validation Script

// get the form //
const userForm = document.getElementById("userForm");

// run this when the form is submitted //
userForm.onsubmit = function(event) {

   // stop the page from refreshing //
   event.preventDefault();

   // get the values the user typed //
   let firstName = document.getElementById("firstName").value;
   let lastName = document.getElementById("lastName").value;
   let zipCode = document.getElementById("zipCode").value;

   // put the first and last name together //
   let fullName = firstName + " " + lastName;

   // clear any old messages //
   document.getElementById("warning").innerHTML = "";
   document.getElementById("secretMessage").innerHTML = "";

   // check the full name is not too long //
   if (fullName.length > 20) {
      document.getElementById("warning").innerHTML =
         "Warning: Full name must be 20 characters or less.";
      return;
   }

   // check the zip code is exactly 5 digits //
   if (!/^\d{5}$/.test(zipCode)) {
      document.getElementById("warning").innerHTML =
         "Warning: Zip code must contain exactly 5 digits.";
      return;
   }

   // if everything is valid, show the secret message //
   document.getElementById("secretMessage").innerHTML =
      "Access Granted! The answers you seek are already inside you. Believe and do the work!";
};
