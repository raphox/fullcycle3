# Hello Full Cycle utilizando Golang e Docker

## Informações do desafio

Esse será o desafio que fará você ter contato com um dos frameworks de alta produtividade mais poderosos do mercado. O Django.

Nesse desafio você terá que criar, utilizando o Django, uma simples aplicação que listará o nome de todas as aulas da nossa Maratona Full Cycle 3.0, sendo que os dados devem vir diretamente de um banco de dados SQLite.

Quando alguém acessar a aplicação através do endpoint /maratona, pela porta 8000, a listagem deverá aparecer.

Para entregar o desafio, gere uma imagem docker, faça o push para sua conta do DockerHub e informe a URL da imagem logo abaixo.

Antes de submeter o desafio, teste se tudo está funcionando executando o comando:

```bash
docker run -p 8000:8000 seu-usuario/sua-imagem-docker
```

Não se esqueça que também temos um canal na comunidade criada no Discord para debater exatamente esse desafio.

## Minhas referências

* https://docs.docker.com/compose/django/
* https://hub.docker.com/_/django
* https://docs.djangoproject.com/en/3.0/faq/install/#faq-python-version-support

## Executando

### Gerar código do projeto

```bash
docker run --rm -v $PWD/app:/usr/src/app raphox/fullcycle3-04 django-admin startproject fullcycle .
```

### Start do projeto

```bash
docker run -p 8000:8000 raphox/fullcycle3-04
```
