
//Retrieve elements from document and store in variable
const gifElement = document.getElementById("cat-gif")
const yesButton = document.getElementById("yes-btn")
const noButton = document.getElementById("no-btn")

//array of gifs - you can replace these with your preferred cat gifs
const gifs = [
    "https://media.tenor.com/AKqNbzy45x8AAAAm/begging.webp", // sad cat 1
    "https://media.tenor.com/1QTB9AnN7RQAAAAi/peach-goma.gif",       // sad cat 2
    "https://media.tenor.com/P285-2vH5FYAAAAi/alone-lonely.gif",       // sad cat 3
    "https://media1.tenor.com/m/iEXbs40PJrYAAAAC/heart-broken-broken-heart.gif",       // even sadder
    "https://media1.tenor.com/m/PcJlLy-TPjgAAAAC/sad-i-cry.gif"        // crying cat
]

//array of messages
const buttonMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Please reconsider!",
    "You're breaking my heart! 💔"
]

const happyGif = "https://github.com/user-attachments/assets/0b1c8afd-cd8d-4ce9-8b54-606b88bbc864" // happy cat

let noClickCount = 0

// Yes button click event
yesButton.addEventListener("click", function() {
    gifElement.src = happyGif
    
    // Optional: change the heading text
    const heading = document.querySelector("h1")
    if (heading) {
        heading.textContent = "Tu viens avec moi! Happy Valentine's Day 💖"
    }
    
    // Optional: hide buttons after yes
    yesButton.style.display = "none"
    noButton.style.display = "none"
})

// No button click event
noButton.addEventListener("click", function() {
    // Change gif based on click count
    if (noClickCount < gifs.length) {
        gifElement.src = gifs[noClickCount]
    }
    
    // Change button text based on click count
    if (noClickCount < buttonMessages.length - 1) {
        noButton.textContent = buttonMessages[noClickCount + 1]
    }
    
    // Optional: make Yes button bigger each time No is clicked
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize)
    yesButton.style.fontSize = (currentSize * 1.2) + "px"
    
    // Optional: make No button smaller
    const currentNoSize = parseFloat(window.getComputedStyle(noButton).fontSize)
    noButton.style.fontSize = (currentNoSize * 0.9) + "px"
    
    noClickCount++
})
