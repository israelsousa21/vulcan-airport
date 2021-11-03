# DOJO Vulcão Aeroporto

![Screenshot](https://israelsousa.com.br/extra/images/screenshot-dojo-vulcan.png)

## Desafio
_Um vulcão acaba de entrar em erupção, provocando uma nuvem de cinzas que se alastra impedindo a circulação aérea. O governo está muito preocupado e deseja saber quando uma nuvem de cinzas irá atingir todos os aeroportos do país._

_Está disponível um mapa detalhando a situação atual. O mapa é retangular, dividido em pequenos quadrados. Neste mapa existem três tipos de quadrados: nuvem (indicando que esta região do mapa já está coberto por nuvens), aeroportos (indicando a localização de um aeroporto) e todas as outras (indicando locais onde a nuvem ainda não chegou)._

_A cada dia, a nuvem expande-se um quadrado na horizontal e um quadrado na vertical. Ou seja, ao fim de cada dia, todos os quadrados adjacentes (vertical ou horizontalmente) a uma nuvem, também passam a conter nuvens._

### Exemplo

**Para preparar os planos de contingência, o governo necessita saber:**

 - Quantos dias demorará para ao menos um aeroporto ficar coberto pelas nuvens?
 - Daqui quantos dias todos os aeroportos estarão cobertos pelas nuvens?

_Dado um quadriculado mínimo de 10 linhas e 10 colunas, além da indicação inicial das nuvens e dos aeroportos, desenvolva uma programa que informe o número de dias até um primeiro aeroporto ficar debaixo da nuvem de cinzas e o número de dias até que todos os aeroportos ficarem cobertos pelas cinzas._

### Premissa
- FrontEnd deve ser desenvolvido em React JS (poderá ser utilizado o Next.JS).
- Pode-se utilizar styles guides e design system existentes (bootstrap, antd...).
- Os dados do back-end pode ser simulado vindo de um arquivo mock .json ou da API caso utilize Next.JS
- Os calculos devem ser realizados em um arquivo de serviço ou na camada de negócios na API caso utilize Next.JS
- O cliente deve enviar os dados iniciais via frontend, sendo quantidade de aeroportos mínimo de 3, quantidade de nuvens mínimo de 4 nuvens, tamanho do terreno tendo no mínimo uma área de 10 x 10 linhas.
- Como resultado ele deve receber um gráfico ou grid com o resultado do calculo.
- A grid deve sempre iniciar com o numero de nuvens e aeroportos em posições aleatórias, lembrando que um aeroporto não pode iniciar com uma nuvem sobre ele.
- Será aceito como correto os projetos que tenham as duas perguntas respondidas com base no calculo e na visualização na grid: 
    > Quantos dias demorará para ao menos um aeroporto ficar coberto pelas nuvens?
    > Daqui quantos dias todos os aeroportos estarão cobertos pelas nuvens?

## Desafio
**Para funcionar, siga as instruções abaixo:**

 - Primeiro execute os comandos:

```bash
npm run dev
# or
yarn dev
```

Abra um dos links em seu navegador [http://localhost:3000](http://localhost:3000)

## Versão online
Se preferir pode ver uma versão live no link abaixo:

[Versão Online](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). 
