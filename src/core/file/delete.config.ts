import * as path from 'path';
import * as fs from 'fs';

export default function deleteFiles(files) {
  files.map((file) => {
    fs.unlinkSync(path.resolve(process.cwd(), 'tmp', file.filename));
  });
}