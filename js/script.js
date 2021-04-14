$(document).ready(function(){

    /**************************************************************************
     * 
     *  TODO LIST APP
     *  
     *  1. POPULATE TODO LIST
     *  2. INSERT NEW TODO TO THE LIST
     *  3. REMOVE TODO FROM THE LIST
     *  4. CHECK IF THEY ARE ALREADY COMPLETED OR NOT
     * 
    /*****************************************************************************/

    var toDoItems = [
        {
            text: 'buy some food',
            completed: false,
        },
        {
            text: 'buy some drink',
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
            text: 'play some videogames',
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
        // CHECK KEYCODE ON INPUT
        // console.log(e.which);

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

    // ADDING A BUTTON TO SHOW / HIDE TODO LIST

    var btn = $('.btn');
    var app = $('.app');
    btn.click(function(){
        app.toggle();
        if(btn.text() === 'Open TODO List') {
            btn.text('Close TODO List');
        } else {
            btn.text('Open TODO List');
        }
    });





    // END OF DOC READY
});