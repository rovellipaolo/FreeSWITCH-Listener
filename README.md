FreeSWITCH Listener
===================

Demo FreeSWITCH-based application which uses the Event Socket Library in order to listen to a series of VoIP call events and eventually execute commands.


Configuration:
==============
You need to provide to the demo application your specific FreeSWITCH host and credentials.

You can do this by either:
1. Providing them to the Docker image via environment variable (see docker-compose.yaml):
```
services:
  freeswitch-listener:
    ...
    environment:
      - FREESWITCH_IP=[YourFreeswitchIpAddressHere]
      - FREESWITCH_PORT=[YourFreeswitchPortHere]
      - FREESWITCH_PASSWORD=[YourPasswordHere]
```

1. Changing them directly in the config/config.js file:
```
const configParams = {
	freeswitch: {
		ip: [YourFreeswitchIpAddressHere],
		port: [YourFreeswitchPortHere],
		password: [YourPasswordHere],
	},
};
```


Use:
====

To use the demo application, you just need to launch the command:

```
$ docker-compose build
$ docker-compose up
```
