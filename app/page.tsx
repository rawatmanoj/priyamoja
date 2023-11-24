import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import Card from "@/components/Card";
import ground from "../assets/images/2017/ground.jpg";
import primojo_cutepic from "../assets/images/2018/primojo_cutepic.jpg";
import stare_2019 from "../assets/images/2019/2019_stare.jpg";
import cp_cute from "../assets/images/2020/cp_cute.jpg";
import IMG_20210807_174730 from "../assets/images/2021/IMG_20210807_174730.jpg";
import Snapchat975702885 from "../assets/images/2022/Snapchat-975702885.jpg";
import selfie_2023 from "../assets/images/2023/Snapchat-1279040392.jpg";

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
      <section className="applygrid w-3/5 lg:p-20">
        <Card
          textStyle="flex justify-center items-center text-2xl"
          text="2017"
          src={ground}
        />
        <Card
          textStyle="flex justify-center items-center text-2xl"
          text="2018"
          src={primojo_cutepic}
        />
        <Card
          textStyle="flex justify-center items-center text-2xl"
          text="2019"
          src={stare_2019}
        />
        <Card
          textStyle="flex justify-center items-center text-2xl"
          text="2020"
          src={cp_cute}
        />
        <Card
          textStyle="flex justify-center items-center text-2xl"
          text="2021"
          src={IMG_20210807_174730}
        />
        <Card
          textStyle="flex justify-center items-center text-2xl"
          text="2022"
          src={Snapchat975702885}
        />
        <Card
          textStyle="flex justify-center items-center text-2xl"
          text="2023"
          src={selfie_2023}
        />
      </section>
    </main>
  );
}
