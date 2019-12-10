// Your code here...
fetch("./friends/friends.json")
.then(function(respose){
    return respose.json();
})
.then(function(data){
    console.log(data)
})
