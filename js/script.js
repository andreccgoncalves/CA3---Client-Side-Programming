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

        var total = 0;

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

    var total_items = 3;

    function CalculateMainValue() {

        var total = 0;

        for (let i = 1; i <= 3; i++) {
            itemID = document.getElementById("qnt_" + i);
            total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

        }
        document.getElementById('MainTotal').innerHTML = "€" + total.toFixed(2);
       
    }

    document.querySelectorAll('[id^="qnt_4"], [id^="qnt_5"], [id^="qnt_6"]').forEach(item => {
        item.addEventListener('keyup', CalculateMainValue);
    });

    //Dessert value

var total_items = 3;

function CalculateSDessertValue() {

    var total = 0;

    for (let i = 1; i <= 3; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

    }
    document.getElementById('DesertTotal').innerHTML = "€" + total.toFixed(2);
   
}

document.querySelectorAll('[id^="qnt_7"], [id^="qnt_8"], [id^="qnt_9"]').forEach(item => {
    item.addEventListener('keyup', CalculateSDessertValue);
});


//Drinks value

var total_items = 3;

function CalculateSDrinkValue() {

    var total = 0;

    for (let i = 1; i <= 3; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

    }
    document.getElementById('DrinksTotal').innerHTML = "€" + total.toFixed(2);
   
}

document.querySelectorAll('[id^="qnt_10"], [id^="qnt_11"], [id^="qnt_12"]').forEach(item => {
    item.addEventListener('keyup', CalculateSDrinkValue);
});


// Total calculator

    var total_items = 12;

    function CalculateItemsValue() {

        var total = 0;

        for (let i = 1; i <= total_items; i++) {
            itemID = document.getElementById("qnt_" + i);
            total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")))

        }
        document.getElementById('ItemsTotal').innerHTML = "€" + total.toFixed(2);
        
    }

    document.querySelectorAll('[id^="qnt_"]').forEach(item => {
        item.addEventListener('keyup', CalculateItemsValue);
    });
}
