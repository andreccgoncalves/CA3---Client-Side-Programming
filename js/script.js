function validate() {

    //access the value inside the text box
    var staffNumber = document.getElementById('StaffID').value;

    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (regex.test(staffNumber)) {
        alert('Valid Staff Number');
        
    }
    else {
        alert('Invalid Staff Number');
    
    }
}




    document.getElementById('getRandom').addEventListener('click', getRandom);

    function getRandom() {
        fetch('https://randomuser.me/api/?results=5')
            .then((res) => res.json())
            .then((data) => {
                let author = data.results;
                let output = '<h2>Random Costumers:</h2>'
                console.log(data);
                author.forEach(function (user) {
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

                document.getElementById('output').innerHTML = output;
               
            })
    }


 

//Starters value

var total_items = 3;

    function CalculateStartersValue() {

        let total = 0;

        for (let i = 1; i <= 3; i++) {
            itemID = document.getElementById("qnt_" + i);
            total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

        }
        document.getElementById('StartersTotal').innerHTML = "€" + total.toFixed(2);
       
    }

    document.querySelectorAll('[id^="qnt_1"], [id^="qnt_2"], [id^="qnt_3"]').forEach(item => {
        item.addEventListener('keyup', CalculateStartersValue);
    });

    //Main value

    

    function CalculateMainValue() {
        let total = 0;
       

        for (let i = 4; i <= 6 ;i++) {
            itemID = document.getElementById("qnt_"  + i);
            total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

        }
        document.getElementById('MainTotal').innerHTML = "€" + total.toFixed(2);
       
    }

    document.querySelectorAll('[id^="qnt_4"], [id^="qnt_5"], [id^="qnt_6"]').forEach(item => {
        item.addEventListener('keyup', CalculateMainValue);
    });

    //Dessert value



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


//Drinks value



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

//Vegetarian 


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

//Non Vegetarian 


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

    document.querySelectorAll('[id^="qnt_"]').forEach(item => {
        item.addEventListener('keyup', CalculateItemsValue);
    });

