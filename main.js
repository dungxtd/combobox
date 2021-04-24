/*const selected = document.querySelector(".icon");
const input = document.querySelector("#input-gender");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(e => {
    e.addEventListener("click", () => {
        input.value = e.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

useEffect(() => {
    //  thêm khi đã mount
    document.addEventListener("mousedown", handleClick);
    // dọn dẹp
    return () => {
        document.removeEventListener("mousedown", handleClick);
    }
}, [])

const handleClick = e => {
    if (node.current.contains(e.target)) {
        return;
    }

};*/

$(function () {
    $('.icon').click(function () {
        $('.options-container').toggleClass('active');
    });

    $(".option").on('click', function () {
        $('#input-gender').val(this.innerText);
        $('.options-container').removeClass('active');
    })
});
