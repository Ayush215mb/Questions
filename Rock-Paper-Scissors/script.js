 let user = prompt("Enter Rock,Paper,Scissor:");
        let compA = Math.floor(Math.random() * 3);

        let comp = ["Rock", "Paper", "Scissor"][compA];

        const match = (user, comp) => {
            if (user == comp) {
                return "Draw \n No One Wins"
            }
            else if (user != "Rock" && user != "Scissor" && user != "Paper") {
                return 0;


            }

            else if (user == 'Rock' && comp == "Paper") {
                return "Computer wins"
            }
            else if (user == 'Rock' && comp == "Scissor") {
                return "User wins"
            }


            else if (user == "Paper" && comp == 'Rock') {
                return "User wins"
            }
            else if (user == "Paper" && comp == "Scissor") {
                return "Computer wins"
            }

            else if (user == "Scissor" && comp == "Paper") {
                return "User wins"
            }
            else if (user == "Scissor" && comp == 'Rock') {
                return "Computer wins"
            }

        }
        let result = match(user, comp);
        if (result == 0) {
            document.write("INVALID OPTION")
        }
        else {
            document.write(`User: ${user} <br> Computer: ${comp} <br> ${result}`);
        }
