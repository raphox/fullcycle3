# Hello Full Cycle utilizando Golang e Docker

## Informações do desafio

Esse desafio consiste em criar uma página web com o conteúdo "Hello Full Cycle" utilizando a linguagem Golang e o framework Buffalo.

Quando o usuário acessar o projeto no endpoint `/hello`, ele deverá ver a mensagem "Hello Full Cycle".

Para fazer a entrega do desafio, gere uma imagem docker de sua aplicação funcionando e a disponibilize em sua conta no Docker Hub.

Quando alguém executar: `docker run -p 3000:3000 seuuser/suaimagem`, a aplicação deverá estar disponível na porta 3000.

Informe no campo abaixo a URL da sua imagem no Docker Hub.

> **Dica:** O Buffalo automaticamente gera um Dockerfile para você. Faça bom uso dele.

Não se esqueça que também temos um canal na comunidade criada no Discord para debater exatamente esse desafio.

## Minhas referências

* https://gobuffalo.io/en/docs/getting-started/installation
* https://gobuffalo.io/en/docs/getting-started/new-project
* https://hub.docker.com/r/gobuffalo/buffalo/dockerfile
* https://www.ribice.ba/buffalo-dokku/
* https://github.com/acsantosabino/maratona-fullcycle/tree/master/desafio02
* https://codepen.io/cybercountess/pen/RwNXxyq

## Criando o código fonte da aplicação

```bash
docker run -v $PWD:/src gobuffalo/buffalo buffalo new app --vcs none --skip-pop -f
sudo chown -R $USER:$USER app
```

## Executando

```bash
docker run -p 3000:3000 raphox/fullcycle3-02
```
