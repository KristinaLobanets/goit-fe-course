"use strict";

class StringBuilder {
  constructor(obj) {
    this._value = obj;
  }
  get oneUser() {
    return this._value;
  }

  set oneUser(value) {
    this._value = value;
  }
  append(str) {
    return (this.value = this._value + str);
  }

  prepend(str) {
    return (this.value = str + this.value);
  }

  pad(str) {
    return (this.value = str + this.value + str);
  }
}

const builder = new StringBuilder(".");
console.log(builder);

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
