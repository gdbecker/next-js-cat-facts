import { NextResponse } from "next/server";
// import images from '../../json/data.json';
import fs from 'fs'
import path from 'path'

export async function GET(request) {
  // var index = Math.floor(0 + Math.random() * (images.length - 1 + 1));

  const dirRelativeToPublicFolder = 'cat-img'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  // return NextResponse.json(images[index]);
  return NextResponse.json(images);

}

// export default (req, res) => {
//   const dirRelativeToPublicFolder = 'cat-img'

//   const dir = path.resolve('./public', dirRelativeToPublicFolder);

//   const filenames = fs.readdirSync(dir);

//   const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

//   res.statusCode = 200
//   res.json(images);
// }