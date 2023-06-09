import { Controller, Get, Param, UseBefore } from "routing-controllers";
import { validate } from "../middlewares/validate";
import { BusAgencySchema, getAllRoutesSchema } from "../schemas/transit.schema";
import { z } from "zod";
import { fetchGtfsFeed } from "../utils/decodeGtfs";

@Controller("/:agency")
export class BusRouteController {
  @Get("/route")
  @UseBefore(validate(getAllRoutesSchema))
  getAllRoutes(@Param("agency") agency: z.TypeOf<typeof BusAgencySchema>) {
    return {
      agency,
      routes: [44, 110],
    };
  }

  @Get("/route/:route")
  async getRoute(
    @Param("agency") agency: z.TypeOf<typeof BusAgencySchema>,
    @Param("route") route: string
  ) {
    const feed = await fetchGtfsFeed(
      "https://www.miapp.ca/GTFS_RT/TripUpdate/TripUpdates.pb"
    );
    return {
      agency,
      route: feed.entity.filter(
        (entity) => entity.tripUpdate?.trip.routeId == route
      ),
    };
  }
}
