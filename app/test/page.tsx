"use client"

import Link from 'next/link';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/utils/useUser';
import { useRouter } from "next/router";


const Navbar = () => {
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const router = useRouter()
  
  return (
    <nav className=''>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/" className='' aria-label="Logo">
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
              <Link href="/" className=''>
                Pricing
              </Link>
              <Link href="/account" className=''>
                Account
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            {user ? (
              <span
                className=''
                onClick={async () => {
                  await supabaseClient.auth.signOut();
                  router.push('/signin');
                }}
              >
                Sign out
              </span>
            ) : (
              <Link href="/signin" className=''>
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
