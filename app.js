"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const URL = 'https://gorest.co.in/public/v1/users';
const PATTERN = /gmail.com/;
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield node_fetch_1.default(URL);
        return yield result.json();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield getUsers();
    let emails = data.data.filter(r => r.email.match(PATTERN)).map(r => r.email);
    for (let x of emails)
        console.log(x);
}))();
//# sourceMappingURL=app.js.map