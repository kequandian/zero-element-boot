// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportJwtVerify = require('../../../app/middleware/jwtVerify');

declare module 'egg' {
  interface IMiddleware {
    jwtVerify: typeof ExportJwtVerify;
  }
}
