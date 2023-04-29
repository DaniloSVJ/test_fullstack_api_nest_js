Para executar api localmente você precisa antes de tudo instalar as dependencias e também instalar o docker na sua máquina.

Para instalar das dependencias deste projeto, digite "yarn" ou "npm i" no terminal da pasta desse projeto, e espere ele instalar todas as dependencias.

Você precisa também instalar agora o Banco de dados Postgres, pois o docker está configurado para trabalhar com o Banco de dados Postgres. 
Instale o postgres com um dos comando abaixo:

npm i pg
    ou
yarn add pg    

Caso você não tenha o docker instalado na sua máquina, consulte o site abaixo e veja como instalar o docker, conforme seu sistema operacional.

PARA INSTALAR NO DOCKER NO WINDOWS:
https://docs.docker.com/desktop/install/windows-install/

PARA INSTALAR DOCKER NO LINUX:
https://docs.docker.com/engine/install/ubuntu/

PARA INSTALAR DOCKER NO MAC:
https://docs.docker.com/desktop/install/mac-install/


Com todas as dependências instaladas, assim como docker; agora instale também o docker-compose. Veja o seguinte site de como instalar o docker-compose: https://docs.docker.com/compose/install/other/

Tendo instalado o docker-compose execute o comando: 'docker-compose up' e espere ele terminar de criar o componente do banco de dados. Pode demorar um pouco.
O comando 'docker-compose up' irá criar o componente do banco de dados.

Depois de ele criar o banco, agora é necessário executar as migrations, para criar as tabelas do banco de dados. 

Para criar as migrations execute o seguinte comando no terminal da pasta do projeto: npx prisma migrate dev.

Observação: Para criar as migrations, o docker precisa está ativo. Caso você tenha fechado a janela depois de criar o componente do banco de dados, então execute 'docker-compose start' no terminal da pasta do projeto. E depois é só executar novamente 'npx prisma migrate dev'

Criando as migrations a api já está pronta para ser consumida. Execute o seguinte comando para executar a aplicação: 
yarn run start:dev
  ou
npm run start:dev

Você pode consumir a api pela documentação do swagger. Para isso é só abrir o navegador com o seguinte endereço:
http://localhost:3000/api/


Para fazer os teste do projeto, basta você executar o seguinte comando no terminal da pasta do projeto: 

'yarn test' ou 'npm test'









