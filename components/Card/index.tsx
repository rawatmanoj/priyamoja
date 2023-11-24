"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
type CardProps = {
  src: StaticImageData | string;
  text?: string;
  textStyle?: string;
  containerStyle?: string;
};

export default function Card({
  src,
  text,
  textStyle = "flex items-end",
  containerStyle,
}: CardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (text) router.push(`/year/${text}`);
  };
  //hover:blur-none
  return (
    <div
      className={`card relative flex justify-center items-center 
                ease-in-out duration-300 
                ${containerStyle}
                `}
      onClick={handleClick}
    >
      <p className={`image-text absolute text-white ${textStyle} `}>{text}</p>
      <Image
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        alt="Picture of the author"
        style={{ width: "100%", height: "100%" }}
        // className="rounded-xl"
        // title={text}
      />
    </div>
  );
}
