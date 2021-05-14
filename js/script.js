//Staff Password Validation
function validate() {

    //access the value inside the text box
    var staffNumber = document.getElementById('StaffID').value;

    //REGEX for the password validation
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    //if statement in case the user types a correct or incorrect password
    if (regex.test(staffNumber)) {
        alert('Valid Staff Number');

    }
    else {
        alert('Invalid Staff Number');

    }
}


//Random User Generator

//when the button is clicked the getRandom() function is called
document.getElementById('getRandom').addEventListener('click', getRandom);

function getRandom() {  //Creating the funcion
    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            let author = data.results;
            let output = '<h2>Random Costumers:</h2>'
            console.log(data);
            author.forEach(function (user) {
                //User's information
                output += `
                    
                    <div>
                        <ul>
                        
                            <li><img src="${user.picture.large}"></li>
                            <li><b>${user.name.first} ${user.name.last}</b></li> 
                            <li>Age: ${user.dob.age}</li>
                            <li>Phone Number: ${user.phone}</li>
                            <li>Email Address: ${user.email}</li>
                            <li>Gender: ${user.gender}</li>
                            <li>City: ${user.location.city}</li>
                            <li>Country: ${user.location.country}</li>
                            <li>Postcode: ${user.location.postcode}</li><br>
                            
                        </ul>
                    </div>
                    `;
            });
            // it giver the output
            document.getElementById('output').innerHTML = output;

        })
}

//Starters calculator

var total_items = 3; //setting the value 3 because the loop will go through 3 items

function CalculateStartersValue() { //creating the function

    let total = 0;

    for (let i = 1; i <= 3; i++) { //loop that will go through the items to check how many was inputed
        itemID = document.getElementById("qnt_" + i);  //getting the item by the id
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))  //multiplication and then summing the value to the variable called total

    }
    document.getElementById('StartersTotal').innerHTML = "€" + total.toFixed(2); //output of the startes's price

}

document.querySelectorAll('[id^="qnt_1"], [id^="qnt_2"], [id^="qnt_3"]').forEach(item => {  //querySelector that specifies which items should be checked
    item.addEventListener('keyup', CalculateStartersValue); //Adding to function
});

//The following functions follow the same method as the previous, that's why they haven't been commented
//Main calculator


function CalculateMainValue() {
    let total = 0;


    for (let i = 4; i <= 6; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

    }
    document.getElementById('MainTotal').innerHTML = "€" + total.toFixed(2);

}

document.querySelectorAll('[id^="qnt_4"], [id^="qnt_5"], [id^="qnt_6"]').forEach(item => {
    item.addEventListener('keyup', CalculateMainValue);
});

//Dessert calculator


function CalculateSDessertValue() {

    let total = 0;

    for (let i = 7; i <= 9; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

    }
    document.getElementById('DessertTotal').innerHTML = "€" + total.toFixed(2);

}

document.querySelectorAll('[id^="qnt_7"], [id^="qnt_8"], [id^="qnt_9"]').forEach(item => {
    item.addEventListener('keyup', CalculateSDessertValue);
});


//Drinks calculator


function CalculateSDrinkValue() {

    let total = 0;

    for (let i = 10; i <= 12; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

    }
    document.getElementById('DrinksTotal').innerHTML = "€" + total.toFixed(2);

}

document.querySelectorAll('[id^="qnt_10"], [id^="qnt_11"], [id^="qnt_12"]').forEach(item => {
    item.addEventListener('keyup', CalculateSDrinkValue);
});

//Vegetarian calculator


function CalculateSVegetarianValue() {

    let total = 0;

    for (let i = 2; i <= 5; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

    }
    document.getElementById('VegetarianTotal').innerHTML = "€" + total.toFixed(2);

}

document.querySelectorAll('[id^="qnt_2"], [id^="qnt_5"]').forEach(item => {
    item.addEventListener('keyup', CalculateSVegetarianValue);
});

//Non Vegetarian calculator


function CalculateSNonVegetarianValue() {

    let total = 0;

    for (let i = 1; i <= 4; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

    }
    document.getElementById('nonVegetarianTotal').innerHTML = "€" + total.toFixed(2);

}

document.querySelectorAll('[id^="qnt_1"], [id^="qnt_3"], [id^="qnt_4"]').forEach(item => {
    item.addEventListener('keyup', CalculateSNonVegetarianValue);
});


// Total calculator


var total_items = 12;

function CalculateItemsValue() {

    let total = 0;

    for (let i = 1; i <= total_items; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

    }
    document.getElementById('ItemsTotal').innerHTML = "€" + total.toFixed(2);

}

document.querySelectorAll('[id^="qnt_"]').forEach(item => { //selects all the items with the qnt_ id
    item.addEventListener('keyup', CalculateItemsValue);
});
