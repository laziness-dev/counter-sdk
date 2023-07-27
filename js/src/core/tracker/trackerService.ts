"use strict";

import { OuterTrackerInfo } from "./trackerInfo";

/** @internal */
export default interface TrackerService {
  getTrackerInfo() : OuterTrackerInfo
  registerTrackerInfo() : void
}
