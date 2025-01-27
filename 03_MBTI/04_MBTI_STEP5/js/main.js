let selectedMBTIs = new Array();
const classImgLists = document.querySelectorAll("#mbti");
const messageBox = document.querySelector(".result");


function selectMbti(event) {
    if (event.target.getAttribute("class") == "unselected") {
        if (selectedMBTIs.length < 2) {
            event.target.setAttribute("class", "selected");
            selectedMBTIs[selectedMBTIs.length] = event.target.innerHTML;
            console.log(selectedMBTIs);
        }

    } else {
        event.target.setAttribute("class", "unselected");
        for (let index = 0; index < selectedMBTIs.length; index = index + 1) {
            if (selectedMBTIs[index] == event.target.innerHTML) {
                selectedMBTIs.splice(index, 1);
            }
        }
        console.log(selectedMBTIs);
    }
    if (selectedMBTIs.length == 0) {
        messageBox.innerHTML = "두 MBTI 성향을 클릭하세요";
    } else if (selectedMBTIs.length == 1) {
        messageBox.innerHTML = "하나 더 MBTI 성향을 클릭하세요";
    }
    else {
        messageBox.innerHTML = "두 MBIT 성향을 클릭하였습니다";
    }

}
for (let index = 0; index < classImgLists.length; index = index + 1) {
    classImgLists[index].addEventListener('click', selectMbti);
}
