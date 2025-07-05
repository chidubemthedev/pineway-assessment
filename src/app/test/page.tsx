"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import CreateWebhook from "@/components/contextual-toolbar/create-webhook";
import RepoConnector from "@/components/contextual-toolbar/repo-connector";
import CreateApiKey from "@/components/contextual-toolbar/create-api-key";
import ShareWorkspace from "@/components/contextual-toolbar/share-workspace";
import BadgeList from "@/components/shared/badge-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TABS = {
  webhook: <CreateWebhook />,
  repositories: <RepoConnector />,
  api: <CreateApiKey />,
  workspace: <ShareWorkspace />,
};

const ContextualToolbarPage = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof TABS>("webhook");

  return (
    <div className="h-screen bg-white p-[46px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full rounded-4xl shadow-[0px_1px_2px_0px_#09090B0D,_0px_0px_0px_1px_#09090B0D]">
        {/* Left side */}
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
            <div className="mt-4">
              <BadgeList />
            </div>
          </div>
          <Button asChild className="w-fit" variant={"outline"} size={"sm"}>
            <Link href="/contextual-toolbar">Next Task</Link>
          </Button>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-end">
          <div className="p-[10px] rounded-[18px] max-w-[482px] shadow-[0px_8px_16px_0px_#0000000A,_0px_4px_8px_0px_#0000000A,_0px_0px_0px_1px_#09090B0D]">
            <Tabs
              value={activeTab}
              onValueChange={(val) => setActiveTab(val as keyof typeof TABS)}
            >
              <div className="flex items-center mb-3">
                <div className="overflow-x-scroll scrollbar-none flex-1">
                  <TabsList>
                    <TabsTrigger value="webhook">Create webhook</TabsTrigger>
                    <TabsTrigger value="repositories">
                      Connect repositories
                    </TabsTrigger>
                    <TabsTrigger value="api">Create API key</TabsTrigger>
                    <TabsTrigger value="workspace">Share workspace</TabsTrigger>
                  </TabsList>
                </div>
                <Menu />
              </div>

              {/* 🔥 Shared layout container for smooth height & content transition */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    layoutId="tab-content"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    transition={{
                      //   opacity: { duration: 0.2 },
                      layout: { duration: 2, ease: "easeInOut" },
                    }}
                    className="w-full"
                  >
                    {TABS[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualToolbarPage;
import { animate } from "motion/react";
import layout from "../layout";
