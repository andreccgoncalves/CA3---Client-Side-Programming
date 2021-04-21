function validate() {

    //access the value inside the text box
    var staffNumber = document.getElementById('StaffID').value;

    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (regex.test(staffNumber)){
        alert('Valid Staff Number');
    }
    else {
        alert('Invalid Staff Number');
    }

  

    document.getElementById('getRandom').addEventListener('click', getRandom);



        function getRandom(){
            fetch('https://randomuser.me/api/?results=5')
            .then((res) => res.json())
            .then((data) => {
                let author = data.results;
                let output = '<h2>Random Users:</h2>'
                console.log(data);
                author.forEach(function(user){
                    output += `
                    <div>
                        <ul>
                            <li>${user.name.first} ${user.name.last}</li>
                        </ul>
                    </div>
                    `;
                });

                document.getElementById('output').innerHTML = output;

            })
}
}