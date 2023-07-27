"use strict";

import { OuterTrackerInfo } from "./trackerInfo";
import TrackerReader from "./trackerReader";
import TrackerService from "./trackerService";
import TrackerStore from "./trackerStore";

const memberProp = new WeakMap();

/** @internal */
export default class TrackerServiceImpl implements TrackerService {
  private static instance: TrackerService;

  private constructor(reader: TrackerReader, store: TrackerStore) {
    const privateMembers = {
      reader: reader,
      store: store,
    };
    memberProp.set(this, privateMembers);
  }

  public static create(
    reader: TrackerReader,
    store: TrackerStore
  ): TrackerService {
    if (!TrackerServiceImpl.instance) {
      this.instance = new TrackerServiceImpl(reader, store);
    }
    return this.instance;
  }

  public getTrackerInfo(): OuterTrackerInfo {
    return new OuterTrackerInfo(
      memberProp.get(this).reader.findIdentifier(),
      memberProp.get(this).reader.findOriginUUID()
    );
  }

  public registerTrackerInfo(): void {
    memberProp.get(this).store.store();
  }
}
