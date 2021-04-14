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

        // template
        var toDo = toDoItems[i];
        var item = template.clone();
        item.find('.text').text(toDo.text);

        // check if completed
        /* add later when styles will be done
        if(toDo.completed) {
            item.find('.text').toggleClass('completed');
        }
        */
        // add to the list
        list.append(item);
    }












    // END OF DOC READY
});