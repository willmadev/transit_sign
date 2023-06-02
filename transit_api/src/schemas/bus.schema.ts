import { z } from "zod";

export const BusCompanySchema = z.union([
  z.literal("miway"),
  z.literal("brampton"),
]);

export const getAllRoutesSchema = z.object({
  params: z.object({ company: BusCompanySchema }),
});
