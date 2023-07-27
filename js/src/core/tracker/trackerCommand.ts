"use strict";

interface StoreUUIDRequest { 
  trackerIdentifier: string, 
  originUUID: string
}

/** @internal */
export default class TrackerCommand {
  private constructor(private readonly request : StoreUUIDRequest) {}

  public static from(request : {trackerIdentifier: string, originUUID: string}) : TrackerCommand {
    return new TrackerCommand(request);
  }

  public trackerIdentifier(): string {
    if(!!this.request.trackerIdentifier) {
      return this.request.trackerIdentifier;  
    }
    throw Error("No haves trackerIdentifier");
  }

  public originUUID(): string {
    if(!! this.request.originUUID) {
      return this.request.originUUID;  
    }
    throw Error("No haves trackerIdentifier");
  }
}