import * as childProcess from 'child_process';

interface Options {
  textToEcho: string;
  q?: boolean;
}

export default async function (
  _options: Options
): Promise<{ success: boolean }> {
  console.log('Builder options', _options);

  if (_options.q === true) {
    return Promise.resolve({
      success: true,
    });
  }

  const child = childProcess.spawn('echo', [_options.textToEcho], {
    stdio: 'inherit',
  });
  return new Promise<{ success: boolean }>((res) => {
    child.on('close', (code) => {
      res({ success: code === 0 });
    });
  });
}
