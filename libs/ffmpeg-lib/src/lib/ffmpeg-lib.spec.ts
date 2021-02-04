import { ffmpegLib } from './ffmpeg-lib';

describe('ffmpegLib', () => {
  it('should work', () => {
    expect(ffmpegLib()).toEqual('ffmpeg-lib');
  });
});
