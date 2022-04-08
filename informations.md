dependencias:
 - ts-node-dev = live reload do typescript
 - @types/node tipagem do node


 arquivos:
  - tsconfig.json = configurações e instruções do typescript

scripts:
 - "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts" = vai ficar inspecionando, somente transpilação e ignorar ouvinte na pasta node_modules e "src/server.ts" é o arquivo principal da aplicação





 Estutura:
 -config: configuração de bibliotecas externas (auth, email etc)
 -modules: abrangem as áreas de conhecimento da aplicação, diretamente relacionados com as regras de negócios da aplicação. (customers, producsts, orders e users)
 -shared: módulos de uso geral compartiljhado com mais de um módulo da aplicação
 -services: estarão dentro de cada módulo da aplicação e serão responsáveis por toas as regras que a aplicação precisa atender, como por exemplo:
    -senha com criptografia
    -não pode haver mais de um produto com o mesmo nme;
    -usuários devem ter emails diferentes
    -.......
