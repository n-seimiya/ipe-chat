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

$(function(){
    var boxes = $('.message-box')
    boxes.each(function(i,box){
        $(box).hover(function(){
            var content = $(box).find('.message-content')
            content.animate({fontSize : '24px'}, 500);
        }, function(){
            var content = $(box).find('.message-content')
            content.animate({fontSize : '16px'}, 500);
        })
    })
});

$(function() {
    var button = $('button')
    function clickFunc() {
        $(".top-icon").toggle()
    };
    button.on("click", clickFunc)
});

$(function() {
    console.log('s')
    var form = $("#chat-form")// ユーザーが入力するフォーム（inputタグ）のidを使ってエレメントを取得してください
    form.keyup(function() {  // 〇〇に適切なコードを記述してフォームに文字が入力されることでイベントが発火する処理を作成してください
        console.log('test');
        var count = $(this).val().length;     // $(this)を使って、フォームに入力された文字の数を取得して変数に格納してください
        // 先ほど作成した丸いdiv要素の中に「〇文字」と表示されるコードを記述してください
        $("#counter").text(count + "文字");
        console.log(count);
        // 条件分岐文を使って、条件に応じて丸いdiv要素のcolorプロパティを変更させるコードを記述してください
        if (count == 0 ) {
            $("#counter").empty();
        }else if (count > 10){
            $('#counter').css('color', 'red');
        }else{
            $('#counter').css('color', 'white');
        };
    });
});