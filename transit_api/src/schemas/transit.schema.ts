import { z } from "zod";

export const BusAgencySchema = z.union(
  [z.literal("miway"), z.literal("brampton")],
  {
    required_error: "Bus company required",
    invalid_type_error: "Invalid company",
  }
);

export const getAllRoutesSchema = z.object({
  params: z.object({ company: BusAgencySchema }),
});
