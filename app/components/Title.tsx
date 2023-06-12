import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Title() {
  return (
    <h1 className={`${bebasNeue.className} text-6xl text-center my-6`}>
      <Link href="/">Simple Blog</Link>
    </h1>
  );
}
