$(document).ready(function(){


    /**
     * 
     *  TODO LIST APP
     *  
     *  1. POPULATE TODO LIST
     *  2. INSERT NEW TODO TO THE LIST
     *  3. REMOVE TODO FROM THE LIST
     *  4. CHECK IF THEY ARE ALREADY COMPLETED OR NOT
     * 
     * 
    /**/

    var toDoItems = [
        {
            text: 'buy some fruits',
            completed: false,
        },
        {
            text: 'buy some clothes',
            completed: false,
        },
        {
            text: 'pay the rents',
            completed: true,
        },
        {
            text: 'study javascript & jQuery',
            completed: true,
        },
        {
            text: 'go out for a walk to relax',
            completed: false,
        },
    ];

    // REFS
    var list = $('.todos');
    var newInput = $('.add-todo');
    var template = $('#template li');

    // 1.

    for(var i = 0; i < toDoItems.length; i++) {

        // TEMPLATE
        var toDo = toDoItems[i];
        var item = template.clone();
        item.find('.text').text(toDo.text);

        // CHECK IF COMPLETED

        if(toDo.completed) {
            item.find('.text').toggleClass('completed');
        }

        // ADD TO THE LIST
        list.append(item);
    }

    // 2.

    newInput.keyup(function(e){
        // check keycode on input
        console.log(e.which);

        if(e.which === 13) {
            var text = newInput.val().trim();

            if(text !== '') {
                console.log(text);

                // TEMPLATE
                var item = template.clone();
                item.find('.text').text(text);
                list.append(item);
                // RESET
                newInput.val('');
            }
        }
    });

    // 3.

    $('body').on('click', '.todos li i', function(){
        $(this).parent().remove();
    });

    // 4.

    $('body').on('click', '.todos li .text', function(){
        $(this).toggleClass('completed');
    })


    // END OF DOC READY
});