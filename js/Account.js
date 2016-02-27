function Account(accountName) {
    this.accountName = accountName;
    this.balance = 0;
    this.isActivated = false;
    this.person = new Person();
    this.lastOperation = "--/--/----";
}

Object.defineProperty(Account.prototype, "balance", {
    get: function () {
        return this._balance;
    },
    set: function (balance) {
        this._balance = balance;
    }
});

Object.defineProperty(Account.prototype, "person", {
    get: function () {
        return this._person;
    },
    set: function (person) {
        this._person = person;
    }
});

Object.defineProperty(Account.prototype, "isActivated", {
    get: function () {
        return this._isActivated;
    },
    set: function (isActivated) {
        this._isActivated = isActivated;
    }
});

Object.defineProperty(Account.prototype, "lastOperation", {
    get: function () {
        return this._lastOperation;
    },
    set: function (lastOperation) {
        this._lastOperation = lastOperation;
    }
});

Account.prototype.logBalance = function () {
    console.log("Current balance on account " + this.accountName + ": " + this.balance);
};