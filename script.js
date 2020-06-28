    // Define Variables pertaining to how the password is generated
    var baseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var capitalLetrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "`", "~", "=", "+", "-"];
    var capital = false;
    var special = false;
    var numeric = false;
    var length = 12;
    var arr = [];

    // Define variables pertaining to the UI
    var submitButton = document.querySelector("#submitBtn");
    var yesToCaps = document.querySelector("#yes-to-caps");
    var noToCaps = document.querySelector("#no-to-caps");
    var yesToSpecial = document.querySelector("#yes-to-special");
    var noToSpecial = document.querySelector("#no-to-special");
    var yesToNumbers = document.querySelector("#yes-to-numbers");
    var noToNumbers = document.querySelector("#no-to-numbers");
    var finalPWbox = document.querySelector("#final-password");
    var characterCount = document.querySelector("#charCount");
    var increase = document.querySelector("#more");
    var decrease = document.querySelector("#less");


    //Event Listeners and functions for selection criteria

    //If Yes to caps is clicked, we render that value as true and put a border
    //around the Yes box
    yesToCaps.addEventListener("click", function(event) {
        event.preventDefault();
        capital = true;
        yesToCaps.classList.add('selected');
        noToCaps.classList.remove('selected');
    });
    
    //Same with No to caps
    noToCaps.addEventListener("click", function(event) {
        event.preventDefault();
        capital = false;
        noToCaps.classList.add('selected');
        yesToCaps.classList.remove('selected');
    });
    
    // Special Characters
    yesToSpecial.addEventListener("click", function(event) {
        event.preventDefault();
        special = true;
        yesToSpecial.classList.add('selected');
        noToSpecial.classList.remove('selected');
    });
    
    noToSpecial.addEventListener("click", function(event) {
        event.preventDefault();
        special = false;
        noToSpecial.classList.add('selected');
        yesToSpecial.classList.remove('selected');
    });

    //Numbers
    yesToNumbers.addEventListener("click", function(event) {
        event.preventDefault();
        numeric = true;
        yesToNumbers.classList.add('selected');
        noToNumbers.classList.remove('selected');
    });

    noToNumbers.addEventListener("click", function(event) {
        event.preventDefault();
        numeric = false;
        noToNumbers.classList.add('selected');
        yesToNumbers.classList.remove('selected');
    });
    
    //Password Length Counter, display and event listeners/functions
    displayLength();

    function displayLength() {


        characterCount.textContent = "Number of characters: "+length;
    }

    increase.addEventListener("click", function(event) {
        event.preventDefault();
        if(length < 128) {
            length++;
            displayLength();
            console.log(length);
        }
    })

    decrease.addEventListener("click", function() {
        event.preventDefault();
        if(length > 8) {
        length--;
        displayLength();
        console.log(length);
    }
        });
    

// Submit button
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    generatePW();
});


// Function for generating the PW
// We start with the minimum array of characters, which is 
// the entire alphabet in lowercase
function generatePW() {

    for (x = 0; x < 1; x++) {
    
    //If the user wants capital letters, we 
    //concatenate the capital letter array to our base array
        if (capital === true) {
    
    var arrayOne = baseArray.concat(capitalLetrs);
    
    } else {
        var arrayOne = baseArray;
    };

    //Same drill with special characters
    
        if (special === true) {
    
            var arrayTwo = arrayOne.concat(specialChar);
        } else {
            var arrayTwo = arrayOne;
        };

    // And with numbers
    
        if (numeric === true) {
            var arrayThree = arrayTwo.concat(numbers);
        } else {
            var arrayThree = arrayTwo;
        };
    
    };

    //This for loop generates the password based on the selection criteria

    for(i = 0; i < length; i++) {
    
        var num = Math.floor((Math.random() * arrayThree.length));
        var pwChar = arrayThree[num];
        arr.push(pwChar);
        };
        
        var finalPW = arr.join('');

        //Lastly, we display the password
        displayPW();
        
        function displayPW(){
        finalPWbox.textContent = finalPW;
        }
        };
    
    
