"use strict";

import TrackerReader from "../../core/tracker/trackerReader";
import TrackerCommand from "../../core/tracker/trackerCommand";
import TrackerLocalStroageRepository from "./trackerLocalStroageRepository";

/** @internal */
export default class TrackerReaderImpl implements TrackerReader {
  private readonly trackerRepository : TrackerLocalStroageRepository;

  constructor(command : TrackerCommand) {
    this.trackerRepository = TrackerLocalStroageRepository.create(command);
  }

  findOriginUUID(): string {
    return this.trackerRepository.findIdentifier();
  }

  findIdentifier(): string {
    return this.trackerRepository.findOriginUUID();
  }
}