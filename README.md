# Teste Frontend
#### Em "Tarefas" foram colocados alguns comentários a baixo da tarefa proposta.

Objetivo: Criar uma aplicação web de catálogo de automóveis que exiba uma lista de carros com
informações básicas.


Requisitos:
- Utilize React / Next.js para criar a estrutura do projeto.
- Utilize TypeScript para garantir a tipagem correta dos dados e componentes.
- A aplicação deve ser responsivo, ou seja, adaptar-se a diferentes tamanhos de tela.
- Utilize Git para versionar seu código.
- Utilize npm para gerenciar as dependências do projeto.
- Siga boas práticas de reutilização de código, componentes e clean code.
- Leve em consideração noções de design para tornar a interface da aplicação atraente e intuitiva.
- A aplicação deve ter um desempenho otimizado, levando em conta carregamento rápido e
utilização eficiente dos recursos.

### Tarefas:
✅ Crie um projeto React / Next.js </br>
✅Implemente uma página inicial que exiba uma lista de carros fictícios </br>
✅ Cada carro deve ter uma imagem, marca, modelo, ano e preço.
<p style="font-style: italic;">Comentário: Decidi deixar todas as imagens iguais para não desperdiçar tempo. Isso não interfere em absolutamente nada na lógica da aplicação. Mesmo que seja uma imagem igual, ainda sim está sendo feito uma chamada na api.</p>
✅ Use dados fictícios ou mockados para preencher a lista de carros.

<p style="font-style: italic;">Comentário: Estou utilizando a biblioteca Miragejs para mockar os dados.</p>
</br>
✅ Crie um componente reutilizável para exibir as informações de cada carro na lista.
</br>
✅ Torne a página responsiva, garantindo que os elementos se adaptem a diferentes tamanhos de tela.
</br>
✅ Adicione uma funcionalidade simples de filtro na lista de carros por marca, modelo ou ano.
<p style="font-style: italic;">Comentário: "audi" | "a4" | "2023"; "gol" | "g1" | "2022"; "volvo" | "cts" | "2021". Utilize essas opções para ver o funcionamento do componente de busca.
</p>
</br>
✅ O filtro pode ser um campo de pesquisa ou uma seleção de opções.
</br>
✅ Implemente a navegação para exibir os detalhes de um carro ao clicar em um item da lista.
</br>
✅ A página de detalhes deve exibir informações adicionais sobre o carro, como descrição,
características, etc.
</br>
✅ Implemente a funcionalidade de adicionar um carro aos favoritos
</br>
✅ Adicione um ícone de favorito em cada item da lista e na página de detalhes.
<p style="font-style: italic;">Comentário: Também é possível favoritar e desfavoritar no componente de busca.
</p>

✅ Os carros marcados como favoritos devem ser armazenados localmente e persistidos entre sessões.
</br>
Realize testes básicos para garantir o bom funcionamento da aplicação


## ⚙️ Iniciando o projeto
Primeiramente, instale todas as dependências:

```bash
npm install
# or
yarn
```

Depois, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
