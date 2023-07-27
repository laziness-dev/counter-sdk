"use strict";

import TrackerCommand from '../../core/tracker/trackerCommand';

const TRACKER_ID = Symbol("counter identifier");
const TRACKER_ID_KEY = Symbol("local stroage tracker id key");

const USER_ORIGIN_ID = Symbol("origin user id");
const USER_ORIGIN_ID_KEY = Symbol("local stroage origin user id key");

/** @internal */
export default class TrackerLocalStroageRepository {
  private static instance: TrackerLocalStroageRepository;

  private readonly [TRACKER_ID]: string;
  private readonly [USER_ORIGIN_ID]: string;

  private readonly [TRACKER_ID_KEY] = "COUNTER_ORIGIN_USER_ID";  
  private readonly [USER_ORIGIN_ID_KEY] = "COUNTER_TRACKER_ID";

  private constructor(trackerIdentifier: string, originUUID: string) {
    this[TRACKER_ID] = trackerIdentifier;
    this[USER_ORIGIN_ID] = originUUID;
  }

  public saveIdentifier() : void {
    if(!!this[TRACKER_ID]) {
      return localStorage.setItem(this[TRACKER_ID_KEY], this[TRACKER_ID]);
    }  
    throw new Error("Dose not have TRACKER ID");
  }
  
  public saveOriginUUID() : void {
    if(!!this[USER_ORIGIN_ID]) {
      return localStorage.setItem(this[USER_ORIGIN_ID_KEY], this[USER_ORIGIN_ID]);
    }  
    throw new Error("Dose not have USER ORIGIN ID");
  }

  public findIdentifier() : string {
    const result = localStorage.getItem(this[TRACKER_ID_KEY]);
    
    if(!!!result) {
      throw new Error("Dose not have TRACKER ID");
    }
    return result;
  }

  public findOriginUUID() : string {
    const result = localStorage.getItem(this[USER_ORIGIN_ID_KEY]);

    if(!!!result) {
      throw new Error("Dose not have TRACKER ID");
    }
    return result;
  }

  public static create(command: TrackerCommand) : TrackerLocalStroageRepository {
    if(!TrackerLocalStroageRepository.instance) {
      this.instance = new TrackerLocalStroageRepository(command.trackerIdentifier(), command.originUUID());
    }
    return this.instance;
  }
}
