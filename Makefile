include ./infra/docker/Makefile

watchers-start:
	bash ./build/watchers-start.sh

watchers-stop:
	bash ./build/watchers-stop.sh

watchers-list:
	bash ./build/watchers-list.sh
