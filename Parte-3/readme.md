## Desafio DevOps Datenworks - Parte 3

Codar uma RestAPI hellow-world em qualquer linguagem (pode ser a mesma da Parte 1) e configurar sua execução em AWS Lambda.

**Entregáveis:**

- [x] Código da API
- [x] Terraform para execução na AWS
- [x] Considerar todos os resources necessários para a subida de uma AWS Lambda apenas para teste (API gateway será um diferencial)
- [x] Comandos para executar o Terraform
- [x] Explicação de como testar a subida e execução da lambda

### Comandos para execução do Terraform

1. [Instalar Terraform e AWS CLI](https://learn.hashicorp.com/terraform)

2. Clonar este repositorio

3. Acessar pasta Parte-3\
`cd Desafio-DevOps-Datenworks/Parte-3`

4. Executar comando\
`terraform init && terraform apply`

5. Confirmar execução digitando "yes"

### Testes

1. Acessar a URL exibida no campo base_url adicionando /hello ao final. Exemplo:
`https://uxddlh1hq0.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/hello`

ou

2. executar comando "curl base_url/hello", substituindo a palavra base_url pela URL retornada pelo Terraform. Exemplo:
`curl https://uxddlh1hq0.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/hello`
