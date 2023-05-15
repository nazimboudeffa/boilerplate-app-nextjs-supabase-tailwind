'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSupabase } from '../supabase-context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Login = () => {
  const {supabase} = useSupabase()

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <div className="h-screen mx-auto max-w-sm">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" providers={['google']} magicLink/>
      </div>
    </div> 
    <Footer /> 
    </>
  )
}

export default Login

function useBrowserSupabaseClient() {
  throw new Error('Function not implemented.')
}
