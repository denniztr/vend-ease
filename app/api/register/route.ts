import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, surname, password } = body;

    if (email === '' || name === '' || surname === '' || password === '') return new NextResponse('Заполните обязательные поля', { status: 400 });

    if (password.length < 5)  return new NextResponse('Ваш пароль небезопасен, введите минимум 5 символов', { status: 400 });

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) return new NextResponse('Пользователь с такой электронной почтой уже существует', { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        surname,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, 'REGISTRATION_ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
