import { z } from "zod";

export const createAgencySchema = z.object({
  body: z.object({
    agency_id: z.string(),
    scheduled_feed: z.string().url(),
    realtime_trip_updates: z.string().url(),
    realtime_service_alerts: z.string().url(),
    realtime_vehicle_positions: z.string().url(),
  }),
});
