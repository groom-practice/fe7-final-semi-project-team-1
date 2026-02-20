import { getPhoto } from "@/lib/imageApi";
import { Photo } from "@/types/photo";
import { notFound } from "next/navigation";
import PhotoDetail from "@/components/PhotoDetail";

type PageParams = Promise<{ id: string }>;

export default async function PhotoPage({ params }: { params: PageParams }) {
  const { id } = await params;
  const response = await getPhoto(id);

  if (response.status === 404) notFound();

  const photo = (await response.json()) as Photo;

  return (
    <div className="p-6">
      <PhotoDetail
        src={photo.download_url}
        alt={photo.author}
        photographer={{
          name: photo.author,
        }}
      />
    </div>
  );
}
