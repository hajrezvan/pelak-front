import { NextResponse } from 'next/server';

const ExternalApiBase = "https://api.majidgoodini.ir/api";

export async function GET({
  params
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params;

  const url = ExternalApiBase + "/" + slug.join('/');

  const response = await fetch(url);
  const data = await response.json();

  return NextResponse.json(data);

}