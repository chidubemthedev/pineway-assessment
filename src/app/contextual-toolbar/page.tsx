import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContextualToolbarPage = () => {
  return (
    <div className="h-screen bg-white p-[46px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full rounded-4xl shadow-[0px_1px_2px_0px_#09090B0D,_0px_0px_0px_1px_#09090B0D]">
        <div className="flex flex-col justify-center pl-28">
          <div className="max-w-[265px]">
            <h1 className="font-[500] leading-6 text-[#292929]">
              Contextual toolbar
            </h1>
            <p className="leading-5 text-sm text-[#737373] mt-3">
              A toolbar that suggests and enables actions based on users&apos;
              navigation.
            </p>
            <p className="leading-5 text-sm text-[#737373] mt-3">
              Suggestions are related to the current page and users can perform
              actions inside the component, without changing to another page or
              context.
            </p>
            <div className="mt-4 flex gap-2">
              <Badge
                variant={"secondary"}
                className="text-[#737373] text-[13px]"
              >
                React
              </Badge>
              <Badge
                variant={"secondary"}
                className="text-[#737373] text-[13px]"
              >
                Tailwind css
              </Badge>
              <Badge
                variant={"secondary"}
                className="text-[#737373] text-[13px]"
              >
                Motion (prev. framer motion)
              </Badge>
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
};

export default ContextualToolbarPage;
