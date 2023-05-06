import { NextResponse } from "next/server";

export async function GET(request) {
  const response = await fetch(
    `https://catfact.ninja/fact`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
  );
  // const data = await response.json();
  // return data;
  return NextResponse.json(response);
}