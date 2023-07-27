"use strict";

import { InternalTrackerInfo } from "../../core/tracker/trackerInfo";

import {
  getAnonymousUserId,
  getAnonymousUserIdWithSecret,
} from "anonymous-user-id";

/** @internal */
export default class TokenGenerator {
  public static generate(
    trackerInfo: InternalTrackerInfo,
    hashKey: { salt?: string; secret?: string }
  ): string {
    if (!!hashKey.secret) {
      return getAnonymousUserId(hashKey.salt, trackerInfo);
    }
    if (!!hashKey.salt) {
      return getAnonymousUserIdWithSecret(hashKey.secret, trackerInfo);
    }
    throw new Error("No Argument of salt or secret");
  }
}
