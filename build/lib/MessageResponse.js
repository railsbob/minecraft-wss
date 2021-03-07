"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageResponse = /** @class */ (function () {
    function MessageResponse(data) {
        this.jsonData = JSON.parse(data.toString());
    }
    MessageResponse.prototype.eventName = function () {
        return this.jsonData.body.eventName;
    };
    MessageResponse.prototype.toString = function () {
        var message = this.jsonData.body.properties.Message;
        return message.replace('[!§r] ', '');
    };
    return MessageResponse;
}());
exports.default = MessageResponse;
