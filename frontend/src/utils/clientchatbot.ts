import {
	type 
} from 'os'

const clientchatbot = [
	{
		id: 0,
		question: 'Olá! Seja bem-vindo ao cadastro de clientes! \nPrimeiramente, me informe o nome do cliente.',
		type: 'string'
	},
	{
		id: 1,
		question: 'Certo, qual o CPF desse mesmo cliente.',
		type: 'string'
	},
	{
		id: 2,
		question: 'Perfeito! Agora eu preciso saber de alguns dados de endereço.' + 
		'\n Qual o CEP do endereço que você quer registrar?',
		type: 'string'
	},
	{
		id: 3,
		question: 'Computando... Ok, qual o logradouro do cliente?',
		type: 'string'
	},
	{
		id: 4,
		question: 'Informe também o bairro de residência do cliente.',
		type: 'string'
	},
	{
		id: 5, 
		question: 'E o estado em que ele vive?', 
		type: 'string'
	},
	{
		id: 6,
		question: 'Para finalizar os itens obrigatórios de endereço, qual a cidade?',
		type: 'string'
	},
	{
		id: 7,
		question: 'Deseja cadastrar complemento?',
		type: 'boolean'
	},
	{
		id: 8,
		question: 'Infome-nos o complemento.',
		type: 'string'
	},
	{
		id: 9,
		question: 'Obrigada por cadastrar o cliente! Ficamos muito felizes em atender você :)',
		type: 'finish'
	}
]

export default clientchatbot