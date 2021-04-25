$('#input-gender').data('input-gender', [{ text: 'Nam', value: 0 }, { text: 'Nữ', value: 1 }, { text: 'Khác', value: 2 }]);
var dataInput = $('#input-gender').data('input-gender');
var inputValue = '';
var templateString = '';

function loadFilter(inputValue, dataInput) {
    $('.options-container').empty();
    var output = [];
    for (i in dataInput) {
        if (dataInput[i].text.toUpperCase().indexOf(inputValue.toUpperCase()) > -1)
            output.push(dataInput[i]);
    }
    // console.log(output);
    for (i in output) {
        templateString = '<div class="option"> <div class="trueIcon"></div><label for="' + output[i].text + '">' + output[i].text + '</label> </div>'
        $('.options-container').append(templateString)
    }
    if (output.length === 0) {
        $('#input-gender').addClass('warning')
    }
    else $('#input-gender').removeClass('warning')

}

function checkFilter(inputValue, dataInput) {
    var checked = false;
    for (i in dataInput) {
        if (inputValue == dataInput[i].text)
            checked = true;
    }
    return checked;
}
var tempKey = -1;
$('#input-gender').keyup(function (e) {
    inputValue = $('#input-gender').val();
    // console.log(inputValue);
    loadFilter(inputValue, dataInput);
    $('.options-container').addClass('active');
    if (checkFilter(inputValue, dataInput)) $('.options-container').removeClass('active');

    $(".option").on('click', function () {
        // console.log(this);
        $('#input-gender').val(this.innerText);
        $('.options-container').removeClass('active');
    })

    if (e.keyCode === 38 && tempKey > 0) tempKey--;
    if (e.keyCode === 40) tempKey++;
    if (e.keyCode === 8) tempKey = -1;
    if (tempKey === $(".option").length) tempKey = 0;
    // console.log(tempKey);

    console.log(tempKey);
    // console.log(e.keyCode);
    $(".option").each(function (index) {
        if (tempKey === index) {
            $(this).addClass('selectedOption');
            // console.log(this.innerText);
            if (e.keyCode === 13) {
                $('#input-gender').val(this.innerText);
                $('.options-container').removeClass('active');
            }
        }
    })

    $(".option").each(function (index) {
        $(this).hover(function () {
            console.log(index);
            $(this).addClass('hoveredOption');
        })
        $('.option').mouseleave(function () {
            $(this).removeClass('hoveredOption');
        })
    })

    $(document).click(function (e) {
        if (!$('.select-box').is(e.target) && $('.select-box').has(e.target).length === 0) {
            $('.options-container').removeClass('active');
            inputValue = $('#input-gender').val();
            if (!checkFilter(inputValue, dataInput)) $('#input-gender').addClass('warning');
        }
    });

})

$('#icon').on('click', function () {
    tempKey = -1;
    inputValue = $('#input-gender').val();
    // console.log(inputValue);
    loadFilter(inputValue, dataInput);
    $('.options-container').toggleClass('active');
    $(".option").on('click', function () {
        $('#input-gender').val(this.innerText);
        $('.options-container').removeClass('active');
    })

    var indexHovered;
    $(".option").each(function (index) {
        $(this).hover(function () {
            indexHovered = index;
            console.log(index);
            $(this).addClass('hoveredOption');
            if (indexHovered != index) {
                $(this).removeClass('hoveredOption');
            }
        })
        $('.option').mouseleave(function () {
            $(this).removeClass('hoveredOption');
        })
    })

    $(document).click(function (e) {
        if (!$('.select-box').is(e.target) && $('.select-box').has(e.target).length === 0) {
            $('.options-container').removeClass('active');
            inputValue = $('#input-gender').val();
            if (!checkFilter(inputValue, dataInput)) $('#input-gender').addClass('warning');
        }
    });
});






