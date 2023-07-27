import { v4 as uuidv4 } from "uuid";
import { InternalTrackerInfo } from "./core/tracker/trackerInfo";

import Tracker from "./core/tracker/tracker";
import TrackerReaderImpl from "./infrastructure/tracker/trackerReaderImpl";
import TrackerStoreImpl from "./infrastructure/tracker/trackerStoreImpl";
import TrackerServiceImpl from "./core/tracker/trackerServiceImpl";

(() => {
  const userInfo = new InternalTrackerInfo(
    document.domain,
    uuidv4(),
    navigator.userAgent
  );

  const tracker = Tracker.init(userInfo, "123456");
  const command = tracker.command();

  const trackerService = TrackerServiceImpl.create(
    new TrackerReaderImpl(command),
    new TrackerStoreImpl(command)
  );
  trackerService.registerTrackerInfo();

  window.trackerService = trackerService;

  // UUID -> LocalStorage
  console.log(
    JSON.stringify(window.trackerService.getTrackerInfo()) +
      "서비스 생성 완료"
  );  
})();
