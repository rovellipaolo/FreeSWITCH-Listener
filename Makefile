THIS_FILE := $(lastword $(MAKEFILE_LIST))

bash:
	@docker run -i --net=host --entrypoint=bash -t freeswitch-listener

checkstyle:
	@docker run -i --entrypoint=npm -t freeswitch-listener run lint

checkstyle-local:
	cd freeswitch-listener/; npm run lint; cd ..

test:
	@docker run -i --entrypoint=npm -t freeswitch-listener test

test-local:
	cd freeswitch-listener/; npm test; cd ..

build-image:
	@docker build -t freeswitch-listener .
