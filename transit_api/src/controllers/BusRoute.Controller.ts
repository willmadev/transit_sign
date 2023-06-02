import { Controller, Get, Param, UseBefore } from "routing-controllers";
import { validate } from "../middlewares/validate";
import { BusCompanySchema, getAllRoutesSchema } from "../schemas/bus.schema";
import { z } from "zod";

type BusCompany = "miway" | "brampton";

@Controller("/route/:company")
export class BusRouteController {
  @Get("/")
  @UseBefore(validate(getAllRoutesSchema))
  getAllRoutes(@Param("company") company: z.TypeOf<typeof BusCompanySchema>) {
    return {
      company: company,
      routes: [44, 110],
    };
  }
}
