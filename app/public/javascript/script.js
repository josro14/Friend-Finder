$("form").submit(function(event) {
    event.preventDefault();
    var serialArray = $(this).serializeArray();
    console.log(serialArray);
    $.post("http://localhost:8500/api/friends", serialArray, function(data) {
        $("#best-match").text(data.name);
        $("#best-match-pic").attr("src", data.photo);
        console.log(data);
    });
});

$(".modal").modal({show: false});

$("#submit-btn").on("click", function() {
    $(".modal").modal("show");
    
});
