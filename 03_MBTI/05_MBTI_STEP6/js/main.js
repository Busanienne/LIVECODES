let combinations = {
    "ESTJ": {
        "best": ["ISFP", "ISTP"],
        "good": ["ISFJ", "ESFJ", "ISTJ", "ESTJ"],
        "bad": ["INFP", "ENFP", "INFJ", "ENFJ"]
    },
    "ESTP": {
        "best": ["ISFJ", "ISTJ"],
        "good": ["INTJ", "ENTJ", "INTP", "ENTP"],
        "bad": ["INFP", "ENFP", "INFJ", "ENFJ"]
    },
    "ESFJ": {
        "best": ["ISFP", "ISTP"],
        "good": ["ISFJ", "ESFJ", "ISTJ", "ESTJ"],
        "bad": ["INFP", "ENFP", "INFJ", "ENFJ"]
    },
    "ESFP": {
        "best": ["ISFJ", "ISTJ"],
        "good": ["INTJ", "ENTJ", "INTP", "ENTP"],
        "bad": ["INFP", "ENFP", "INFJ", "ENFJ"]
    },
    "ENTJ": {
        "best": ["INFP", "INTP"],
        "good": ["ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "ENTP"],
        "bad": []
    },
    "ENTP": {
        "best": ["INFJ", "INTJ"],
        "good": ["INFP, ENFP, ENFJ, ENTJ, INTP, ENTP"],
        "bad": []
    },
    "ENFJ": {
        "best": ["INFP", "ISFP"],
        "good": ["ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP"],
        "bad": ["ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"]
    },
    "ENFP": {
        "best": ["INFJ", "INTJ"],
        "good": ["INFP", "ENFP", "ENFJ", "ENTJ", "INTP", "ENTP"],
        "bad": ["ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"]
    },
    "ISTJ": {
        "best": ["ESFP", "ESTP"],
        "good": ["ISFJ", "ESFJ", "ISTJ", "ESTJ"],
        "bad": ["INFP", "ENFP", "INFJ", "ENFJ"]
    },
    "ISTP": {
        "best": ["ESFJ", "ESTJ"],
        "good": ["INTJ", "ENTJ", "INTP", "ENTP"],
        "bad": ["INFP", "ENFP", "INFJ", "ENFJ"]
    },
    "ISFJ": {
        "best": ["ESFP", "ESTP"],
        "good": ["ISFJ", "ESFJ", "ISTJ", "ESTJ"],
        "bad": ["INFP", "ENFP", "INFJ", "ENFJ"]
    },
    "ISFP": {
        "best": ["ENFJ", "ESFJ", "ESTJ"],
        "good": ["INTJ", "ENTJ", "INTP", "ENTP"],
        "bad": ["INFP", "ENFP", "INFJ"]
    },
    "INTJ": {
        "best": ["ENFP", "ENTP"],
        "good": ["INFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP"],
        "bad": []
    },
    "INTP": {
        "best": ["ENTJ", "ESTJ"],
        "good": ["INFP", "ENFP", "INFJ", "ENFJ", "INTJ", "INTP", "ENTP"],
        "bad": []
    },
    "INFJ": {
        "best": ["ENFP", "ENTP"],
        "good": ["INFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP"],
        "bad": ["ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"]
    },
    "INFP": {
        "best": ["ENTJ", "ESTJ"],
        "good": ["INFP", "ENFP", "INFJ", "INTJ", "INTP", "ENTP"],
        "bad": ["ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"]
    }
}

let selectedMBTIs = new Array();
const classImgLists = document.querySelectorAll("#mbti");
const messageBox = document.querySelector(".result");


function selectMbti(event) {
    let found = false;
    if (event.target.getAttribute("class") == "unselected") {
        if (selectedMBTIs.length < 2) {
            event.target.setAttribute("class", "selected");
            selectedMBTIs[selectedMBTIs.length] = event.target.innerHTML;

        }

    } else {
        event.target.setAttribute("class", "unselected");
        for (let index = 0; index < selectedMBTIs.length; index = index + 1) {
            if (selectedMBTIs[index] == event.target.innerHTML) {
                selectedMBTIs.splice(index, 1);
            }
        }

    }
    if (selectedMBTIs.length == 0) {
        messageBox.innerHTML = "두 MBTI 성향을 클릭하세요";
    } else if (selectedMBTIs.length == 1) {
        messageBox.innerHTML = "하나 더 MBTI 성향을 클릭하세요";
    } else {
        for (let index in combinations[selectedMBTIs[0]].best) {
            if (selectedMBTIs[1] == combinations[selectedMBTIs[0]].best[index]) {
                messageBox.innerHTML = selectedMBTIs[0] + " 와 " + selectedMBTIs[1] + "는 매우 잘 맞는 조합입니다";
                found = true;
            }

        }
        for (let index in combinations[selectedMBTIs[0]].good) {
            if (selectedMBTIs[1] == combinations[selectedMBTIs[0]].good[index]) {
                messageBox.innerHTML = selectedMBTIs[0] + " 와 " + selectedMBTIs[1] + "는 평균보다 잘 맞는 조합입니다";
                found = true;
            }
        }

        for (let index in combinations[selectedMBTIs[0]].bad) {
            if (selectedMBTIs[1] == combinations[selectedMBTIs[0]].bad[index]) {
                messageBox.innerHTML = selectedMBTIs[0] + " 와 " + selectedMBTIs[1] + "는 평균보다 잘 안 맞는 조합입니다";
                found = true;
            }
        }
        if (found == false) {
            messageBox.innerHTML = selectedMBTIs[0] + " 와 " + selectedMBTIs[1] + "는 평균으로 맞는 조합입니다";
        }
    }
}
for (let index = 0; index < classImgLists.length; index = index + 1) {
    classImgLists[index].addEventListener('click', selectMbti);
}
