import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    // Get auth token from header
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    const user = await getSession(token)

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get documents for user's company
    const documents = await prisma.document.findMany({
      where: { companyId: user.companyId! },
      include: {
        user: {
          select: { name: true, email: true },
        },
        template: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ documents })
  } catch (error) {
    console.error('Get documents error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    const user = await getSession(token)

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { title, type, category, content, templateId } = await request.json()

    const document = await prisma.document.create({
      data: {
        title,
        type,
        category,
        content,
        templateId,
        companyId: user.companyId!,
        userId: user.id,
      },
    })

    return NextResponse.json({ document })
  } catch (error) {
    console.error('Create document error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}