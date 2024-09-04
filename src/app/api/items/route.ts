import { type NextRequest } from 'next/server'
import { getUserItems } from "@/lib/db/user_crud"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const search = searchParams.get('search') as string

  const userItems = await getUserItems(search)

  return new Response(JSON.stringify(userItems), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export async function POST(request: NextRequest) {

  const data = await request.json()
  const searchParams = request.nextUrl.searchParams
  const search = searchParams.get('search') as string

  const userItems = await getUserItems(search)

  return new Response(JSON.stringify(userItems), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}