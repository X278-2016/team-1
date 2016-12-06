/**
 * Created by Jesse on 11/10/2016.
 */
console.log("page is up and running");

window.onload = function(){
    // prevents default behavior

    $("#hiddenOption").hide();

        $('input[type=radio][name=radios]').change(function() {
            console.log("changed");
            if (this.value == '2') {
                $("#hiddenOption").hide();
            }
            else if (this.value == '3') {
                $("#hiddenOption").show();
            }
        });

   let save = document.getElementById("savebutton");
    $("#savebutton").click( function(e){
        e.preventDefault();
        console.log("clicked save button");
        let entry={};
        entry.bodyPart=($('#bodypart').val());
        entry.title = $('#title').val();
        entry.description = $('#symptomDescription').val();
        var radios = document.getElementsByTagName('input');
        let images = [];
        let imagesText = $("#images").val().trim();
        let imagesArray = imagesText.split(/\n/);
        for(const e of imagesArray){
            images.push(e);
        }
        entry.images = images;
        var options=[];
        if($("#option1").val().trim()!=null){
            options.push($("#option1").val().trim());
        }
        if($("#option2").val().trim()!=null){
            options.push($("#option2").val().trim());
        }
        if($("#option3").val().trim()!=null){
            options.push($("#option3").val().trim());
        }

        entry.options = options;



        /*
        TODO:
        This still needs to have an id attached to a symptom, which can be done
        through the database itself.
         */
        console.log(entry);

        $.ajax({
            url: "/v1/symptom",
            context: document.body,
            type: "POST",
            data: {bodyPart: entry.bodyPart, title: entry.title, description: entry.description, images: entry.images, options: entry.options},
            success: function(res, status, xhr){
                console.log("xhr is "+xhr);
                if(xhr.status === 201){
                    console.log(res);
                }

            },
            error: function(e){
                console.log(e);
            }
        });



    })

}
