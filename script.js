const moviesArr = [];
const ratingArr = [];

$(document).ready(function(){
    $(form).submit(function(e){
        e.preventDefault();
        if (!($('#table').length)){
            $('<table id="table"></table>').insertAfter('br');
            $thead = "<thead> <tr> <th>Movie Title</th> <th>Movie Rating</th> </tr> </thead>";
            $('#table').append($thead);
            $('<tbody>').insertAfter('thead');
        }

        $('<tr>').appendTo('tbody')
        .append(`<td>${$('#title').val()}</td>`)
        .append(`<td>${$('#rating').val()}</td>`)
        .append('<button>X</button>');
    });



});