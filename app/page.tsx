import { createClient } from '@/utils/supabase/server'
import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AnonShield } from '@/components/anon-shield'

export default async function IndexPage() {
  // check if there is a session - if not, render the Anon Shield
  const supabase = createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  const id = nanoid()

  return (
    <>
      {!user && <AnonShield />}
      <Chat id={id} user={user ?? undefined} />
    </>
  )
}

