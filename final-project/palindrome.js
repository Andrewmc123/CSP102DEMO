// Andrew McLean - Palindrome Checker Script

// get the form //
const palindromeForm = document.getElementById("palindromeForm");

// run this when the form is submitted //
palindromeForm.onsubmit = function(event) {

   // stop the page from refreshing //
   event.preventDefault();

   // get what the user typed //
   let userWord = document.getElementById("palindromeInput").value;

   // remove spaces and make it all lowercase //
   let cleanedWord = userWord.replace(/\s/g, "").toLowerCase();

   // reverse the word using a loop //
   let reversed = "";
   for (let i = cleanedWord.length - 1; i >= 0; i--) {
      reversed += cleanedWord[i];
   }

   // check if it matches and show the result with innerHTML //
   if (cleanedWord === reversed) {
      document.getElementById("palindromeMessage").innerHTML =
         '"' + userWord + '" is a Palindrome!';
   }
   else {
      document.getElementById("palindromeMessage").innerHTML =
         '"' + userWord + '" is NOT a Palindrome!';
   }
};
