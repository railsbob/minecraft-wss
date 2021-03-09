# minecraft-wss

An implementation of the Minecraft Bedrock Edition websocket protocol in nodejs. So far, we have verified it to work with Minecraft Windows 10 and Pocket Edition (iOS).

## Getting started

```
npm install
npm run start:dev # development mode
npm run start     # production
```
This will launch the websocket server on port 25565. You can connect to it by running `/connect ws://localhost:25565` command.

The built in echo server takes the input from the chat prompt and sends it back to the websocket.

For example: The agent mob which is exclusive to the Educational Edition, but present in bedrock can be spawned and controlled using commands over the websocket.

![2021-03-09 21-35-26 2021-03-09 21_48_11](https://user-images.githubusercontent.com/43969/110542664-40714100-8121-11eb-8190-ad8c3c703f88.gif)

**Note:** Cheats must be enabled in order to be able to execute the `/connect` command. 
