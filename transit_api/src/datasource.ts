import { DataSource } from "typeorm";
import { Agency } from "./models/Agency.model";
import { Route } from "./models/Route.model";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "root",
  password: "password",
  database: "db",
  entities: [Agency, Route],
  synchronize: true,
  logging: false,
});
