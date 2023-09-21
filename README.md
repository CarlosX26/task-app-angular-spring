# TASK APP

Este é um simples app de gerenciamento de tarefas, que me permitiu explorar conceitos do SpringBoot, e do Angular.

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:CarlosX26/task-app-angular-spring.git
```

Entre no diretório do projeto front-end

```bash
  cd task-app-angular-spring/front-end/
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

Entre no diretório do projeto back-end

```bash
  cd task-app-angular-spring/back-end/
```

Instale as dependências

```bash
  mvn install
```

Abra o arquivo application.properties em src/main/resources

```bash
spring.datasource.password=<your_passowrd_postgres>
```

Inicie o servidor

```bash
  mvn spring-boot:run
```

## Stack utilizada

**Front-end:** Angular, TypeScript e SASS

**Back-end:** Java, SpringBoot e PostgreSQL

