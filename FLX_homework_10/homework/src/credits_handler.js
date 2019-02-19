// 1
function usedCard(index) {
    let key = index;
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let time = new Date().toLocaleDateString('en-GB');
    let tax = 0.005;

    function historyLog(operationType, credits, oprationTime) {
        historyLogs.push({
            operationType:operationType,
            credits:  credits,
            operationTime: oprationTime
        });
    }

    return {
        getCardOptions() {
            return { balance, transactionLimit, historyLogs, key};
        },

        putCredits(amount) {
            balance += amount;

            historyLog(`Recieved credits`, amount, time);
        },

        takeCredits(amount) {
            if( this.transactionLimit > amount && this.balance > amount){
                this.balance = this.balance - amount;
                this.historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: amount,
                    operationTime: time
                });
            }else {
                console.log('Credits you want to take is greater than ' +
                    'transaction limit or remaining balance')
            }
        },

        setTransactionLimit(amount) {
            transactionLimit = amount;

            historyLog(`Transaction limit change`, amount, time);
        },

        transferCredits(amount, card) {
            const withTax = amount * tax + amount;

            if (withTax > balance ) {
                console.log(`Error: You can't transfer credits - balance exceeded.`);
            } else if (transactionLimit < withTax) {
                console.log(`Error: You can't transfer credits - transaction limit exceeded.`)
            } else {
                this.takeCredits(withTax);
                card.putCredits(amount);
            }
        }
    };
}

// 2

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardLimit = 3;
    }

    addCard() {
        if (this.cards.length < this.cardLimit) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log('Sorry, you can use only 3 cards');
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}