FreeSWITCH Listener
===================

Demo FreeSWITCH-based (Node.js) application which uses the Event Socket Library (ESL) in order to listen to a series of VoIP call events and eventually execute commands.

My post for "Making Tuenti" blog: https://medium.com/makingtuenti/developing-applications-for-freeswitch-fccbe75ada81

## Configuration:
You need to provide to the demo application your specific FreeSWITCH host and credentials.

You can do this by either:
1. Providing them to the Docker image via environment variables (see `docker-compose.yaml` file):
```
services:
  freeswitch-listener:
    ...
    environment:
      - FREESWITCH_IP=[YourFreeswitchIpAddressHere]
      - FREESWITCH_PORT=[YourFreeswitchPortHere]
      - FREESWITCH_PASSWORD=[YourFreeswitchPasswordHere]
```

2. Changing them directly in the `freeswitch-listener/config/config.js` file:
```
const configParams = {
	freeswitch: {
		ip: [YourFreeswitchIpAddressHere],
		port: [YourFreeswitchPortHere],
		password: [YourFreeswitchPasswordHere],
	},
};
```


## Run:

To run the demo application, you just need to launch the commands:

```
$ docker-compose build
$ docker-compose up
```
