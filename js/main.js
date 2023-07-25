console.log("Javascript is connected");


const backgroundMusic = document.getElementById("background-music");
const playButton = document.getElementById("play-button");
const theButtons = document.querySelectorAll("#buttons img"),
    musicBoard = document.querySelector(".music-board");
    ghostBox = document.querySelectorAll(".ghost-box img"),
    ghostGif = document.querySelector(".ghost-gif"),
    dropZones = document.querySelectorAll(".drop-zone");

    let draggedPiece;

    
function playBackgroundMusic() {
    backgroundMusic.play();
}
    
function handleStartDrag() {
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log("Item has been dropped");

    if(this.children.length>=1) {
        return;
    }

    this.appendChild(draggedPiece);

    // create and play sounds
    const audioSrc = draggedPiece.getAttribute("data-audio");

    // Create and play sounds
    let ghost = document.createElement("audio");
    ghost.src = audioSrc;
    ghost.volume = 0.3;
    ghost.loop = "true";
    ghost.load();
    ghost.addEventListener("ended", () => ghost.remove());
    document.body.appendChild(ghost);
    ghost.play();
}




theButtons.forEach(button => button.addEventListener("click", play));

ghostBox.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

playButton.addEventListener("click", playBackgroundMusic);



