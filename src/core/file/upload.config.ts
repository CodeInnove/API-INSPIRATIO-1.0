import * as path from 'path';

export default function uploadFileConfig(files) {
  const filesResponse = [];

  files.forEach((file) => {
    const fileReponse = {
      fileName: `${file.filename}`,
      path: path.resolve('./tmp', file.filename),
    };
    filesResponse.push(fileReponse);
  });

  return filesResponse;
}