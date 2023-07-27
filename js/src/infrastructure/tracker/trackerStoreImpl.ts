"use strict";

import TrackerStore from "../../core/tracker/trackerStore";
import TrackerCommand from "../../core/tracker/trackerCommand";
import TrackerLocalStroageRepository from "./trackerLocalStroageRepository";

/** @internal */
export default class TrackerStoreImpl implements TrackerStore {
  private readonly trackerRepository : TrackerLocalStroageRepository;

  constructor(command : TrackerCommand) {
    this.trackerRepository = TrackerLocalStroageRepository.create(command);
  }
  
  store(): void {
    this.trackerRepository.saveIdentifier();  
    this.trackerRepository.saveOriginUUID();
  }
}