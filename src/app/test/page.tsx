"use client";
import CreateApiKey from "@/components/contextual-toolbar/create-api-key";
import CreateWebhook from "@/components/contextual-toolbar/create-webhook";
import RepoConnector from "@/components/contextual-toolbar/repo-connector";
import ShareWorkspace from "@/components/contextual-toolbar/share-workspace";
import BadgeList from "@/components/shared/badge-list";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

const TABS = [
  { value: "webhook", label: "Create webhook" },
  { value: "repositories", label: "Connect repositories" },
  { value: "api", label: "Create API key" },
  { value: "workspace", label: "Share workspace" },
];

const ContextualToolbarPage = () => {
  const [activeTab, setActiveTab] = useState("webhook");

  return (
    <div className="h-screen bg-white p-[46px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full rounded-4xl shadow-[0px_1px_2px_0px_#09090B0D,_0px_0px_0px_1px_#09090B0D]">
        <div className="relative flex flex-col justify-center pl-28">
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
            <div className="mt-4">
              <BadgeList />
            </div>
          </div>
          <Button
            asChild
            className="absolute bottom-[10%] w-fit"
            variant={"outline"}
            size={"sm"}
          >
            <Link href="/contextual-toolbar">Next Task</Link>
          </Button>
        </div>
        <div className="relative flex flex-col justify-center">
          <motion.div
            layout
            className="absolute bottom-[15%] p-[10px] rounded-[18px] max-w-[482px] shadow-[0px_8px_16px_0px_#0000000A,_0px_4px_8px_0px_#0000000A,_0px_0px_0px_1px_#09090B0D]"
          >
            {/* HTML Tabs Implementation */}
            <motion.div layout>
              <div>
                {activeTab === "webhook" && (
                  <div id="tab-panel-webhook" role="tabpanel">
                    <CreateWebhook />
                  </div>
                )}
                {activeTab === "repositories" && (
                  <div id="tab-panel-repositories" role="tabpanel">
                    <RepoConnector />
                  </div>
                )}
                {activeTab === "api" && (
                  <div id="tab-panel-api" role="tabpanel">
                    <CreateApiKey />
                  </div>
                )}
                {activeTab === "workspace" && (
                  <div id="tab-panel-workspace" role="tabpanel">
                    <ShareWorkspace />
                  </div>
                )}
              </div>

              <motion.div layout className="flex items-center mt-2">
                <motion.div
                  layout
                  className="overflow-x-scroll scrollbar-none flex-1"
                >
                  <motion.div layout className="flex space-x-2">
                    {TABS.map((tab) => (
                      <button
                        key={tab.value}
                        className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-150 ${
                          activeTab === tab.value
                            ? "bg-gray-100 text-black"
                            : "bg-transparent text-gray-500 hover:bg-gray-50"
                        }`}
                        onClick={() => setActiveTab(tab.value)}
                        aria-selected={activeTab === tab.value}
                        aria-controls={`tab-panel-${tab.value}`}
                        role="tab"
                        tabIndex={activeTab === tab.value ? 0 : -1}
                        type="button"
                      >
                        {tab.label}
                      </button>
                    ))}
                  </motion.div>
                </motion.div>
                <Separator />
                <Menu />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContextualToolbarPage;
