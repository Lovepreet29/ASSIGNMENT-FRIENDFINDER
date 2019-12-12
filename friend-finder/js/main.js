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
 

