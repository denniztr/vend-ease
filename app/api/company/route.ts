import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, city, address } = body;

    const company = await prisma.company.create({
      data: {
        name,
        city,
        address
      }
    })

    return NextResponse.json(company);
    
  } catch (error: any) {
    console.log(error, 'ADDCOMPANY_ERROR')
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }); 
  }
}