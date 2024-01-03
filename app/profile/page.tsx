"use client";

import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Page: NextPage = () => {
  const { data: session } = useSession({ required: true });

  return (
    <>
      {session && (
        <div>
          <h2>Profile</h2>
          <div>{session.user?.email}</div>
          {session.user?.image && (
            <div>
              <Image src={session.user?.image} alt="" width={96} height={96} />
            </div>
          )}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
      {!session && (
        <div>
          <p>You are not signed in.</p>
        </div>
      )}
    </>
  );
};

export default Page;
