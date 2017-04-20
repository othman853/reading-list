DEV_RUNNER=reading-list-dev-runner
DEV_WATCHER=reading-list-dev-watcher
COMPOSE_RUNNER=docker-compose -f infra/docker/compose/development.yml
COMPOSE_WATCHER=docker-compose -f infra/docker/compose/watch.yml

registry-catalog:
	curl $(REGISTRY_HOST)/v2/_catalog

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

clean-runners:
	$(COMPOSE_RUNNER) rm

list-runners:
	$(COMPOSE_RUNNER) ps

clean-watchers:
	$(COMPOSE_WATCHER) rm

list-watchers:
	$(COMPOSE_WATCHER) ps

log-server:
	$(COMPOSE_RUNNER) logs -f -t server

log-client:
	$(COMPOSE_RUNNER) logs -f -t client

log-db:
	$(COMPOSE_RUNNER) logs db

log-webpack:
	$(COMPOSE_WATCHER) logs -f -t reading-list-webpack-watch

log-babel:
	$(COMPOSE_WATCHER) logs -f -t reading-list-babel-watch
