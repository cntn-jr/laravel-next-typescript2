up:
	docker-compose up -d
	docker-compose exec front yarn dev

init:
	docker-compose up --build -d
	docker compose exec api composer create-project --prefer-dist laravel/laravel . "10.*"
	docker-compose exec api composer install
	docker-compose exec api cp .env.example .env
	docker-compose exec api php artisan key:generate
	docker-compose exec api php artisan migrate:refresh --seed
	docker-compose exec front yarn create next-app --typescript .
	docker-compose exec front yarn init @eslint/config
	docker-compose exec front yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
	docker-compose exec front yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
	touch ./front/.prettierrc.json
	touch ./front/.prettierignore
	docker-compose exec front yarn add @mui/material @emotion/react @emotion/styled
	docker-compose exec front yarn add react-query
	docker-compose exec front yarn add axios
	docker-compose exec front yarn add @reduxjs/toolkit react-redux
	docker-compose down

down:
	docker-compose down

dbfresh:
	docker-compose exec api php artisan migrate:fresh --seed

mvapi:
	docker-compose exec api sh

mvfront:
	docker-compose exec front sh

mvweb:
	docker-compose exec web sh

mvdb:
	docker-compose exec db sh

f:
	docker-compose exec front yarn prettier --write .