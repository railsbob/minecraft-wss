"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEchoCommand = exports.createSubscribeCommand = void 0;
var uuid_1 = require("uuid");
var MessagePurpose_1 = __importDefault(require("../lib/MessagePurpose"));
function createSubscribeCommand(eventName) {
    return {
        header: {
            messagePurpose: MessagePurpose_1.default.Subscribe,
            messageType: MessagePurpose_1.default.Command,
            requestId: uuid_1.v4(),
            version: 1,
        },
        body: {
            eventName: eventName,
        },
    };
}
exports.createSubscribeCommand = createSubscribeCommand;
function createEchoCommand(command) {
    return {
        header: {
            requestId: uuid_1.v4(),
            messagePurpose: MessagePurpose_1.default.Command,
            version: 1,
            messageType: MessagePurpose_1.default.Command,
        },
        body: {
            commandLine: command,
        },
    };
}
exports.createEchoCommand = createEchoCommand;
