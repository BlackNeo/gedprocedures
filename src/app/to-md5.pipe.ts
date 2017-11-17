import { Pipe, PipeTransform } from '@angular/core';

import { Md5 } from 'ts-md5/dist/md5';

@Pipe({
  name: 'toMd5'
})
export class ToMd5Pipe implements PipeTransform {

  constructor(private _md5: Md5) {}

    transform(password: any) {
      this._md5 = new Md5();
      return this._md5.appendStr(password);
    }
}
