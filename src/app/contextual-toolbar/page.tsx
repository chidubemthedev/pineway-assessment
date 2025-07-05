"use client";
import CreateApiKey from "@/components/contextual-toolbar/create-api-key";
import CreateWebhook from "@/components/contextual-toolbar/create-webhook";
import RepoConnector from "@/components/contextual-toolbar/repo-connector";
import ShareWorkspace from "@/components/contextual-toolbar/share-workspace";
import BadgeList from "@/components/shared/badge-list";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const TABS = [
  { value: "webhook", label: "Create webhook" },
  { value: "repositories", label: "Connect repositories" },
  { value: "api", label: "Create API key" },
  { value: "workspace", label: "Share workspace" },
];

const ContextualToolbarPage = () => {
  const [activeTab, setActiveTab] = useState("webhook");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const [indicatorProps, setIndicatorProps] = useState({ width: 0, x: 0 });

  useEffect(() => {
    const idx = TABS.findIndex((tab) => tab.value === activeTab);
    const node = tabRefs.current[idx];
    const container = tabListRef.current;
    if (node && container) {
      const nodeRect = node.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicatorProps({
        width: nodeRect.width,
        x: nodeRect.left - containerRect.left,
      });
    }
  }, [activeTab]);

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
            <motion.div layout>
              <motion.div layout>
                {activeTab === "webhook" && (
                  <div id="tab-panel-webhook" role="tabpanel">
                    <CreateWebhook layoutId="footer" />
                  </div>
                )}
                {activeTab === "repositories" && (
                  <div id="tab-panel-repositories" role="tabpanel">
                    <RepoConnector layoutId="footer" />
                  </div>
                )}
                {activeTab === "api" && (
                  <div id="tab-panel-api" role="tabpanel">
                    <CreateApiKey layoutId="footer" />
                  </div>
                )}
                {activeTab === "workspace" && (
                  <div id="tab-panel-workspace" role="tabpanel">
                    <ShareWorkspace layoutId="footer" />
                  </div>
                )}
              </motion.div>

              <motion.div layout className="flex items-center gap-2 mt-2">
                <motion.div
                  layout
                  className="flex-1 relative overflow-x-scroll scrollbar-none"
                >
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute top-0 left-0 h-full rounded-[10px] bg-[#F7F7F7] z-0"
                    animate={indicatorProps}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                    }}
                    style={{
                      width: 0,
                      x: 0,
                    }}
                    initial={false}
                  />
                  <motion.div
                    layout
                    className="flex space-x-2 relative z-10"
                    ref={tabListRef}
                  >
                    {TABS.map((tab, idx) => (
                      <button
                        key={tab.value}
                        ref={(el) => {
                          tabRefs.current[idx] = el;
                        }}
                        className={`whitespace-nowrap px-2 py-3 rounded-[10px] font-medium text-sm transition-colors duration-150 ${
                          activeTab === tab.value
                            ? "text-[#424242]"
                            : "bg-transparent text-[#737373]"
                        }`}
                        style={{ position: "relative", zIndex: 1 }}
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
                <div className="shrink-0">
                  <div className="bg-[#E5E5E5] h-5 w-0.5" />
                </div>
                <Menu color="#737373" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContextualToolbarPage;
