import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, content, deadline } = body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        deadline
      }
    })

    return NextResponse.json(post);

  } catch (error) {
    console.log(error, 'ADDTODO_ERROR')
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }); 
  }
}