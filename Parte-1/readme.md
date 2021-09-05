## Desafio DevOps Datenworks - Parte 1

Codar uma RestAPI hellow-world em qualquer linguagem e configurar sua execução em container.

**Entregáveis:**

- [x] Codigo da API
- [x] Dockerfile
- [x] Comandos para deixar a API rodando
- [x] Payload de teste da API

### Comandos para rodar a API:

1. [Instalar e iniciar Docker.](https://docs.docker.com/engine/install/)

2. Executar container:\
`docker run -tdp 3000:3000 thiagop4z/myapi`

### Testes

Algumas alternativas para teste da API:

1. Acessar a URL da API via navegador (Exemplo: http://localhost:3000/api).

2. Executar o comando:\
`curl http://localhost:3000/api`

3. Utilizar a ferramenta [Postman](https://web.postman.co/) (a API precisa estar online).
