import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const NOTION_API_KEY = process.env.NEXT_NOTION_API_SECRET;
const NOTION_DB_ID = process.env.NEXT_NOTION_API_URL || '';
const notion = new Client({ auth: NOTION_API_KEY });

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB_ID,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
  }
}
