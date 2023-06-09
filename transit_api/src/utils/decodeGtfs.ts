// const GtfsRealtimeBindings = require("gtfs-realtime-bindings");
import GtfsRealtimeBindings from "gtfs-realtime-bindings";

export const fetchGtfsFeed = async (url: string) => {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
    new Uint8Array(buffer)
  );
  feed.entity.forEach((entity) => {
    if (entity.tripUpdate && entity.tripUpdate.trip.routeId === "44") {
      // console.log(entity.tripUpdate);
      console.log(entity.tripUpdate.stopTimeUpdate);
    }
  });
  return feed;
};
