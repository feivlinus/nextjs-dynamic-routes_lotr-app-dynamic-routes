import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement() {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  const handleRandomPush = () => {
    router.push(`/volumes/${getRandomElement().slug}`);
  };

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.title}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => handleRandomPush()}>RANDOM</button>
    </>
  );
}
