import { Image } from "@nextui-org/react";

export default function BannerIcon() {
  return (
    <Image
      showSkeleton={false}
      width={480}
      height={320}
      src="images/banner.png"
      alt="Default Image"
    />
  );
}