"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase");
class Netuno {
    /**
     * init
     *
     * inicializa o firebase
     *
     */
    static init(config) {
        // verifica se já iniciou
        if (!Netuno.__init) {
            firebase.initializeApp(config);
        }
        // seta como inicializado
        Netuno.__init = true;
    }
}
// indica se o app já foi inicializado
Netuno.__init = false;
exports.Netuno = Netuno;
;
/* end of file */ 
