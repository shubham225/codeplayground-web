
import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'

type FormState = {id: string, user: string};
 
export async function signup(state: FormState, formData: FormData) {
  // Previous steps:
  // 1. Validate form fields
  // 2. Prepare data for insertion into database
  // 3. Insert the user into the database or call an Library API
 
  // Current steps:
  // 4. Create user session
  // await createSession(state.user)
  // 5. Redirect user
  redirect('/')
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}
