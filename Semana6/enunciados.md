[M2S06] Ex 1 - Instalar NodeJS
Realize a instalação e configuração do NodeJS em sua máquina; recomendo instalação da versão LTS do NodeJS.

Site para download: Node.js — Run JavaScript Everywhere
https://nodejs.org/pt

[M2S06] Ex 2 - Instalar e iniciar um projeto React por meio do vite
Construir um novo projeto React por meio do Vite; deverá ser escolhido as seguintes configurações:

React e Javascript‌

Site para documentação: Vite
https://vitejs.dev/

Em seguida, o projeto deverá ser instalado e executado com sucesso.


**Etapas**
Para criar um projeto React com Vite: 
- Abrir Terminal cmd na pasta criada para o projeto
- npm create vite@latest
- na tela aparece: Project name: › vite-project
- digitar o nome do projeto
- com a seta para baixo, selecionar o react, enter
- com a seta selecionar a variant - javascript
- abre no vsc a pasta do projeto - o vite ja vai ter gerado alguns arquivos
- o run now vai passar os próximos comandos 
- cd nomeDaPasta - para entrar na pasta
- npm install
- npm run dev - para começar a rodar 
- vai trazer um endereço local host
- abrir em um navegador 


[M2S06] Ex 3 - Construir um componente de header para aplicação
Construir uma pasta ‘components’ e adicionar um novo arquivo com o nome ‘Header.jsx’.

O conteúdo dele deverá ser similar ao que está presente na imagem abaixo:

image.png

Site referência: https://www.origamid.com/projetos/bikcraft/

[M2S06] Ex 4 - Construir um componente de footer para aplicação
Utilizar a pasta ‘src/components’ e adicionar um novo arquivo com o nome ‘Footer.jsx’.

O conteúdo dele deverá ser similar ao que está presente na imagem abaixo:

image.png
Site referência: https://www.origamid.com/projetos/bikcraft/

[M2S06] Ex 5 - Conectar componentes header e footer criados em App.jsx
Importar os componentes criados e carregá-los para serem exibidos em App.jsx


[M2S06] Ex 6 - Modificar index.css para ajustar com que os elementos fiquem 100vw de largura
Modificar o index.css presente no projeto e ajustá-lo para que a tela da aplicação ocupe 100% de largura, inclusive os componentes, assim como é exibido no site de referência abaixo.
Site de referência: https://www.origamid.com/projetos/bikcraft/contato.html

[M2S06] Ex 7 - Modificar App.jsx para conter dois inputs, textarea e um button de enviar
Adicionar uma espécie de componente para contato em App.jsx. Nele, deverá conter:

1 - input type text para o nome;

2 - input type e-mail para e-mail do usuário;

3 - textarea para a mensagem;

4 - Button para enviar.‌

O button deverá acionar uma função chamada ‘handleSubmit’

[M2S06] Ex 8 - Adicionar hook de useState para capturar estado dos inputs de contato
Modifique App.jsx para conter um useState representando os inputs de contato, ou seja, formado com as propriedades:

nome;

e-mail;

mensagem;‌

Cada propriedade deverá ser conectada com os inputs e o botão de enviar deverá chamar handleSubmit e ela printar a mensagem:

console.log('Formulário a ser enviado: ', form)