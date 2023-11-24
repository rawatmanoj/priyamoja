import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import Card from "@/components/Card";
import ground from "../assets/images/2017/ground.jpg";

const robotoMono = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-10 ">
      <div>
        <div className={`text-4xl ${robotoMono.className}`}>Primojo</div>
      </div>
      <section className="applygrid w-3/5 ">
        <Card textStyle="bottom-2/4 left-2/4" text="2017" src={ground} />
        <Card text="2018" src="https://picsum.photos/600" />
        <Card text="2019" src="https://picsum.photos/600" />
        <Card text="2020" src="https://picsum.photos/600" />
        <Card text="2021" src="https://picsum.photos/600" />
        <Card text="2022" src="https://picsum.photos/600" />
        <Card text="2023" src="https://picsum.photos/600" />
      </section>
    </main>
  );
}
