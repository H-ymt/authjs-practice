"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {!session && (
          <button
            onClick={() => signIn()}
            className="flex w-full justify-center border-2 border-b border-red-300 hover:border-red-400 bg-red-200 hover:bg-red-300 pb-6 pt-8 backdrop-blur-2xl dark:border-red-800 dark:hover:border-red-900 dark:bg-red-800/50 dark:hover:bg-red-900/30 lg:static lg:w-auto lg:rounded-xl lg:p-4"
          >
            サインイン
          </button>
        )}
        {session && (
          <div>
            <h1>Profile</h1>
            <p>{session.user?.email}</p>
            {session.user?.image && (
              <Image src={session.user?.image} alt="profile" width={100} height={100} />
            )}
            <button
              onClick={() => signOut()}
              className="flex w-full justify-center border-2 border-b border-green-300 bg-green-200 pb-6 pt-8 backdrop-blur-2xl dark:border-green-800 dark:bg-green-800/30 lg:static lg:w-auto lg:rounded-xl lg:p-4 hover:border-green-400 hover:bg-green-300 dark:hover:border-green-900 dark:hover:bg-green-900/30"
            >
              サインアウト
            </button>
          </div>
        )}

        <Link href="/profile">認証しないと見れないページはこちら</Link>
      </div>
    </main>
  );
}
