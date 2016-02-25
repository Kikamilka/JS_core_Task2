function Person(name, birthDate) {
    this.name = name;
    this.birthDate = birthDate;
    this.accounts = [];
}

Person.prototype.addAccount = function (account) {
    this.accounts.push(account);
};

Object.defineProperty(Person.prototype, "name", {
    get: function () {
        return this._name;
    },
    set: function (newName) {
        this._name = newName;
    }
});

Object.defineProperty(Person.prototype, "birthDate", {
    get: function () {
        return this._birthDate;
    },
    set: function (birthDate) {
        this._birthDate = birthDate;
    }
});

Object.defineProperty(Person.prototype, "accounts", {
    get: function () {
        return this._accounts;
    },
    set: function (accounts) {
        this._accounts = accounts;
    }
});