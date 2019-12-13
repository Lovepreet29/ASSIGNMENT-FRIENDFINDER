// Your code here...
fetch("../friends/friends.json")
.then(function(respose){
    return respose.json();
})
.then(function(data){
    appendData(data)
})
.catch(function(err){
    console.log(err)
})
 function appendData(data){
    var mainContainer = document.getElementById("content");
    for(var i = 0; i < data.length; i++)
        var div = document.createElement("div");
        div.innerHTML = data[i].firstName;
        mainContainer.appendChild(div)
    }
    var data = [{
        "id": 1,
        "firstName": "Jane",
        "lastName": "Doe",
        "avatar": "jane_doe.jpg"
    }, {
        "id": 2,
        "firstName": "Tom",
        "lastName": "Jones",
        "avatar": "tommy_gun.jpg"
    }, {
        "id": 3,
        "firstName": "Clark",
        "lastName": "Kent",
        "avatar": "supes.jpg"
    }, {
        "id": 4,
        "firstName": "Sally",
        "lastName": "Anne",
        "avatar": "sally.jpg"
    }]
    
    var htmlText = data.map(function(o){
      return `
          <div class="div-conatiner">
          <p class="p-name"> Name: ${o.firstName}</p>
          <p class="p-loc"> Location: ${o.lastName}</p>
          <p class="p-desc"> Description: ${o.avatar}</p>
         </div>
      `;
    });
    
    $('body').append(htmlText);

