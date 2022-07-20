# alura_adopet :computer:

## Repositório criado para participação da 4ª edição do Alura Challenge focado em front end.

O challenge consiste em realizar 4 desafios divido em 4 semanas.

:calendar: Semana 01 - :white_check_mark:
Criar as páginas do projeto apenas usando HTML e CSS, e implementando também o design responsivo para celular.

:calendar: Semana 02 - :white_check_mark:
Adaptar a responsividade de todas as páginas para acesso em tablets e desktops.

:calendar: Semana 03 e 04 - :red_circle:
Desenvolver a parte dinâmica do projeto, persistindo e buscando dados em alguma fonte externa, ficando a critério do participante escolher entre backends reais ou fakes (como o Json Server). Ficando também como objetivo dessa semana a validação dos dados inseridos pelo usuário.

# O Caminho até agora :chart_with_upwards_trend:

## Semana 01

A proposta era criar uma página para adoção de animais tomando como base o projeto disponibilizado pela Alura no Figma - [Link do Projeto](https://www.figma.com/file/TlfkDoIu8uyjZNla1T8TpH/Challenge---Adopet?node-id=518%3A11)

Dessa vez resolvi usar React como tecnologia principal para desenvolvimento da página, com objetivo de aperfeiçoar e aprofundar os conhecimentos já adquiridos.

-   Foi criado todas as páginas de acordo com o layout do Figma;
-   Foi criado partes da página em componentes para reutilização;
-   Foi utilizado o React-Router-Dom para navegação entre as páginas do projeto;
-   Foram feitas algumas alterações nos modelos para melhor adequação, como retirar os menus de acesso das páginas anteriores a autenticação do usuário;

## Semana 02
Assim como na semana um foi seguido o layout disponibilizado no Figma com algumas pequenas mudanças que achei interessante. O projeto sugere a criação de dois breakpoints para atender tablets e celulares, no entanto além dos tamanhos sugeridos para o projeto fiz alguns ajustes com um terceiro breakpoint contemplando telas de notebooks um pouco menores, para evitar que algum dos elementos quebrem ao utilizar estas telas.

# Considerações Até o momento e idéias para desenvolvimento :exclamation:
Até o momento foi utilizado React como tecnologia principal para o projeto.
A idéia é construir um backend em Node.JS para servir a aplicação, disponibilizando as regras de negócio e acesso ao banco.
Por enquanto o objetivo é utilizar o banco MongoDB que possuí a plataforma na nuvem mongoDB Atlas que irá facilitar a persistência dos dados, sem se preocupar com deploys do banco local.
