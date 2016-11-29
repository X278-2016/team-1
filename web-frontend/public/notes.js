/**
 * Created by Jesse on 11/10/2016.
 */
console.log("page is up and running");

window.onload = function(){
    // prevents default behavior
   let save = document.getElementById("savebutton");


   $("#type").change(function(){
       console.log("changed");
   }) ;


    $("#savebutton").click( function(e){
        e.preventDefault();
        console.log("clicked save button");
        let entry={};
        entry.bodyDiagram;
        entry.bodyPart=($('#bodypart').val());
        entry.symptom = $('#symptomName').val();
        entry.description = $('#symptomDescription').val();
        var radios = document.getElementsByTagName('input');
        var value;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                value = radios[i].value;
            }
        }

        entry.severity = value;

        /*
        TODO:
        This still needs to have an id attached to a symptom, which can be done
        through the database itself.
         */
        console.log(entry);

    })

}
