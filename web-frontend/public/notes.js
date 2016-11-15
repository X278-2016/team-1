/**
 * Created by Jesse on 11/10/2016.
 */
console.log("page is up and running");

window.onload = function(){
    // prevents default behavior
   $('#notesTextArea').on('keydown', function(e) {
       console.log("mouse up");
       console.log(e.which);
      if(e.which == 9) {
          e.preventDefault();
          e.preventDefault();
          var start = $(this).get(0).selectionStart;
          var end = $(this).get(0).selectionEnd;

          // set textarea value to: text before caret + tab + text after caret
          $(this).val($(this).val().substring(0, start)
              + "\t"
              + $(this).val().substring(end));

          // put caret at right position again
          $(this).get(0).selectionStart =
              $(this).get(0).selectionEnd = start + 1;

      }
   });
   let button = document.getElementById("save");
   console.log(button);
   button.onclick = function(){

      let elem = document.getElementById("notesTextArea");
      console.log(elem);
      let string = elem.value;
      console.log(string);
   };
}
