$(function () {
    var li = $("#my-todos>li:first-child");
    li.remove();
    $("form").submit(function (event) {
        event.preventDefault();
        var text = $("input[type='text']", this).val();
        var send = {
            "text": text
        };
        $.ajax({
            type: "POST",
            url: "https://api.parse.com/1/classes/todo",
            data: JSON.stringify(send),
            headers: {
                "X-Parse-Application-Id": "Kg4XL2Lxp2bfn1soY46q84FLw9m8wtGw5a9HJX3m",
                "X-Parse-REST-API-Key": "jLX1Q1UvXpey9M7s2g6CvPqgxJb9ztjiHbuQqszB"
            },
            success: function (data) {
                var nova = li.clone();
                $("span", nova).text(text);
                nova.appendTo("#my-todos");
                $("input[type='text']", this).val("");
            },
            error: function (event, status, error) {
                alert(error);
            }
        });
    });
});