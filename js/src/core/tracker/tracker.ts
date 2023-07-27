"use strict";

import { InternalTrackerInfo } from "./trackerInfo";
import TokenGenerator from "../../common/util/tokenGenerator";
import TrackerCommand from "./trackerCommand";

export default class Tracker {
  private static instance: Tracker;

  private readonly trackerInfo: InternalTrackerInfo;
  private readonly hashKey: {};

  private constructor(
    trackerInfo: InternalTrackerInfo,
    hashKey: { salt: string; secret: string }
  ) {
    this.trackerInfo = trackerInfo;
    this.hashKey = hashKey;
  }

  public static init(
    trackerInfo: InternalTrackerInfo,
    salt?: string,
    secret?: string
  ): Tracker {
    if (!Tracker.instance) {
      Tracker.factory(trackerInfo, { salt: salt, secret: secret });
    }
    return Tracker.instance;
  }

  private static factory(
    trackerInfo: InternalTrackerInfo,
    hashKey: { salt: string; secret: string }
  ) {
    Tracker.instance = new Tracker(trackerInfo, hashKey);
  }

  public command(): TrackerCommand {
    return TrackerCommand.from({
      originUUID: this.trackerInfo.uuid,
      trackerIdentifier: TokenGenerator.generate(
        this.trackerInfo,
        this.hashKey
      ),
    });
  }
}
