'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSupported = isSupported;
exports.startReception = startReception;
exports.stopReception = stopReception;
exports.requestPermission = requestPermission;

var _exec = require('cordova/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isSupported(successCallback, failureCallback) {
  return (0, _exec2.default)(successCallback, failureCallback, 'SmsReceiverPlugin', 'hasSMSPossibility', []);
}

function startReception(successCallback, failureCallback) {
  return (0, _exec2.default)(successCallback, failureCallback, 'SmsReceiverPlugin', 'startReception', []);
}

function stopReception(successCallback, failureCallback) {
  return (0, _exec2.default)(successCallback, failureCallback, 'SmsReceiverPlugin', 'stopReception', []);
}

function requestPermission(successCallback, errorCallback) {
  return (0, _exec2.default)(successCallback, errorCallback, 'SmsReceiverPlugin', 'requestPermission', []);
}