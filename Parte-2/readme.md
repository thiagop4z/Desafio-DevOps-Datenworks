## Desafio DevOps Datenworks - Parte 2

Codar uma RestAPI hellow-world em qualquer linguagem (pode ser a mesma da Parte 1) e configurar sua execução em K8s(minikube):

**Entregáveis:**

- [x] Codigo da API (na Parte-1)
- [x] Dockerfile (na Parte-1)
- [x] Manifestos kubernetes (myapi.yaml)
- [x] Comandos de build e subida dos resources dentro do minikube
- [x] Explicacao de como testar a subida e execucao da lambda

### Comandos para execução no serviço no Minikube

1. [Instalar Docker e Minikube](https://www.bogotobogo.com/DevOps/Docker/Docker-Kubernetes-Minikube-install-on-AWS-EC2.php)
2. Clonar este repositório
3. Acessar pasta Parte-2\
`cd Desafio-DevOps-Datenworks/Parte-2`
4. Executar comando:\
`kubectl apply -f myapi.yaml`

### Testes

Algumas alternativas para teste da API:\
Obs.: Se necessário, substituir "localhost" pelo ip do host minikube.

1. Acessar a URL da API via navegador (Exemplo: [http://localhost:30000/api](http://localhost:30000/api)).

2. Executar o comando:
`curl http://localhost:30000/api`

3. Utilizar a ferramenta [Postman](https://web.postman.co/) (a API precisa estar online).
