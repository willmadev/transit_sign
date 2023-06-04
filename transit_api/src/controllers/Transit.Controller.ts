import { Controller, Get, Param, UseBefore } from "routing-controllers";
import { validate } from "../middlewares/validate";
import {
  BusCompanySchema,
  getAllRoutesSchema,
} from "../schemas/transit.schema";
import { z } from "zod";

@Controller("/:company")
export class BusRouteController {
  @Get("/route")
  @UseBefore(validate(getAllRoutesSchema))
  getAllRoutes(@Param("company") company: z.TypeOf<typeof BusCompanySchema>) {
    return {
      company: company,
      routes: [44, 110],
    };
  }

  @Get("/route/:route")
  getRoute(
    @Param("company") company: z.TypeOf<typeof BusCompanySchema>,
    @Param("route") route: string
  ) {
    return { company, route: {} };
  }
}
