### Parte 1

Codar uma RestAPI hellow-world em qualquer linguagem e configurar sua execucao em container.

Entregaveis:

- [x] Codigo da API
- [x] Dockerfile
- [x] Comandos para deixar a API rodando
- Payload de teste da API

#### Comandos para rodar a API:



$ docker build -t myapi .

$ docker run -tdp 3000:3000 myapi /bin/bash
