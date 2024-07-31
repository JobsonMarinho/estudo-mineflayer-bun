# Mineflayer Bot

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

Obrigado por seu interesse em contribuir para o Mineflayer Bot! Aqui estão algumas diretrizes para ajudar você a começar.

### Como Contribuir

#### Relatando Bugs

1. Verifique se o bug já foi relatado.
2. Se não, crie um novo issue no [GitHub](https://github.com/seu-usuario/mineflayer-bot/issues) e inclua o máximo de detalhes possível:
   - Descrição clara e concisa do bug.
   - Passos para reproduzir o bug.
   - Versão do Mineflayer Bot e ambiente de execução.
   - Logs de erro ou mensagens relevantes.

#### Solicitando Novos Recursos

1. Verifique se a funcionalidade já foi solicitada.
2. Se não, crie um novo issue no [GitHub](https://github.com/seu-usuario/mineflayer-bot/issues) e descreva:
   - A funcionalidade desejada.
   - Por que você acha que ela é útil.
   - Exemplos de como ela poderia ser usada.

#### Enviando Pull Requests

1. Fork o repositório e clone seu fork localmente.
2. Crie um branch para sua contribuição:
   ```bash
   git checkout -b minha-contribuicao
   ```
3. Faça suas alterações no código.
4. Certifique-se de que o código segue os padrões de estilo definidos pelo ESLint:
   ```bash
   bun lint
   ```
5. Execute os testes para garantir que tudo está funcionando corretamente:
   ```bash
   bun test
   ```
6. Commit suas alterações com uma mensagem clara e concisa:
   ```bash
   git commit -m "Descrição clara do que foi alterado"
   ```
7. Push seu branch para seu fork:
   ```bash
   git push origin minha-contribuicao
   ```
8. Abra um pull request no [GitHub](https://github.com/seu-usuario/mineflayer-bot/pulls) e descreva suas mudanças detalhadamente.

### Padrões de Código

- Use a formatação e estilo definidos pelo ESLint.
- Mantenha o código limpo e bem documentado.
- Escreva testes para novas funcionalidades e correções de bugs.

### Comunicação

- Use os issues no GitHub para discutir bugs e novas funcionalidades.
- Seja respeitoso e considere o tempo e esforço dos outros colaboradores.

### Licença

Ao contribuir com este projeto, você concorda que suas contribuições serão licenciadas sob os mesmos termos da [Licença de Uso Pessoal ou Acadêmico](LICENSE).

## Licença

Este projeto está licenciado sob os termos da Licença de Uso Pessoal ou Acadêmico.
A venda ou distribuição deste código é estritamente proibida. Para mais detalhes, consulte a [LICENÇA](LICENSE).