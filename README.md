*Minecraft-wss* is an implementation of the unpublished Minecraft Bedrock Edition WebSocket protocol in nodejs. This is just a proof of concept, and not all commands are supported.

 So far, it's verified to work with Windows 10 and Pocket Edition (iOS).

## Getting started

```
npm install
npm run start:dev # development mode
npm run start     # production
```
This will launch the WebSocket server on port 25565. You can connect to it by running `/connect ws://localhost:25565` command.

The built in echo server takes the input from the chat prompt and sends it back to the WebSocket.

For example, the agent mob is a feature of the Educational Edition and hidden in the bedrock edition. But it can be spawned and controlled using commands over the WebSocket. A demo version of the WebSocket server is available at http://agent.evaan.me, and you can connect to it using `/connect` or `/wsserver` command.

![2021-03-09 21-35-26 2021-03-09 21_48_11](https://user-images.githubusercontent.com/43969/110542664-40714100-8121-11eb-8190-ad8c3c703f88.gif)

**Note:** You must enable cheats to execute the `/connect` command. For supported WebSocket commands, refer to the [code connections API](https://education.minecraft.net/wp-content/uploads/Code_Connection_API.pdf) doc. 
