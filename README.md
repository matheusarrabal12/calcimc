# Calculadora de IMC

    O projeto utiliza aplicação react native para uma calculadora IMC


##  Objetivo do Projeto
O objetivo é criar uma calculadora IMC usando react native de forma pratica para calcular e informar a altura e peso ideal.

##  Funcionalidades

1. **Cálculo do IMC**:
   - O usuário insere o peso (em kg) e a altura (em metros).
   - O aplicativo calcula o IMC com a fórmula:  
     `IMC = peso / (altura * altura)'.

2. **Classificação do IMC**:
   - O aplicativo exibe a classificação do IMC com base na tabela oficial:
     - **Abaixo de 18.5**: Abaixo do peso.
     - **Entre 18.5 e 24.9**: Peso normal.
     - **Entre 25 e 29.9**: Sobrepeso.
     - **Entre 30 e 34.9**: Obesidade grau 1.
     - **Entre 35 e 39.9**: Obesidade grau 2.
     - **Maior ou igual a 40**: Obesidade grau 3 (obesidade mórbida).

3. **Cálculo do Peso Ideal**:
   - O aplicativo calcula e exibe o peso ideal mínimo e máximo com base na altura informada:
     - **Peso mínimo ideal**: `18.5 * (altura * altura)`.
     - **Peso máximo ideal**: `24.9 * (altura * altura)`.

---

##  Como Baixar ou Clonar o Projeto

### Para poder acessar 

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

Além disso, é recomendável ter um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/).

### Passo a Passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/calcimc.git 

2. **Acesse o diretório do projeto** 
    cd calcimc 

3. **instale o npm** 
    npm install 

4. **inicio do projeto** 
    npx expo start 
