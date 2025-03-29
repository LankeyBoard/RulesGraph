import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { createContext } from "./context";
import { schema } from "./schema";

function main() {
  const yoga = createYoga({
    schema: schema,
    context: createContext,
    cors: {
      origin: [
        "http://localhost:3000",
        "http://192.168.4.27:3000",
        "https://fortunes-favor-alpha.netlify.app",
      ],
      credentials: true,
      allowedHeaders: ["X-Custom-Header", "authorization", "content-type"],
      methods: ["POST"],
    },
  });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();
