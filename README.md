# API (frontend &amp; backend) feita com React, Redux, Saga, Nodejs


## :arrow_heading_down: Sobre o projeto:

Site desenvolvido para armazenar cadastro de alunos para um usuário. Na aplicação é possível logar e deslogar um usuário
registrar um usuário e registrar um aluno, além de poder ver a lista de alunos registrados, editar ou excluir os alunos.
Confira o site no ar aqui: https://apiescola.netlify.app


## :eight_pointed_black_star: Features:

A **APIREST** foi desenvolvida com **NodeJs, Sequelize, Google Cloud Platform, MYSQL(MariaDB), Docker, Nginx.**

* #### NodeJS:
A framework do javascript foi utilizada para criar a estrutura **MVC (Models, Controller, Views + Middlewares)** da **APIREST**, gerenciar pacotes **(Express, Sequelize, CORS: para bloquear acesso
a api, Helmet, Multer)** e configurar conexão com banco de dados e com o servidor.
* #### Sequelize:
A biblioteca foi utilizada para criar migrações, e as tabelas no banco de dados MYSQL.
* #### Google Cloud Platform:
Foi utilizada para criar um o servidor (Com sistema Ubuntu 18.04) e o DNS, para armazenar a APIREST, DOCKER, NGINX, PM2: utilizada para criar um processo da api ou seja redireciona
a porta para a aplicação funcionar.
* #### MYSQL(MariaDB):
Onde fica armazenado o banco de dados, foi utilizado o MYSQL Workbrench para gerenciar criar a base de dados e gerenciar sua estrutura.
* #### Docker:
O Docker foi utilizado para criar container onde foi instalado o banco de dados MariaDB dentro do servidor, é utilizado somente dentro do servidor para conectar com o banco de dados.
* #### Nginx:
O nginx foi utilizado para fazer o deploy da apirest, foi configurado dentro do servidor Linux. Nele foi possível fazer com que a aplicação rodasse com um dominio, que
está rediricionando para o ip do servidor.


* #### Veja o repositorio do backend [aqui](https://github.com/thcrfz/cadastroAlunos-api/tree/master/apirest/src).



O **FRONTEND** da api foi densenvolvido com **ReactJS, Redux, Saga, Material UI.**

* #### ReactJS:
Foi utilizado para desenvolver a estrutura do frontend, páginas da aplicação, rotas, estilos, CSS, JSX, Axios: onde é feita a conexão com a apirest, React Hooks para manipular os dados, componentes, modulos e bibliotecas.
* #### Redux:
Foi utilizado para manipular o estados da aplicação, quando um usuário loga com sua conta para que seu estado não se perca é utilizado reducers, assim quando há um
registro ou login o redux gerencia para manter o usuário com seu estado atual até o mesmo realizar alguma ação, caso haver alguma ação não permitida o redux informa ao usuário
sobre qual erro e o que ele deve fazer para realizar a ação corretamente.
* #### Saga:
O saga manipula os dados que vem do backend, gerenciar o login e registrar usuário, é utilizado funções geradoras para que o axios possa pegar os dados do backend, para que o react hooks possa manipular e disponibilizar
na páginas da aplicação.
* #### MaterialUI:
Utilixado no JSX, é uma UI do google, onde foi feito todos os componentes UI, botões, header, forms, divs.

* #### Veja o repositorio do frontend [aqui](https://github.com/thcrfz/cadastroAlunos-api/tree/master/api-react/src).



## :computer: User Interface UI:

Confira o site e sua UI aqui: https://apiescola.netlify.app


Crie uma conta e depois faça o Login


## :heavy_check_mark: Conclusões:

A aplicação reliza funções de registro de alunos, criando uma lista de alunos com seus respectivos dados,
pode se esperar que as todas as funcionalidades de uma api, como registrar, listar, editar, logar e excluir, estejam funcionando 
perfeitamente, e todas ações incorretas serão tratadas e repostada ao usuário para que ele possa utilizar a aplicação corretamente, e a aplicação ainda pode ter 
futuros updates, uma forma de dar todas as funcionalidades esperadas pelo o usuário.
