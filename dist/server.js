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
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./src/routes");
const app = (0, fastify_1.default)({ logger: true });
dotenv_1.default.config();
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    app.register(cors_1.default);
    app.register(routes_1.routes);
    try {
        yield app.listen({ port: 3333, host: "0.0.0.0" });
        console.log(`Servidor rodando no http://localhost:3333`);
    }
    catch (err) {
        console.log(err);
    }
});
start();
