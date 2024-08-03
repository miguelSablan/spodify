"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadio } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  if (session) {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="p-6">
          <p className="text-white font-normal text-xl mt-5 mb-2">
            Signed In as {session?.user?.name}
          </p>

          <p
            className="bg-green-500 hover:bg-green-600 transition text-black px-6 py-2 rounded-full font-medium text-md text-center"
            onClick={() => signOut()}
          >
            Sign Out
          </p>
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-3 md:gap-6">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faRadio} size={"4x"} className="mr-3" />
            <h1 className="font-semibold text-5xl">Spodify</h1>
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 transition text-black px-6 py-2 rounded-full font-medium text-md"
            onClick={() => signIn("spotify", { prompt: "login" })}
          >
            <FontAwesomeIcon icon={faSpotify} size="xl" className="mr-3" />
            LOGIN WITH SPOTIFY
          </button>
        </div>
      </main>
    );
  }
}
