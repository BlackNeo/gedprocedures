import { ToMd5Pipe } from './to-md5.pipe';

describe('ToMd5Pipe', () => {
  it('create an instance', () => {
    const pipe = new ToMd5Pipe();
    expect(pipe).toBeTruthy();
  });
});
