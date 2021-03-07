"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var EventName_1 = __importDefault(require("./lib/EventName"));
var MessageResponse_1 = __importDefault(require("./lib/MessageResponse"));
var factories_1 = require("./commands/factories");
// eslint-disable-next-line no-process-env
var PORT = process.env.PORT || '25565';
var server = new ws_1.default.Server({ port: parseInt(PORT, 10) });
var subscribePlayerMessage = factories_1.createSubscribeCommand(EventName_1.default.PlayerMessage);
function payload(command) {
    return JSON.stringify(command);
}
server.on('connection', function (websocket) {
    websocket.send(payload(subscribePlayerMessage));
    websocket.on('message', function (data) {
        var message = new MessageResponse_1.default(data);
        if (message.eventName() === EventName_1.default.PlayerMessage) {
            var returnCommand = factories_1.createEchoCommand(message.toString());
            websocket.send(payload(returnCommand));
        }
    });
});
