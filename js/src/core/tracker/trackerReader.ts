"use strict";

/** @internal */
export default interface TrackerReader {
  findOriginUUID(): string;
  findIdentifier(): string;
}
