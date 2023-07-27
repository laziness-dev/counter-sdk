"use strict";

interface UpdateCounterRequest { 
  request : {
    readonly domain: string,
    readonly path : string,
    readonly userAgent: string,
    readonly trackerIdentifier: string,
    readonly topSource: string,
    readonly impressAt: string
  }
}

/** @internal */
export class UpdateRequest {
  constructor(request : UpdateCounterRequest) {}
}