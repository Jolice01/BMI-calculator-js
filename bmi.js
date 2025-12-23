$(".submit").on("click", function () {
    if ($(".wt").val() === "" || $(".ht").val() === "") {
        alert("Please Fill The Fields");
        return;
    }

    var weight = parseFloat($(".wt").val());
    var height = parseFloat($(".ht").val());
    var bmi = weight / (height * height);

    $(".BMI").val(bmi.toFixed(2));

    if (bmi < 25) {
        $(".mean").val("Brilliant!!!");
    } else if (bmi <= 29) {
        $(".mean").val("You Can Do Better!!!");
    } else {
        $(".mean").val("Start Doing Exercise!!!");
    }
});

$(".clear").on("click", function () {
    location.reload();
});
