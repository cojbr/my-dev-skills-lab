$('#button-add-skill').click(function() {
    let skillEntered = $('#input-add-skill').val();
    let list = $('#tbody');
    let lineFormat = `<tr><td>${skillEntered}</td><br/></tr>`;
    console.log(skillEntered);
    console.log(lineFormat);
    // list.append(lineFormat)
    // $('#tbody').append(`<tr><td>${skillEntered}</td><br/></tr>`);

});

