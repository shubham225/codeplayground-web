"use client";

import ProfileDialog from "@/components/dialogs/profile";
import ProfileMenu from "@/components/profile-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ImagePlus, Plus, X } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useCharacterLimit } from "@/hooks/use-character-limit";
import { useImageUpload } from "@/hooks/use-image-upload";
import AvatarImg from "@/public/profile.jpeg";
import ProfileBgImg from "@/public/gradient-bg.jpg";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import SimpleInput from "@/components/custom-ui/input/SimpleInput";
import { Separator } from "@/components/ui/separator";
import MultiSelect from "@/components/custom-ui/input/multi-select";

type Props = {};

export default function page({}: Props) {
  const params = useParams();

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-y-auto">
        <ProfileBg defaultImage={ProfileBgImg} />
        <Avatar defaultImage={AvatarImg} profileId={params.profileId} />
      </div>
      <div>
        <Tabs defaultValue="profile" className="py-3 sm:py-1 mx-11">
          <div className="flex justify-between">
            <div className="hidden sm:inline-flex"></div>
            <TabsList className="w-full sm:w-fit">
              <TabsTrigger value="profile">Basic Info</TabsTrigger>
              <TabsTrigger value="account-management">Account</TabsTrigger>
              <TabsTrigger value="user-activity">User Activity</TabsTrigger>
              <TabsTrigger value="miscellaneous">Miscellaneous</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="profile" className="py-3 sm:py-1">
            <div className="sm:grid sm:grid-cols-2">
              <div className="flex flex-col gap-2 pb-6">
                <p className=" text-xl font-semibold leading-none self-start">
                  Basic Info
                </p>
                <p className="text-sm leading-snug text-muted-foreground line-clamp-2 self-start">
                  Set your account details
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row  justify-between gap-2">
                  <SimpleInput
                    id="firstname"
                    label="Firstname"
                    placeholder="ex. John"
                  />

                  <SimpleInput
                    id="lastname"
                    label="Lastname"
                    placeholder="ex. Doe"
                  />
                </div>
                <SimpleInput
                  id="email"
                  label="Email"
                  placeholder="ex. johndoe@gmail.com"
                />
              </div>
            </div>
            <div className="my-8 mx-5">
              <Separator />
            </div>
            <div className="sm:grid sm:grid-cols-2">
              <div className="flex flex-col gap-2  pb-6">
                <p className=" text-xl font-semibold leading-none self-start">
                  Your Work
                </p>
                <p className="text-sm leading-snug text-muted-foreground line-clamp-2 self-start">
                  Add info about your position
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <SimpleInput
                    id="function"
                    label="Function"
                    placeholder="ex. Design"
                  />

                  <SimpleInput
                    id="job-title"
                    label="Job Title"
                    placeholder="ex. Software Development Engineer"
                  />
                </div>
                <MultiSelect />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="user-activity">
            <div>User Activity</div>
          </TabsContent>
          <TabsContent value="account-management">
            <div>Account Management</div>
          </TabsContent>
          <TabsContent value="miscellaneous">
            <div>Miscellaneous</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ProfileBg({ defaultImage }: { defaultImage?: StaticImageData }) {
  const [hideDefault, setHideDefault] = useState(false);
  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  } = useImageUpload();

  const currentImage = previewUrl || (!hideDefault ? defaultImage : null);

  const handleImageRemove = () => {
    handleRemove();
    setHideDefault(true);
  };

  return (
    <div className="h-48">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted rounded-xl">
        {currentImage && (
          <Image
            className="h-full w-full object-cover"
            src={currentImage}
            alt={
              previewUrl
                ? "Preview of uploaded image"
                : "Default profile background"
            }
            width={512}
            height={96}
          />
        )}
        <div className="absolute inset-0 flex p-5 items-start justify-end gap-2">
          <button
            type="button"
            className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
            onClick={handleThumbnailClick}
            aria-label={currentImage ? "Change image" : "Upload image"}
          >
            <ImagePlus size={16} strokeWidth={2} aria-hidden="true" />
          </button>
          {currentImage && (
            <button
              type="button"
              className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
              onClick={handleImageRemove}
              aria-label="Remove image"
            >
              <X size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        aria-label="Upload image file"
      />
    </div>
  );
}

function Avatar({
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
