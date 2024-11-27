// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Filter Recipe", // API 이름
    version: "1.0.0", // API 버전
    description: "API for Filter Recipe", // API 설명
  },
  servers: [
    {
      url: "http://localhost:3000/api", // 서버 URL (개발용)
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/app/api/**/*.ts"], // API 파일 경로 (Next.js 기준)
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
