import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadio } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-3 md:gap-6">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faRadio} size={"4x"} className="mr-3" />
          <h1 className="font-semibold text-5xl">Spodify</h1>
        </div>

        <button className="bg-green-500 hover:bg-green-600 transition text-black px-6 py-2 rounded-full font-medium text-md">
          <FontAwesomeIcon icon={faSpotify} size="xl" className="mr-3" />
          LOGIN WITH SPOTIFY
        </button>
      </div>
    </main>
  );
}
