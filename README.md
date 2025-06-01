#App Node.js com NGINX e CI/CD – H&W Publishing

Este projeto foi desenvolvido como parte do teste técnico para a vaga de Infraestrutura e DevOps da H&W Publishing. Ele demonstra a criação de uma aplicação Node.js balanceada com NGINX, implantada em uma instância EC2, com pipeline CI/CD usando GitHub Actions.

---

##Tecnologias Utilizadas

- **Node.js** – Aplicação simples em Express
- **PM2** – Gerenciador de processos Node.js
- **NGINX** – Servidor web e balanceador de carga
- **GitHub Actions** – CI/CD automatizado
- **EC2 (Ubuntu Server)** – Infraestrutura de nuvem

---

##Como Executar a Aplicação

###Em Produção (EC2)
1. Faça um push para o branch `main`:
   ```bash
   git push origin main

   O GitHub Actions será acionado automaticamente.

2. A pipeline irá:

-Conectar via SSH à EC2

-Executar git pull

-Reiniciar as instâncias da aplicação com PM2

3. Acesse a aplicação via navegador:
http:\\3.144.157.130

4. Executando Localmente
bash
npm install

PORT=3000 node index.js
PORT=3001 node index.js

Configure o NGINX localmente com o seguinte:

upstream app_cluster {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
}

server {
    listen 80;

    location / {
        proxy_pass http://app_cluster;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

 Estrutura da Pipeline CI/CD

-Arquivo: .github/workflows/deploy.yml

-Checkout do repositório

-Configuração do SSH com chave segura (armazenada em GitHub Secrets)

-Deploy remoto com git pull

Reinício das aplicações com PM2


Segurança
A chave SSH está armazenada nos GitHub Secrets

-Permissões seguras com chmod 600

-Verificação de host com known_hosts

-As aplicações rodam isoladas com PM2

Extras
-A aplicação roda em duas portas (3000 e 3001)

-O NGINX faz o balanceamento de carga entre as instâncias

-Toda a configuração está documentada neste repositório

Feito com por Maxwell Antônio Alves de Souza
