# Hello Full Cycle utilizando Golang e Docker

## Informações do desafio

Esse será o desafio que fará você ter contato com um dos frameworks javascript que mais cresce no mercado. O Nest.js.

Nesse desafio você terá que criar, utilizando o Nest.js, uma simples aplicação que listará o nome de todas as lives da nossa Maratona Full Cycle 3.0, sendo que os dados devem vir diretamente de um banco de dados SQLite.

Quando alguém acessar a aplicação através do endpoint /maratona, pela porta 3000, a listagem deverá aparecer.

Para entregar o desafio, gere uma imagem docker, faça o push para sua conta do DockerHub e informe a URL da imagem logo abaixo.

Antes de submeter o desafio, teste se tudo está funcionando executando o comando:

```bash
docker run -p 3000:3000 seu-usuario/sua-imagem-docker
```

Não se esqueça que também temos um canal na comunidade criada no Discord para debater exatamente esse desafio.

## Minhas referências

* https://docs.nestjs.com/first-steps
* https://blog.logrocket.com/containerized-development-nestjs-docker/
* https://hub.docker.com/r/nestjs/cli
* https://docs.nestjs.com/cli/usages
* https://handlebarsjs.com/

## Criando o código fonte da aplicação

```bash
docker run -v $PWD/app:/usr/src/app raphox/fullcycle3-05 nest new fullcycle -gs
mv app/fullcycle/* app
```

## Executando

```bash
docker run -p 3000:3000 raphox/fullcycle3-02
```
