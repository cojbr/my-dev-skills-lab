$('#button-add-skill').click(function() {
    let skillEntered = $('#input-add-skill').val();
    let list = $('tbody');
    let lineFormat = `<tr><td class="list-items"><button class="button-remove-list-item">X</button>${skillEntered}</td><br/></tr>`;
    list.append(lineFormat);
});


$('.button-remove-list-item').click(function() {
    let lineToRemove = $('.list-items').closest;
    console.log(lineToRemove.val());
    lineToRemove.remove();
});


