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


