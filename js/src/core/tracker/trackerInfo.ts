"use strict";

interface RequestDetails {
  readonly domain: string;
  readonly uuid: string;
  readonly userAgent: string;
}

/** @internal */
export class InternalTrackerInfo implements RequestDetails {
  constructor(
    public readonly domain: string,
    public readonly uuid: string,
    public readonly userAgent: string
  ) {}
}

export class OuterTrackerInfo {
  constructor(
    public readonly trackerId: string,
    public readonly originUserId: string
  ) {}
}