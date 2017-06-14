console.log("talking");

// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element




// 1 get the data
fetch('https://randomuser.me/api/?results=12')
  .then(
    function(response) {
      if (response.status != 200) {
        console.log('Looks like there was a problem. Status Code' + response.status);
        return;
      }

    response.json().then(function(data){
      let name = data.results;
      console.log(name);





    for (var i = 0; i < 12; i++) {
    let profile = data.results[i];

          let markup = `<div class ="profile">
            <ul>
              <img src=${data.results[i].picture.large}></img>
              <li class="name">${data.results[i].name.first + " " + data.results[i].name.last}</li>
              <li class="email">${data.results[i].email}</li>
              <li class="address">${data.results[i].location.street}</li>
              <li class="address">${data.results[i].location.city + ", " + data.results[i].location.state + " " +       data.results[i].location.postcode}</li>
              <li class="phone">${data.results[i].phone}</li>
              <li class="cell">${data.results[i].cell}</li>
            </ul>
         </div>`
        console.log(markup);
        document.getElementById('profiles').innerHTML += markup;



    }

});
});
// Examine the text in the response
