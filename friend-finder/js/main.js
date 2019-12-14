// Your code here...
window.addEventListener("load", function(e){

    const select = document.querySelector("#friends")
    fetch('../friends.json')
    .then(res => res.json())
    .then(data => console.log(data));

    function setup(){
        loadJSON("file:///C:/Users/kamal/OneDrive/Documents/GitHub/ASSIGNMENT-FRIENDFINDER/friend-finder/friends/friends.json", gotdata, 'jsonp')
    }
    function gotdata(data){
        println(data);
    }
    console.log(setup)

     

})