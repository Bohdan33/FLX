const start = confirm('Do you want to play a game?');
let nextgame = true;
let randomNumber;
let maxPrizeAlpha = 10;
let maxPrize = maxPrizeAlpha;
let currentPrize = maxPrize;
let userNumber = null;
let userWin = 0;
let range = 5;
let rounds;
let rngAlpha = range;
let win;


if (!start) {
    alert(`You did not become a millionaire, but can.`);
} else {

    while (nextgame) {
        randomNumber = Math.floor(Math.random() * rngAlpha);
        rounds = 3;
        win = false;
        for (let i = 0; i < 3; i++) {
            userNumber = prompt(
                `Enter a number from 0 to ${rngAlpha}
        Attempts left: ${rounds}
        Total prize: ${userWin}$
        Possible prize on current attempt: ${currentPrize}$`
            );

            if (!userNumber) {
                break;
            }

            if (Number.parseFloat(userNumber) === randomNumber) {
                win = true;
                userWin += currentPrize;
                nextgame = confirm(`
          Congratulations! Your prize is ${userWin}$.
          Do you want to continue?
        `);
                maxPrize *= 3;
                currentPrize = maxPrize;
                rngAlpha *= 2;
                break;
            }
            currentPrize = Math.floor(currentPrize / 2);
            rounds--;
        }
        if (!win) {
            nextgame = alert(`Thank you for the game. Your prize is: ${userWin}$.`);
            nextgame = confirm(`Do you want to play again?`);
            userWin = 0;
            maxPrize = maxPrizeAlpha;
            currentPrize = maxPrizeAlpha;
            rngAlpha = range;
        }
        if (win && !nextgame) {
            nextgame = confirm(`
		Thank you for a game. Your prize is: ${userWin}$. Do you want to play again?
	  `);
        }
    }
}