"use strict";


let totalBoxRate = document.querySelector(".total-box-rate");
let totalTextBox = document.querySelector(".total-text-box");
let rangeEmojis = document.querySelector(".range-emoji-rate");

let imageStarBoxRate = document.querySelector(".star-image-box");
let spanEmojis = document.createElement("span");
spanEmojis.classList.add("emoji-image")
imageStarBoxRate.append(spanEmojis)
let emojiImage = document.querySelector(".emoji-image");
let imageStarRate = document.querySelector(".star-image");

let buttonSend = document.querySelector(".submitbtn-rate");

const handleRangeEmojiChange = () => {
    rangeEmojis.addEventListener("input", () => {
        imageStarRate.style.display = "none"
        switch (rangeEmojis.value) {
            case "1":
                return emojiImage.innerHTML = "☹️"
            case "2":
                return emojiImage.innerHTML = "🙁"
            case "3":
                return emojiImage.innerHTML = "😐"
            case "4":
                return emojiImage.innerHTML = "😀"
            case "5":
                return emojiImage.innerHTML = "😍"
            default:
                break;
        }
    })
}

handleRangeEmojiChange()



const handleEmojiSubmit = () => {
    if (emojiImage.innerHTML.length > 0) {
        totalBoxRate.setAttribute("style", "transform:rotateY(180deg)");
        imageStarBoxRate.setAttribute("style", `width: 60px;height: 60px;`);
        emojiImage.style.fontSize = "27px";

        totalTextBox.setAttribute("style", "transform:rotateY(180deg)");
        totalTextBox.querySelector(".title-rate").innerHTML = `رتبه ${rangeEmojis.value} از 5`
        if (rangeEmojis.value <= 3) {
            totalTextBox.querySelector(".description-rate").innerHTML = "خیلی کم رتبه دادی"
        } else {
            totalTextBox.querySelector(".description-rate").innerHTML = "خیلی ممنون از رتبه ای که بهم دادی"
        }

        rangeEmojis.parentElement.style.display = "none";
        buttonSend.style.display = "none";
    }
}
buttonSend.addEventListener('click', handleEmojiSubmit);
