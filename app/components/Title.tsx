import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Title() {
  return (
    <h1 className={`${bebasNeue.className} text-6xl text-center my-6`}>
      Simple Blog
    </h1>
  );
}
