"use server"
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function fetchAllNotes() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: notes } = await supabase.from('notes').select()
  console.log(notes)

  return notes
}