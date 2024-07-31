# Minecraft Bot

Este é um bot para Minecraft desenvolvido usando [Mineflayer](https://github.com/PrismarineJS/mineflayer) e [Bun](https://bun.sh/). O bot é configurado através de variáveis de ambiente validadas usando [Zod](https://github.com/colinhacks/zod) e o código segue padrões de qualidade com [ESLint](https://eslint.org/).

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Instalação

Certifique-se de ter o [Bun](https://bun.sh/) instalado em seu sistema.

Clone o repositório:

```bash
git clone https://github.com/JobsonMarinho/estudo-mineflayer-bun.git
cd estudo-mineflayer-bun
```

Instale as dependências:

```bash
bun install
```

## Configuração

Copie o arquivo `.env.sample`, renomeie para `.env` e altere as seguintes variáveis:

```env
SERVER_IP=server.com
USERNAME=myemail@hotmail.com
TYPE=microsoft
LOGIN_MESSAGE=Player entrou neste lobby!
LOGIN_COMMAND=/play fp
SERVER_MESSAGE=Seu grupo de scoreboard foi definido como Principal.
SERVER_COMMAND=/tp 30 76 -26
AFK_COMMAND=/money
SHOW_MESSAGES=true
```

Estas variáveis de ambiente são validadas usando Zod para garantir que estejam corretas.

## Uso

Para iniciar o bot, execute:

```bash
bun start
```

Se houver algum problema com as variáveis de ambiente, uma mensagem de erro será exibida e o processo será encerrado.

## Contribuindo

Caso tenha interesse em contribuir com o Bot!
Para ajudar você a começar, consulte [CONTRIBUTING](CONTRIBUTING.md).

## Licença

Este projeto está licenciado sob os termos da Licença de Uso Pessoal ou Acadêmico.
A venda ou distribuição deste código é estritamente proibida. Para mais detalhes, consulte a [LICENÇA](LICENSE).
