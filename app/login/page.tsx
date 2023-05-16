'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession } from '@supabase/auth-helpers-react'
import { useSupabase } from '../supabase-context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Welcome from '@/components/Welcome'

const Login = () => {
  const session = useSession()
  const {supabase} = useSupabase()

  return (
    <>
    {!session ? (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <div className="h-screen mx-auto max-w-sm">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" providers={['google']} magicLink/>
      </div>
    </div> 
    <Footer /> 
    </>
    ) : (
      <>
      <Navbar />
      <Welcome/>
      <Footer />
      </>
    )}
    </>
  )
}

export default Login

function useBrowserSupabaseClient() {
  throw new Error('Function not implemented.')
}
