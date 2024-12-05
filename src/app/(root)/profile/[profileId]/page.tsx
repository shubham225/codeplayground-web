"use client";

import { BookOpen, Kanban } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import AvatarImg from "@/public/profile.jpeg";
import ProfileBgImg from "@/public/gradient-bg.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SimpleInput from "@/components/custom-ui/input/SimpleInput";
import { Separator } from "@/components/ui/separator";
import MultiSelect from "@/components/custom-ui/input/multi-select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileBackground from "@/components/profile/profile-background";
import ProfileAvatar from "@/components/profile/profile-avatar";
import { FaAward } from "react-icons/fa";
import { FcCircuit, FcStart, FcVip } from "react-icons/fc";

type Props = {};

export default function page({}: Props) {
  const params = useParams();

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-y-auto">
        <ProfileBackground defaultImage={ProfileBgImg} />
        <ProfileAvatar defaultImage={AvatarImg} profileId={params.profileId} />
      </div>
      <div>
        <Tabs defaultValue="profile" className="py-3 sm:py-1 mx-11">
          <div className="flex justify-between">
            <div className="hidden sm:inline-flex"></div>
            <TabsList className="w-full sm:w-fit">
              <TabsTrigger value="profile">
                <div className="flex gap-1">
                  <BookOpen className="h-5 w-5" /> Basic Info
                </div>
              </TabsTrigger>
              <TabsTrigger value="user-activity">
                <div className="flex gap-1">
                  <Kanban className="h-5 w-5" /> User Activity
                </div>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="profile" className="py-3 sm:py-2">
            <div className="sm:grid sm:grid-cols-3 justify-between gap-10">
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
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <SimpleInput
                    id="location"
                    label="Location"
                    placeholder="ex. India"
                  />
                  <SimpleInput
                    id="education"
                    label="Education"
                    placeholder="Add a Degree"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <SimpleInput
                    id="github"
                    label="Github"
                    placeholder="Your github username or url"
                  />
                  <SimpleInput
                    id="linkedin"
                    label="LinkedIn"
                    placeholder="Your LinkedIn username or url"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <SimpleInput
                    id="work"
                    label="Work"
                    placeholder="Add a workplace"
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
            <div className="my-8 mx-5">
              <Separator />
            </div>
            <div className="sm:grid sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2 pb-6">
                <Card className="h-52">
                <CardHeader>
                  <CardTitle>Solved Graph</CardTitle>
                  </CardHeader>
                  <CardContent>Table of recent Problems</CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-3">
                <Card className="h-52">
                  <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                    <FcStart className="h-20 w-20" />
                    <FcVip className="h-20 w-20" />
                    <FcCircuit className="h-20 w-20" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="user-activity">
            <Card className="h-96">
              <CardHeader>
              <CardTitle>Recent Problems</CardTitle>
              </CardHeader>
              <CardContent>Table of recent Problems</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
