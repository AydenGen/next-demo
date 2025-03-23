import Image from "next/image";

export const metadata = {
  title: "Image",
}

export default function Page() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 w-1/2">
        <h1 className="text-blue-500">{`<img />`}</h1>
        <img
          src="/images/photo.avif"
          alt="image"
          width={54}
          height={81}
        />
        <img
          src="/images/photo.avif"
          alt="image"
          width={108}
          height={162}
        />
        <img
          src="/images/photo.avif"
          alt="image"
          width={216}
          height={324}
        />
        <img
          src="/images/photo.avif"
          alt="image"
        />
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <h1 className="text-black-500">{`<Image />`}</h1>
        <Image
          src="/images/photo.avif"
          alt="next image"
          width={54}
          height={81}
          priority
        />
        <Image
          src="/images/photo.avif"
          alt="next image"
          width={108}
          height={162}
          priority
        />
        <Image
          src="/images/photo.avif"
          alt="next image"
          width={216}
          height={324}
          priority
        />
        <Image
          src="/images/photo.avif"
          alt="next image"
          sizes="100vw"
          width={2160}
          height={3240}
          priority
        />
      </div>
    </div>
  );
}
