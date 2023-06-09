import { Body, Controller, Get, Post, UseBefore } from "routing-controllers";
import { Agency } from "../models/Agency.model";
import { validate } from "../middlewares/validate";
import { createAgencySchema } from "../schemas/agency.schema";
import bodyParser from "body-parser";

@Controller("/agency")
export class AgencyController {
  @Get("/")
  async getAllAgencies() {
    return await Agency.find();
  }

  @Post("/", { transformRequest: false })
  @UseBefore(validate(createAgencySchema))
  @UseBefore(bodyParser.json())
  async createAgency(@Body() agency: Agency) {
    await Agency.save(agency);
    return null;
  }
}
