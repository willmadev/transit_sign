import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { BusRouteController } from "./controllers/Transit.Controller";
import { env } from "./utils/env";
import { AppDataSource } from "./datasource";
import { AgencyController } from "./controllers/Agency.controller";
import bodyParser from "body-parser";

(async () => {
  await AppDataSource.initialize();

  const app = createExpressServer({
    routePrefix: "/api",
    // middlewares: [bodyParser.json()],
    controllers: [BusRouteController, AgencyController],
  });

  app.listen(env.PORT, () => {
    console.log(`[API] Transit API running on port ${env.PORT}`);
  });
})();
