/**
 * Created by Jesse on 11/10/2016.
 */
console.log("page is up and running");

window.onload = function(){
    // prevents default behavior
   let save = document.getElementById("savebutton");
    $("#savebutton").click( function(e){
        e.preventDefault();
        console.log("clicked save button");
        let obj={};
        console.log($('#bodypart').val());
    })

}
