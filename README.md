# Projeto de testes idblog - Cypress
O projeto inclui testes automatizados para verificar a navegação na página principal e o comportamento da funcionalidade de assinatura da Newsletter.

## Pré-requisitos
- Este projeto utiliza a versão v20.10.0 do Node.js
- Caso não tenha o Node.js, baixe-o na mesma versão do projeto ou superior
- Cypress 13.6.1
- Cypress-iframe 1.0.1
- Cypres Plugin Steps 1.1.1
- Cypress Real Events 1.11.0

## Rodando locamente

Clone o projeto para uma pasta da sua escolha

```bash
git clone https://github.com/JAIMEjun10r/idblog---Cypress.git
```

Entre no diretório do projeto

```bash
  cd seu_diretorio
```

Para instalar as dependências, digite:
```bash
  npm install
```

## Rodando os testes

Primeira forma:

```bash
  npx cypress open
```

## Funcionalidade: Navegação na Página Principal

### CT01 - Verificar links no header da página inicial
- **Dado:** o usuário acessa a página inicial do blog
- **Quando:** visualiza o header da página
- **Então:** deve ver os itens no header como links

### CT02 - Navegar para a página Compliance
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em Compliance no header
- **Então:** deve ser redirecionado para a página Compliance

### CT03 - Navegar para a página KYC
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em KYC no header
- **Então:** deve ser redirecionado para a página KYC

### CT04 - Navegar para a página Mercado Financeiro
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em Mercado Financeiro no header
- **Então:** deve ser redirecionado para a página Mercado Financeiro

### CT05 - Navegar para a página Varejo
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em Mercado Varejo no header
- **Então:** deve ser redirecionado para a página Varejo

### CT06 - Navegar para a página Transporte
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em Mercado Transporte no header
- **Então:** deve ser redirecionado para a página Transporte

### CT07 - Navegar para a página Identidade
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em Mercado Identidade no header
- **Então:** deve ser redirecionado para a página Identidade

### CT08 - Navegar para a página Onboarding
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em Onboarding no header
- **Então:** deve ser redirecionado para a página Onboarding

### CT09 - Navegar para a página Privacidade
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em Privacidade no header
- **Então:** deve ser redirecionado para a página Privacidade

### CT10 - Navegar para a página Outros
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em Outros
- **Então:** deve ser redirecionado para a página Outros

### CT11 - Verificar links no submenu "Outros"
- **Dado:** o usuário está na página inicial do blog
- **Quando:** posiciona o mouse sobre o link "Outros" no header
- **Então:** deve ver os itens no submenu "Outros" como links

### CT12 - Navegar para uma página e voltar
- **Dado:** o usuário está na página inicial do blog
- **Quando:** clica em um link de navegação para outra página
- **E:** verifica que a nova página está carregada corretamente
- **E:** clica no botão de voltar do navegador
- **Então:** deve retornar à página inicial do blog

## Funcionalidade: Newsletter

### CT13 - Assinar Newsletter com E-mail válido
- **Dado:** o usuário está na página inicial do blog
- **Quando:** digita um e-mail válido no campo de newsletter
- **E:** clica no botão de assinatura
- **Então:** o sistema deve exibir uma mensagem de confirmação

### CT14 - Assinar Newsletter com E-mail Inválido
- **Dado:** o usuário está na página inicial do blog
- **Quando:** digita um e-mail inválido no campo de newsletter
- **E:** o usuário clica no botão de assinatura
- **Então:** o sistema deve exibir uma mensagem de erro indicando que o e-mail é inválido


## Contribuição
Contribuições são bem-vindas! Se você encontrar problemas, bugs ou melhorias, sinta-se à vontade para criar uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a MIT License.
