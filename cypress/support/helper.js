//Aqui eu gero o email válido (decidi fazer assim só para testar como seria o resultado)

import _ from 'lodash';
const nomes = ["joao", "maria", "pedro", "kleber", "roberto", "vinicius", "rafael"];
const caracteresEspeciais = ["_"];
const provedoresEmail = ["@gmail.com", "@bol.com", "@gov.br", "@globo.com", "@mercado.com.br"];
const nomeAleatorio = _.sample(nomes);
const caracteresAleatorios = _.sample(caracteresEspeciais);
const provedorAleatorio = _.sample(provedoresEmail);
const emailGerado = `${nomeAleatorio}${caracteresAleatorios}${provedorAleatorio}`;
export { emailGerado };


const caracteresEspeciais_2 = ["_!"];
const caracteresAleatorios_2 = _.sample(caracteresEspeciais_2);
const emailInvalidoGerado = `${nomeAleatorio}${caracteresAleatorios_2}${provedorAleatorio}`;
export { emailInvalidoGerado };
