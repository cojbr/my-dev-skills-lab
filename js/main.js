$('#button-add-skill').click(function() {
    console.log("clicked the add button");
    let skillEntered = $('#input-add-skill').val();
    let list = $('tbody');
    let lineFormat = `<tr><td class="list-items"><input type="submit" id="button-remove" value="X">${skillEntered}</td><br/></tr>`;
    list.append(lineFormat);
});



// this is code for the cancel button. I cannot get it to work but 
// would like to know how to get it to work. I've tried everything.
// $('.list-items').ready(function() {
//     console.log("ready");
//     $('#button').click(function() {
//     console.log("clicked x")
//         $(this).closest('tr').remove();

//     });
// });




