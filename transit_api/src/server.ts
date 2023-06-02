import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { BusRouteController } from "./controllers/BusRoute.Controller";
import { env } from "./env";

const app = createExpressServer({
  routePrefix: "/api",
  controllers: [BusRouteController],
});

app.listen(env.PORT, () => {
  console.log(`[API] Transit API running on port ${env.PORT}`);
});
