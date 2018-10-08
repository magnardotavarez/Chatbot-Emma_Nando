//On load
$(function(){
    //Conversation Object
    var conversation = {
        //#### PROPERTIES ####
        greeting: 'Hi there! How are you?',
        question: 'So what can I help you with today?',
        goodbye: 'Great! Well let me get someone to help you with that.',
        isOver: false,
        //#### METHODS ####
        start: function()
        {
            var template = `
                <li class="list-group-item text-left">` + this.greeting + `</li>
                <li class="list-group-item text-left">` + this.question + `</li>
            `;
            $('#conversation').append(template);
        },
        add: function() {
            var message = $('#message').val();
            if(message)
            {
                $('#conversation').append('<li class="list-group-item text-right">' + message + '</li>');
            }
            $('#message').val('');
        },
        end: function()
        {
            if(!this.isOver) //meaning: "If the conversation is not over...then end it"
            {
                $('#conversation').append('<li class="list-group-item text-left">' + this.goodbye + '</li>');
                this.isOver = true;
            }
        }
    }

    //Event Listeners
    $('#addMessage').on('click', function(){ //this code run or is invoked
        conversation.add();
        conversation.end();
    });

    $('#formMessage').on('submit', function(event){ //this code run or is invoked
        event.preventDefault();
        conversation.add();
        conversation.end();
    });

    //Invoke the start method
    conversation.start(); //this code run or is invoked
});
