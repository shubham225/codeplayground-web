"use client";

import Image, { StaticImageData } from "next/image";
import { useImageUpload } from "@/hooks/use-image-upload";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";

export default function ProfileAvatar({
  defaultImage,
  profileId,
}: {
  defaultImage?: StaticImageData;
  profileId: string | string[] | undefined;
}) {
  const { previewUrl, fileInputRef, handleThumbnailClick, handleFileChange } =
    useImageUpload();

  const currentImage = previewUrl || defaultImage;

  return (
    <div className="-mt-12 px-10 flex justify-between">
      <div className="flex">
        <div className="relative flex size-36 items-center justify-center overflow-hidden rounded-lg border-4 border-background bg-muted shadow-sm shadow-black/10">
          {currentImage && (
            <Image
              src={currentImage}
              className="h-full w-full object-cover"
              width={80}
              height={80}
              alt="Profile image"
            />
          )}
        </div>
        <div className="relative mt-16 mx-2 flex flex-col gap-1">
          <p className=" text-2xl font-bold leading-none self-start">
            Shubham Shinde
          </p>
          <p className="text-sm leading-snug text-muted-foreground line-clamp-2 self-start">
            @{profileId}
          </p>
        </div>
      </div>
      <div className="mt-16">
        <Button
          variant="default"
          onClick={handleThumbnailClick}
          aria-label="Change profile picture"
        >
          <ImagePlus
            className="sm:-ms-1 sm:me-2"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="max-sm:sr-only">Change Profile</span>
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          aria-label="Upload profile picture"
        />
      </div>
    </div>
  );
}
