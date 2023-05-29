import { NextResponse } from "next/server";
import fs from 'fs'
import path from 'path'

// API route for grabbing all cat images I have
export async function GET(request) {
  // Subfolder that contains the cat images to randomly pick from
  const dirRelativeToPublicFolder = 'cat-img'

  // Resolve the file path to look through - public is the parent, then the subfolder
  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  // Read cat pics file names
  const filenames = fs.readdirSync(dir);

  // Create list of cat pics file names
  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  // Return the list of images
  return NextResponse.json(images);
}