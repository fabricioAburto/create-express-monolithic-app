#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_builder_1 = require("./app-builder");
const index_1 = __importDefault(require("./steps/index"));
const express_1 = __importDefault(require("./steps/express"));
const getMetadata = () => __awaiter(void 0, void 0, void 0, function* () {
    let express = yield express_1.default.new().execute();
    const configs = yield index_1.default.execute(express.wantDatabase);
    return Object.assign(Object.assign({}, express), configs);
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield getMetadata();
    console.log(answers);
    app_builder_1.AppCreator.create(answers).catch(console.error);
}))();
