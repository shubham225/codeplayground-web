import BannerFooter from "@/components/banner-footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaAward } from "react-icons/fa";
import { FcFaq } from "react-icons/fc";
import HomeBgDark from "@/public/home-bg-dark.jpg";
import HomeBgLight from "@/public/home-bg-light.jpg";
import Image from "next/image";
import ButtonWithIcon from "@/components/custom-ui/button/ButtonWithIcon";
import { ArrowBigLeft, Braces } from "lucide-react";

export default function Home() {
  return (
    <div className="size-full flex flex-col">
      <div className="fixed top-0 left-0 size-full -z-10">
        <Image
          src={HomeBgDark}
          alt="Cartoon graduates jump with happiness"
          className="h-full w-full object-cover invisible dark:visible"
          quality="100"
          layout="fill"
        />
        <Image
          src={HomeBgLight}
          alt="Cartoon graduates jump with happiness"
          className="h-full w-full object-cover dark:hidden"
          quality="100"
          layout="fill"
        />
      </div>
      <div className="size-full flex flex-col justify-around">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold"> Practice. Excell. Succeed.</h1>
          <h3 className="text-md font-semibold">
            Enhance your coding skills..take mock exams...and more
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <Link href="/problems">
            <Button size="lg" className="font-semibold">Start Coding...
            </Button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* <div></div>
          <div></div>
          <div className="grid grid-cols-2 gap-2">
            <Card className="flex flex-col justify-between bg-slate-200 dark:bg-[#252525]">
              <CardHeader>
                <CardTitle>Contests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <FaAward className="h-20 w-20 self-center text-yellow-600" />
                    <h4>
                      Participate in coding contests and climb the leaderboard
                    </h4>
                    <h4></h4>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" className="font-bold">
                  Join Contest
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between bg-slate-200 dark:bg-[#252525]">
              <CardHeader>
                <CardTitle>Disscuss Now</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-1">
                    <FcFaq className="h-20 w-20 self-center" />
                    <h4>Share interview questions</h4>
                    <h4>Get solutions</h4>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" className="font-bold">
                  Let's Disscuss
                </Button>
              </CardFooter>
            </Card>
          </div> */}
        </div>
      </div>
      <BannerFooter />
    </div>
  );
}
