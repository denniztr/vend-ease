import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { title, content, deadline } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        deadline,
        authorId: {
          connect: {
            id: currentUser.id
          },
        },
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error, 'ADDTODO_ERROR');
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
