import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { name, email, youtube, twitch, instagram, tiktok } = req.body
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }
  try {
    const creator = await prisma.creatorRegistration.create({
      data: { name, email, youtube, twitch, instagram, tiktok }
    })
    return res.status(201).json({ success: true, creator })
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Email already registered' })
    }
    return res.status(500).json({ error: 'Internal server error' })
  }
} 