import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="size-full flex flex-col justify-center">
      <div className="flex justify-center h-full items-center">
        <Link href="/problems">
          <Button variant={"default"}>Go to problems</Button>
        </Link>
      </div>
    </div>
  );
}
