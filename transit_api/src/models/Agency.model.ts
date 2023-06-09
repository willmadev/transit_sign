import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { AppDataSource } from "../datasource";

@Entity()
export class Agency extends BaseEntity {
  @PrimaryColumn({ name: "agency_id" })
  agency_id: string;

  @Column({ name: "scheduled_feed" })
  scheduled_feed: string;

  @Column({ name: "realtime_trip_updates" })
  realtime_trip_updates: string;

  @Column({ name: "realtime_service_alerts" })
  realtime_service_alerts: string;

  @Column({ name: "realtime_vehicle_positions" })
  realtime_vehicle_positions: string;
}
