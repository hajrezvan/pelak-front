
/* ------------------------------------------JS--------------------*/
import { NextRequest, NextResponse } from 'next/server';
/* ------------------------------------------Data & Type-----------*/

/* ------------------------------------------Components------------*/

/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
): Promise<NextResponse> {
  const { slug } = await params;

  const url = process.env.API_PUBLIC_BASE_URL + "/" + slug.join('/');

  const response = await fetch(url);
  const data = await response.json();

  return NextResponse.json(data);
}