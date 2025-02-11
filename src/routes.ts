import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutricitionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Eduardo",\n  "sexo": "Masculino",\n  "idade": 19,\n  "altura": 1.80,\n  "peso": 78,\n  "objetivo": "perder peso",\n  "refeicoes": [\n    {\n      "horario": "7:00",\n      "nome": "Cafe da manha",\n      "alimentos": [\n        "1 copo de leite desnatado",\n        "1 fatia de pao integral",\n        "1 colher de sopa de geleia diet",\n        "1 ovo cozido"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da manha",\n      "alimentos": [\n        "1 fruta (maca, pera ou laranja)"\n      ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoco",\n      "alimentos": [\n        "150g de carne grelhada (frango ou peixe)",\n        "1 concha de arroz integral",\n        "1 concha de feijao",\n        "Salada a vontade (alface, tomate, pepino)"\n      ]\n    },\n    {\n      "horario": "16:00",\n      "nome": "Lanche da tarde",\n      "alimentos": [\n        "1 iogurte desnatado",\n        "um punhado de castanhas"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de salada de folhas verdes",\n        "100g de peixe grelhado ou frango grelhado",\n        "1 colher de sopa de azeite"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Proteina do soro do leite (whey protein)",\n    "Creatina (opcional, para auxiliar na atividade fisica)"\n  ]\n}\n```';

    try {
      let jsonString = responseText
        .replace(/```\w*n/g, "")
        .replace(/\n```/g, "")
        .trim();

      let jsonObject = JSON.parse(jsonString);

      return reply.send({ data: jsonObject });
    } catch (err) {
      console.log(err);
    }
    reply.send({ ok: true });
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    }
  );
}
