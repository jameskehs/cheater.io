import $ from "jquery";
import { Player } from "./interfaces/Player";

let gameLog: HTMLElement | null = null;
let players: Player[] = [];

const assignLog = setInterval(() => {
  gameLog = document.getElementById("game-log-text");
  if (gameLog !== null) {
    clearInterval(assignLog);
    createObserver();
  }
}, 2500);

function createObserver() {
  const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList" && (mutation.target as HTMLElement).id === "game-log-text") {
        console.log("Mutation: ", mutation);
      }
    }
  });
  observer.observe(gameLog!, { childList: true, subtree: true });
}

function createPlayer(name: string) {
  const existingPlayer = players.find((player) => player.name === name);

  if (!existingPlayer) {
    players.push();
  }
}
