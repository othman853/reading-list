include ./infra/docker/Makefile

clean:
	rm -rf ./dist/*

build:clean
	./node_modules/.bin/babel ./app -d ./dist/app --ignore ./app/client/components
	./node_modules/.bin/webpack --config ./webpack.client.config.js
	cp ./app/client/static/index.jade ./dist/app/client/static/index.jade

run:build
	docker-compose -f infra/docker/compose/development.yml up -d
	docker-compose -f infra/docker/compose/watch.yml up -d

stop:
	docker-compose -f infra/docker/compose/development.yml stop
	docker-compose -f infra/docker/compose/watch.yml stop
