// src/types.d.ts
declare interface UrlObject {
  protocol?: string;
  hostname?: string;
  port?: string | number;
  pathname?: string;
  search?: string;
  hash?: string;
  href?: string;
}
