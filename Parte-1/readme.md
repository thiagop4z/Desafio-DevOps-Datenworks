### Desafio DevOps Datenworks - Parte 1

Codar uma RestAPI hellow-world em qualquer linguagem e configurar sua execucao em container.

Entregaveis:

- [x] Codigo da API
- [x] Dockerfile
- [x] Comandos para deixar a API rodando
- [x] Payload de teste da API

#### Comandos para rodar a API:

1. [Instalar e iniciar Docker](https://docs.docker.com/engine/install/)

2. Baixar arquivos deste repositorio:\
`wget https://github.com/thiagop4z/Desafio-DevOps-Datenworks/archive/refs/heads/main.zip`

3. Descompactar arquivo zip e acessar pasta utilizando o comando:\
`unzip main.zip; cd Desafio-DevOps-Datenworks-main/Parte-1/`

4. Construir imagem:\
`docker build -t myapi .`

5. Executar container:\
`docker run -tdp 3000:3000 myapi`

#### Testes

Algumas alternativas para teste da API:

1. Acessar a URL da API via navegador (Exemplo: http://localhost:3000/api)

2. Executar o comando:\
`curl http://52.90.70.203:3000/api`

3. Utilizar a ferramenta [Postman](https://web.postman.co/).
