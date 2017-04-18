DEV_RUNNER=reading-list-dev-runner:master
DEV_WATCHER=reading-list-dev-watcher:master
COMPOSE=docker-compose -f infra/docker/compose/development.yml

build-runner-image:
	docker build \
		-t $(DEV_RUNNER) \
		-f ./infra/docker/images/runner.dev.docker \
		.

run:
	$(COMPOSE) up -d

stop:
	$(COMPOSE) stop

log-server:
	$(COMPOSE) logs server

log-client:
	$(COMPOSE) logs client

log-db:
	$(COMPOSE) logs db
