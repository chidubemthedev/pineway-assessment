import BadgeList from "@/components/shared/badge-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-white p-[46px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full rounded-4xl shadow-[0px_1px_2px_0px_#09090B0D,_0px_0px_0px_1px_#09090B0D]">
        <div className="flex flex-col justify-center pl-28">
          <div className="max-w-[351px]">
            <h1 className="font-[500] leading-6 text-[#292929]">
              Calendar widget
            </h1>
            <p className="leading-5 text-sm text-[#737373] mt-3">
              Calendar widget with clear timezone differences information. Click
              on the widget to interact with it.
            </p>
            <div className="mt-4">
              <BadgeList />
            </div>
          </div>
          <Button asChild className="w-fit" variant={"outline"} size={"sm"}>
            <Link href="/contextual-toolbar">Next Task</Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center pl-28">for card</div>
      </div>
    </div>
  );
}
