'use strict';

import { ClientDetails } from './clientDetails';

import {
  getAnonymousUserId,
  getAnonymousUserIdWithSecret,
} from 'anonymous-user-id';

export class Counter {
  private readonly clientDetails: ClientDetails;  
  private readonly salt?: string;
  private readonly secret?: string;

  private constructor(domain: string, ip: string, userAgent: string, salt?: string, secret?: string) {
    this.clientDetails = new ClientDetails(domain, ip, userAgent);
    this.salt = salt;
    this.secret = secret;
  }

  static createWithSalt(ip: string, domain: string, userAgent: string, salt: string): Counter {
    return new Counter(ip, domain, userAgent, salt);
  }

  static createWithSecret(ip: string, domain: string, userAgent: string, secret: string): Counter {
    return new Counter(ip, domain, userAgent, undefined, secret);
  }

  public getUserIdWithSalt(): string {
    if(!!(this.salt)) {
      return getAnonymousUserId(this.salt, this.clientDetails);
    } 
    throw new Error("No Argument of salt");
  }

  public getUserIdWithSecret(): string {
    if(!!(this.secret)) {
      return getAnonymousUserIdWithSecret(this.secret, this.clientDetails);
    }
    throw new Error("No Argument of secret");
  }
}