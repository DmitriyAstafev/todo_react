# todo_react

## Простой todo список на react

Используемые технологии:

Backend - Node JS, MySQL, Express, Sequelize

Frontend - React, Bootstrap, Axios

## Инструкция по разворачиванию приложения.

Backend:
1. Запустить терминал в папке server
2. Выполнить команду npm i
3. Создать файл .env из .env.example, вместо db_user, db_password, db_name подставить свои значения
4. Для создания базы данных выполнить команду npx sequelize db:create
5. Для накатывания миграций выполнить команду npx sequelize db:migrate
6. Запустить сервер командой npm start

Frontend:
1. Запустить терминал в папке client
2. Выполнить команду npm i
3. Выполнить команду npm start
