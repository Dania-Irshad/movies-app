$(document).ready(function () {
    $(form).submit(function (e) {
        e.preventDefault();
        if ($('#rating').val() >= 0 && $('#rating').val() <= 10 && $('#rating').val() !== '' && $('#title').val().length > 2)
        {
            if (!($('#table').length)) {
                $('<table id="table"></table>').appendTo('#table-container');
                $thead = "<thead> <tr> <th>Movie Title</th> <th>Movie Rating</th> </tr> </thead>";
                $('#table').append($thead);
                $('<tbody>').insertAfter('thead');
            }
    
            $('<tr>').appendTo('tbody')
                .append(`<td>${$('#title').val()}</td>`)
                .append(`<td>${$('#rating').val()}</td>`)
                .append('<button class="delete">X</button>');
            $('#title').val('');
            $('#rating').val('');
            $('button').on('click', function () {
                if ($(this).attr('id') !== 'submit') {
                    $(this).parent().remove();
                    if (!($('tbody tr').length)) {
                        $('#table').remove();
                    }
                }
            });
        }
        else 
        {
            alert("PLEASE ENTER VALID INPUT");
            $('#title').val('');
            $('#rating').val('');
        }
        
    });



});