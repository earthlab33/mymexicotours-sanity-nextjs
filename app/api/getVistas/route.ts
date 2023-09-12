import { table, getMinifiedRecords } from "../utils/airtablevistas";
// import { useUser } from '@auth0/nextjs-auth0/client';
import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await table.select({}).all();
  const data = getMinifiedRecords(res);
  return NextResponse.json({ data });
}