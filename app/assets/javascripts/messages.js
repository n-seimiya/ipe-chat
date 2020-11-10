// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
window.onload = function() {
    var deleteBtn = document.getElementsByClassName("delete-btn");
    
    for (var i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", function(e){
            e.preventDefault();
            if(window.confirm('本当に削除しますか？')) {
                document.getElementById('form_' + this.dataset.id).submit();
            }
        }, false)
    }
};

// $(function(){
//     var boxes = $('.message-box')
//     boxes.each(function(i,box){
//         $(box).hover(function(){
//             var content = $(box).find('.message-content')
//             content.animate({fontSize : '24px'}, 500);
//         }, function(){
//             var content = $(box).find('.message-content')
//             content.animate({fontSize : '16px'}, 500);
//         })
//     })
// });

// $(function() {
//     var button = $('button')
//     function clickFunc() {
//         $(".top-icon").toggle()
//     };
//     button.on("click", clickFunc)
// });

// $(function() {
//     var form = $("#chat-form")
//     form.keyup(function() {
//         var count = $(this).val().length;
//         $("#counter").text(count + "文字");
//         if (count == 0 ) {
//             $("#counter").empty();
//         }else if (count > 10){
//             $('#counter').css('color', 'red');
//         }else{
//             $('#counter').css('color', 'white');
//         };
//     });
// });

$(function() {
    function buildHTML(message){
        var content = (message.content !== null) ? `${message.content}`: "";
        var name = (message.user_name !== null) ? `${message.user_name}`: "";
        var date = (message.date !== null) ? `${message.date}`: "";
        var id = (message.id !== null) ? `${message.id}`: "";

        var html = `<div class="message-box">
                        <div class="message-block">
                            <p class="message-info">
                                ${name}
                                <span>
                                ${date}
                                </span>
                            </p>
                            <p class="message-content">${content}</p>
                        </div>
                        <div class="message-post">
                            <ul>
                                <li>
                                    <a href="/messages/${id}/edit">edit</a>
                                </li>
                                <li>
                                    <a rel="nofollow" data-method="delete" href="/messages/${id}/delete">delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>`
        return html;
    }

    $('#new_message').on('submit', function(e) {
        e.preventDefault();
        var messageContent = new FormData(this);
        console.log(this);
        var url = "/messages/create";

        $.ajax({
            url: url,
            type: 'POST',
            data: messageContent,
            dataType: 'json',
            processData: false,
            contentType: false,
        })

        .done(function(message) {
            var html = buildHTML(message);
            $('.chat-container').append(html);
            // $('#submit-button').on('submit',function(){
            $('#chat-form').val('');  
            // });
            $('.chat-container').animate({ scrollTop: $('.chat-container')[0].scrollHeight});
        })

        .fail(function() {
            alert('error');
        })
        return false;
    });
})