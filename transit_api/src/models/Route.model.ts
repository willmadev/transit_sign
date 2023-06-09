import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Agency } from "./Agency.model";
import { AppDataSource } from "../datasource";

@Entity()
export class Route extends BaseEntity {
  @PrimaryColumn({ name: "route_id" })
  routeId: string;

  @ManyToOne((type) => Agency)
  agencyId: Agency;

  @Column({ name: "route_short_name" })
  shortName: string;

  @Column({ name: "route_long_name" })
  longName: string;

  @Column({ name: "route_desc" })
  desc: string;

  @Column({ name: "route_type" })
  type: number;

  @Column({ name: "route_color" })
  color: string;

  @Column({ name: "route_text_color" })
  textColor: string;
}
