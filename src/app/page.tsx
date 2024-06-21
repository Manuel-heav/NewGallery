import Link from "next/link";

const mockurls = [
  "https://utfs.io/f/9bb187c4-4a59-451c-bf69-cf048a397f02-8bfg6c.jpg",
  "https://utfs.io/f/17089cd3-22f7-4195-ae4b-d8558d1b31f9-cza8rv.jpg",
  "https://utfs.io/f/f93ef5e2-b0f8-4ed0-b6fe-6c85fdd20517-9zv6q8.jpg",
  "https://utfs.io/f/dbb34cd5-b884-4c69-8f04-8162c64e7738-8c12km.jpg"
]

const mockImages = mockurls.map((url, i) => ({
  id: i + 1,
  url,
}))

export default function HomePage() {
  return (
    <main>
        <div className="flex flex-wrap gap-4">
          {
            [...mockImages, ...mockImages, ...mockImages].map((image) => (
              <div key={image.id} className="w-48">
                <img src={image.url} />
              </div>
            ))
          }
        </div>
    </main>
  );
}
