import { ffmpeg } from '@markf/ffmpeg-lib';
import { Router } from 'express';
import fileUpload from 'express-fileupload';
import { basename, extname } from 'path';
import { Readable } from 'stream';

export const router = Router();

router.use(fileUpload());

router.post<unknown, unknown, { convertTo: string }>('/', (req, res) => {
  let file = req.files.media;
  if (!Array.isArray(file)) {
    file = [file];
  }

  res.attachment(
    `${basename(file[0].name, extname(file[0].name))}.${req.body.convertTo}`
  );

  ffmpeg
    .input(Readable.from(file[0].data))
    .addOption('-vn')
    .outputFormat(req.body.convertTo)
    .addOutput(res)
    .run();
});
