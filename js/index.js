//LAB GOALS
// - Create a chatbot that can ask a question and respond to 5 different user answers
// - Ask a follow-up question to at least 2 different user answers
// - Create a method called sendMessage, that takes 2 properties:
//      - type = "incoming" or "outgoing"
//      - message = "a string that is the message"
//      - move $('#convseration').append() into the sendMessage method
//      - everywhere you see $('#conversation').append() in the code now,
//      - should invoke this.sendMessage() and pass the correct parameters

// BONUS: can you get pictures and names for you and your chatbot?

// BONUS: can you use setTimeout() - Google it!
// Use it inside chatbot.ask() to make the chatbot seem more natural

// BONUS: could you use userAnswer.value.toLowerCase().search() - Google it!
// So that "I want pizza please" would match "pizza"?

// DOUBLE BONUS: Can you make it look like the chatbot is typing?
// Use in conjunction with setTimeout() above
// Hint: can use CSS class OR can add/remove an <li> based on an id

// DOUBLE BONUS: Can you use $('#conversation')[0].scrollHeight & $('#conversation').scrollTop()
// This will make the chat box act more like a true message window
// Hint: You'll need to put eveything in a container and work with a fixed height



// ####RANDOM QUOTE GENERATOR | Uncomment to view. ######
// var quotes = {
//     sayings:[
       
//          {
//             name:'"There are far, far better things ahead than anything we leave behind."',
//             saying:'– C. S. Lewis'
//         },
//         {
//             name:'"A semicolon is used when an author could’ve chosen to end their sentence, but chose not to. Be a semicolon."',
//             saying:'– Nando'
//         },
//         {
//             name:'"If you never did you should. These things are fun and fun is good."' ,
//             saying:'– Dr . Seuss'
//         }
//     ],
//       change: function()
//             {
//                 var quotes = this.sayings[Math.floor(Math.random() * this.sayings.length)];
//                 $('#quote').html(quotes.name);
//                 $('#person').html(quotes.saying);
//                 // console.log(quotes.name);
//                 // console.log(quotes.saying)
              
//             }
//         };
        
// quotes.change();

// ######Susan is typing#########

function typing(){
			var typing = ` Susan is typing, please wait...`;
			$('#conversation').append('<li id="typing" class="list-group-item text-left">  ' + typing + '</li>');
			setTimeout(function(){
				// $('#conversation').remove('<li id="typing" class="list-group-item text-left">  ' + typing + '</li>');
				$("li").remove("#typing");
			},3000);

    }
 
    
    // #######3 LOADER #######
$(function(){

          $("#wait").css("display", "block");

        setTimeout(function(){
								$("#wait").css("display", "none");
				},6000);
    });
    
    // #########Are you still tthere?#############
    $(function(){

         if($('#message').val() == '' ){
             
                    setTimeout(function(){
                            var netflix = 'Hey, are you still there?';
             		    	    $('#conversation').append('<li class="list-group-item text-left">  <img src="images/counselor-face.jpg" width="35" height="35" style="border-radius:35%" />  ' + netflix + '</li>');
                            },60000);
         }

    //     setTimeout(function(){
				// 				$("#wait").css("display", "none");
				// },5000);

    });
    

    
//###########LOADER#########
//On load
$( function() {
			//Object
			var chatbot = {
					//#### PROPERTIES ####
					greeting: "Hi there! I'm Susan, Hope you are having a great day.",
					questions: {
						ask: 'So how are you feeling?',
						//you can add:
						answers: [ 
                    		{
                    		value: 'happy',
                    		ask: 'That is great to hear! If you know of someone who might need our serices, please have them chat or call us! Thank you.',
                    		}, 
                    		{
                    		value: 'sad' || 'Sad' || 'bad' || 'not so good' || 'depressed',
                    		ask: 'I am sorry to hear that. Are you currently safe?',
                        		answers: [ 
                        			{
                        				value: 'yes',
                        				ask: 'I am so glad to hear! Are you thinking of hurting yourself?',
                            				answers: [ 
                            					{
                            					value: 'yes',
                            					ask: 'Oh no! It sounds like you need someone to talk to. Please call us at 1-800-273-8255.'
                            					}, 
                            					{
                            					value: 'no',
                            					ask: 'I am so glad to hear. Speaking to someone, whether by going to a therapist or by attending a support group, can help you feel better.'
                            					}, 
                            				]
                        			} 
                        		]
                    	    } ]
                    },

        answers: [],
        goodbye: 'Oh no! It sounds like you need someone to talk to. Please call us at 1-800-273-8255.',
        isOver: false,
				wait: function(msg){
				    
				    setTimeout(function(){
				        typing();
				        
				    },3000);
				            msg = 'Connecting you to Susan, please wait.';
				        $('#conversation').append('<li class="list-group-item text-left"> ' + msg + '</li>');
                            
				        },
        //#### METHODS ####
        start: function() {
						var self = this;
						setTimeout( function() {
										self.wait();
									}, 3000 );

      			setTimeout( function() {
        						self.ask( self.greeting );
        						self.ask( self.questions.ask );
									}, 10000 );
        },
        ask: function(message) {
            $('#conversation').append('<li class="list-group-item text-left">  <img src="images/counselor-face.jpg" width="35" height="35" style="border-radius:35%" />  ' + message + '</li>');
        },
        answer: function() {
            var answer = $('#message').val();
            if(answer)
            {
                var answerObject = { value: answer };
                this.answers.push(answerObject); //add object to array
                $('#conversation').append('<li class="list-group-item text-right"><img src="images/me.jpg" width="35" height="35" style="border-radius:35%" /> ' + answer + '</li>');
            }
            $('#message').val('');

            var question = this.nextQuestion();
            if(question)
            {
                this.ask(question);
            } else {
                this.end();
            }
        },
        nextQuestion: function() {
              //Default is the first question object
              question = this.questions;

              //Go through each of the USERS answers
              for(userAnswerIndex in this.answers)
              {
                  var userAnswer = this.answers[userAnswerIndex];
                  var wasTheUserAnswerFound = false;

                  //Are there still unanswered questions?
                  if(question && question.answers)
                  {
                      //Iterate the answers to see if the user's answer matches any
                      for(index in question.answers)
                      {
                          var currentAnswer = question.answers[index];

                          if(userAnswer.value.toLowerCase() == currentAnswer.value.toLowerCase())
                          {
                              //Yay! the question is answered
                              question = currentAnswer;
                              wasTheUserAnswerFound = true;
                              break;
                          }
                      }

                  //Otherwise there are no more questions unanswered
                  } else {
                      return false;
                  }
              }

              //This means we reached the end of the users answers and we still have a question that needs answering :)
              if(question && wasTheUserAnswerFound)
              {
                  return question.ask;
              } else {
                  return false;
              }
          },
        end: function() {
            if(!this.isOver)
            {
                this.ask(this.goodbye);
                this.isOver = true;
                console.log(this.answers);
            }
        }
    }

    //Event Listeners
    $('#addMessage').on('click', function(){
        chatbot.answer();
    });

    $('#formMessage').on('submit', function(event){
        event.preventDefault();
        chatbot.answer();
    });

    //Invoke the start method
    chatbot.start();
});
