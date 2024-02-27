import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { label, address } = body;

    const company = await prisma.company.create({
      data: {
        label,
        address
      }
    })

    return company
    
  } catch (error: any) {
    console.log('Internal Error', error)
  }
}