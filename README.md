# Send Js

Simplifique requisições ajax com essa incrível biblioteca

Utilização:

Para consumir um api para manipular o DOM com os dados basta Usar o método estático get esse método precisa de apenas dois argumentos que são a url que ele irá buscar as informações e o segundo argumento e um função para você manipular esses dados.

Send.get('https://jsonplaceholder.typicode.com/posts', (e) => {
	console.log(e);
});


Envio de dados:

Para enviar dados para o servidor usaremos o metodo toSend ele pede 4 parametroes que são o formulario a rota para envios de dados method de envio que pode ser get ou post e um função de callback para manipular o retorno dos dados.

Send.toSend('form', './route', 'post', (e) => {
	console.log(e)
})