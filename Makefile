watch-start:
	bash ./build/watch-start.sh

watch-stop:
	bash ./build/watch-stop.sh

watch-list:
	bash ./build/watch-list.sh

run:watch-start
	bash ./build/run.sh

stop:watch-stop
	bash ./build/stop.sh
