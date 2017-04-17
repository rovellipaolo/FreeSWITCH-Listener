FROM ubuntu:14.04

# Prepare environment:
RUN apt-get update && \
	apt-get install -y --force-yes curl less vim && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install -y --force-yes nodejs && \
	apt-get clean

# Copy source code:
RUN mkdir /freeswitch-listener
COPY freeswitch-listener /freeswitch-listener
WORKDIR /freeswitch-listener

# Install dependencies, run checkstyle and tests:
RUN npm install && \
	npm run lint

ENTRYPOINT ["node","app.js"]