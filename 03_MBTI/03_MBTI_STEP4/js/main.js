let selectedMBTIs = new Array();
const classImgLists = document.querySelectorAll("#mbti");

function selectMbti(event) {
    if (event.target.getAttribute("class") == "unselected") {
        event.target.setAttribute("class", "selected");
        selectedMBTIs[selectedMBTIs.length] = event.target.innerHTML;
        console.log(selectedMBTIs);
    } else {
        event.target.setAttribute("class", "unselected");
        for (let index = 0; index < selectedMBTIs.length; index = index + 1) {
            if (selectedMBTIs[index] == event.target.innerHTML) {
                selectedMBTIs.splice(index, 1);
            }
        }
        console.log(selectedMBTIs);
    }
}
for (let index = 0; index < classImgLists.length; index = index + 1) {
    classImgLists[index].addEventListener('click', selectMbti);
}
