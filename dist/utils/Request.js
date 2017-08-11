"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./../config/constants");
const axios = require("axios");
/**
 * Request
 *
 * Classe responsavel pelas requisicoes
 * a api do Apresente.se Admin.
 *
 */
class Request {
    /**
     * __setHeaders
     *
     * seta os headers da requisicao
     *
     */
    __setHeaders() {
        return {
            'Content-Type': 'application-json'
        };
    }
    /**
     * post
     *
     * faz uma requisicao post
     *
     * @param {string} endpoint url destino
     * @param {any} data os dados que serem enviados ao servidor
     */
    post(endpoint, data) {
        return this.__call(`${constants_1.default['URL']}${endpoint}`, 'post', data);
    }
    /**
     * get
     *
     * faz uma requisicao get
     *
     * @param {string} endpoint url destino
     */
    get(endpoint) {
        // faz a chamada a api
        return this.__call(`${constants_1.default['URL']}${endpoint}`);
    }
    /**
     * __call
     *
     * faz a chamada na API
     *
     * @param {string} endpoint url de saida
     * @param {string} method metodo da requisicao
     * @param {any} data os dados a serem enviados ao servidor
     */
    __call(endpoint, method = 'get', data) {
        // pega os headers
        const headers = this.__setHeaders();
        // percorre os headers
        for (let h in headers) {
            axios.default.defaults.headers[h] = headers[h];
        }
        // verifica o método
        let req;
        if (method == 'get') {
            req = axios.default.get(endpoint, { headers });
        }
        else {
            req = axios.default.post(endpoint, data, { headers });
        }
        // volta uma nova promise
        return new Promise((resolve, reject) => {
            // pega a requisicao
            req.then(res => {
                // pega os dados de resposta
                const data = res.data;
                // verifica se existe o code
                if (!data.code) {
                    reject(data);
                    return;
                }
                // faz o switch
                switch (data.code) {
                    case '200':
                        resolve(data.data);
                        break;
                    case '400':
                        resolve(data.message);
                        break;
                    case '403':
                        resolve('Acesso negado');
                        break;
                }
            })
                .catch(err => {
                // faz o reject com erro
                reject(err);
            });
        });
    }
}
exports.Request = Request;
;
/* end of file */ 
