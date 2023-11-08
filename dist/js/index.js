"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Extension Start");
let gameLog = null;
const checkIfLogExists = setInterval(() => {
    gameLog = document.getElementById("game-log-text");
    if (gameLog !== null) {
        clearInterval(checkIfLogExists);
        const observer = new MutationObserver((mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") {
                    console.log(`MUTATION': `, mutation);
                }
            }
        });
        observer.observe(gameLog, { childList: true, subtree: true });
    }
}, 2500);
//# sourceMappingURL=index.js.map