const classImgLists = document.querySelectorAll("#mbti");

function selectMbti(event) {
    if (event.target.getAttribute("class") == "unselected") {
        event.target.setAttribute("class", "selected");
    } else {
        event.target.setAttribute("class", "unselected");
    }
}

for (let index = 0; index < classImgLists.length; index = index + 1) {
    classImgLists[index].addEventListener("click", selectMbti);
}