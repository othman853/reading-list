DEV_RUNNER=reading-list-dev-runner:master
DEV_WATCHER=reading-list-dev-watcher:master
COMPOSE=docker-compose -f infra/docker/compose/development.yml

build-runner-image:
	docker build \
		-t $(DEV_RUNNER) \
		-f ./infra/docker/images/runner.dev.docker \
		.

build-watcher-image:
	docker build \
		-t $(DEV_WATCHER) \
		-f ./infra/docker/images/watcher.dev.docker \
		.

log-server:
	$(COMPOSE) logs -f -t server

log-client:
	$(COMPOSE) logs -f -t client

log-db:
	$(COMPOSE) logs db

log-webpack-client:
	$(COMPOSE) logs -f -t webpack-client-watch

log-babel-client:
	$(COMPOSE) logs -f -t babel-client-watch

log-babel-server:
	$(COMPOSE) logs -f -t babel-server-watch
