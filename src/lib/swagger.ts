import { SITE } from "@/constants/env";
import { createSwaggerSpec, SwaggerOptions } from "next-swagger-doc";

const swaggerOptions: SwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Filter Recipe API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `${SITE}/api`,
      },
    ],
    components: {
      // securitySchemes: {
      //   BearerAuth: {
      //     type: "http",
      //     scheme: "bearer",
      //     bearerFormat: "JWT",
      //   },
      // },
    },
    security: [],
  },
  apiFolder: "/src/app/api",
};

export const getApiDocs = async () => {
  const spec = createSwaggerSpec(swaggerOptions);
  return spec;
};
