import { NextResponse } from "next/server";
import images from '../../../data/data.json';

export async function GET(request) {
  var index = Math.floor(0 + Math.random() * (images.length - 1 + 1));

  return NextResponse.json(images[index]);
}