//On load
$(function(){

    //Function Definition
    function add() {
        //Get the value of message and store it in a variable
        var message = $('#message').val();

        //If there is a value add it to the conversation
        if(message)
        {
            var template = `
                <li class="list-group-item text-right">` + message + `</li>
                <li class="list-group-item text-left">Why?</li>
            `;
            $('#conversation').append(template);
        }

        //Clear the value of message in the website
        $('#message').val('');
    }

    //Event Listeners
    $('#addMessage').on('click', function(){
        add();
    });

    $('#formMessage').on('submit', function(event){
        event.preventDefault();
        add();
    });
});
