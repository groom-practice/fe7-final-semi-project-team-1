import Image from "next/image";

interface PhotoDetailsProps {
  src: string;
  alt: string;
  photographer: {
    name: string;
  };
}
export default function PhotoDetails({
  src,
  alt,
  photographer,
}: PhotoDetailsProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="w-full h-auto object-cover rounded-lg shadow-lg"
        placeholder="blur"
        blurDataURL={src}
      />
      <p className="mt-4 text-center text-gray-700">
        author by <span className="font-semibold">{photographer.name}</span>
      </p>
    </div>
  );
}
