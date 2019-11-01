"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
var LogType;
(function (LogType) {
    LogType["ERROR"] = "error";
    LogType["INFO"] = "info";
    LogType["LOG"] = "log";
    LogType["WARNING"] = "warn";
})(LogType = exports.LogType || (exports.LogType = {}));
// Internal
const LOG_TYPES_COLOURS = {
    ERROR: chalk_1.default.bgRed(' ERROR '),
    INFO: chalk_1.default.bgBlue(' INFO '),
    LOG: 'LOG',
    WARNING: chalk_1.default.bgYellow(' WARN '),
};
function getLogLabel(value) {
    const logTypeKeys = Object.keys(LogType);
    for (const logType of logTypeKeys) {
        if (LogType[logType] === value) {
            return chalk_1.default.bold(LOG_TYPES_COLOURS[logType]);
        }
    }
    log(LogType.ERROR, 'Unknown log type given: %s. Valid log types are: %s', value, logTypeKeys);
    return chalk_1.default.bgWhiteBright('Unknown');
}
function log(logType, ...args) {
    if (process.env.COMPOSE_SIMPLE_LOG) {
        console[logType](...args);
    }
    else {
        console[logType](`${getLogLabel(logType)}`, ...args);
    }
}
exports.log = log;
function error(...args) {
    log(LogType.ERROR, ...args);
}
exports.error = error;
function info(...args) {
    log(LogType.INFO, ...args);
}
exports.info = info;
function warning(...args) {
    log(LogType.WARNING, ...args);
}
exports.warning = warning;
