import ffmpegPath from 'ffmpeg-static';
import fluentFfmpeg from 'fluent-ffmpeg';

export const ffmpeg = fluentFfmpeg().setFfmpegPath(ffmpegPath);
