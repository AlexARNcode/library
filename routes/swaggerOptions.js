export const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Library API",
        version: "1.0.0",
        description: "An API to manage your books",
        contact: {
          name: "AlexARNcode",
          url: "https://github.com/AlexARNcode/library",
        },
      },
  
      servers: [
        {
          url: "http://localhost:8080",
          description: "Library API documentation",
        },
      ],
    },
    apis: ["./routes/swagger.js"],
  };