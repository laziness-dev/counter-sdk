'use strict';

interface RequestDetails { 
  readonly domain: string;
  readonly ip : string;
  readonly userAgent: string;
}

export class ClientDetails implements RequestDetails {
  constructor(
    public readonly domain: string,
    public readonly ip: string,
    public readonly userAgent: string,
  ) {}
}