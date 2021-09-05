## Desafio DevOps Datenworks - Parte 3

Codar uma RestAPI hellow-world em qualquer linguagem (pode ser a mesma da Parte 1) e configurar sua execução em AWS Lambda.

**Entregáveis:**

- [x] Código da API (na Parte-1)
- [ ]Terraform para execução na AWS
- [ ] Considerar todos os resources necessários para a subida de uma AWS Lambda apenas para teste (API gateway será um diferencial)
- [ ] Comandos para executar o Terraform
- [ ] Explicação de como testar a subida e execução da lambda

### Comandos para execução do Terraform

1. `kubectl apply -f myapi.yaml`

### Testes

Algumas alternativas para teste da API:\
Obs.: Se necessário, substituir "localhost" pelo ip do host minikube.

1. Acessar a URL da API via navegador (Exemplo: [http://localhost:30000/api](http://localhost:30000/api)).

2. Executar o comando:
`curl http://localhost:30000/api`

3. Utilizar a ferramenta [Postman](https://web.postman.co/) (a API precisa estar online).
