var transferService = (function () {

    function registerAccount (person, accountName, balance) {
        if (balance < 0) {
            throw 'incorrect balance';
        }
        else {
            var newAccount = new Account(accountName);
            newAccount.balance = balance;
            newAccount.person = person;
            newAccount.isActivated = true;
            newAccount.lastOperation = new Date();
            person.addAccount(newAccount);
            console.log("Registered new account: " + accountName);
        }
        return newAccount;
    }

    function transferSum (accountFrom, accountTo, sum) {
        if (accountFrom.isActivated == false || accountTo.isActivated == false) {
            throw "not activated account";
        }
        else {
            if (sum < accountFrom.balance) {
                accountFrom.balance -= sum;
                accountTo.balance += sum;
                var curDate = new Date();
                var formatDate = curDate.getDate() + '/' + (curDate.getMonth() + 1) +
                    '/' + curDate.getFullYear();
                accountFrom.lastOperation = formatDate;
                accountTo.lastOperation = formatDate;
                console.log("Operation from: " + accountFrom.accountName + " to: " + accountTo.accountName);
                console.log("Transfer sum: " + sum);
                console.log("Completed:" + formatDate);
            }
            else {
                throw "incorrect sum for order";
            }
        }
    }

    function getAccounts(person) {
        return person.accounts;
    }

    return {
        register: registerAccount,
        transfer: transferSum,
        getPersonAccounts: getAccounts
    }
})();

