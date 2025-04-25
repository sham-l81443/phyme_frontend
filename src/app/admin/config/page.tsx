"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  BookOpen,
  GraduationCap,
  BookText,
  Layers,
  FileText,
  Settings,
  Icon,
} from "lucide-react";
import React, { useState } from "react";
import Syllabus from "./syllabus";
import Class from "./class";
import Subject from "./subject";
import Chapters from "./chapters";
import Notes from "./notes";
import Config from "./config";
import useAdminStore from "@/store/admin/adminStore";
import { Scroll, Section } from "@/components/common";

type Tabs =
  | "syllabus"
  | "classes"
  | "subjects"
  | "chapters"
  | "settings"
  | "notes"
  | string;

const ContentConfig = () => {

  const currentTab =
    useAdminStore((state) => state.adminStore.nonPersist.currentTab) ||
    "syllabus";

  const [activeTab, setActiveTab] = useState<Tabs>(currentTab as Tabs);


  const tabs = {
    syllabus: {
      activeTab: "syllabus",
      title: "Syllabus",
      component: <Syllabus />,
      Icon: <BookOpen className="h-4 w-4" />,
    },

    classes: {
      activeTab: "classes",
      title: "Classes",
      component: <Class />,
      Icon: <GraduationCap className="h-4 w-4" />,
    },

    subjects: {
      activeTab: "subjects",
      title: "Subjects",
      component: <Subject />,
      Icon: <BookText className="h-4 w-4" />,
    },
    chapters: {
      activeTab: "chapters",
      title: "Chapters",
      component: <Chapters />,
      Icon: <Layers className="h-4 w-4" />,
    },
    notes: {
      activeTab: "notes",
      title: "Notes",
      component: <Notes />,
      Icon: <FileText className="h-4 w-4" />,
    },
    settings: {
      activeTab: "settings",
      title: "Settings",
      component: <Config />,
      Icon: <Settings className="h-4 w-4" />,
    },

  }







  return (
    <Section className="bg-background p-2 flex-col">
      <div className="w-full flex justify-end items-start mb-2">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 max-w-[45rem] bg-gray-100 rounded-sm transition-all duration-300 overflow-hidden"
        >
          <TabsList className="grid grid-cols-6 ">

            {
              Object.entries(tabs).map(([key, tab]) => {
                return (
                  <TabsTrigger
                    key={key}
                    value={tab.activeTab}
                    className={cn(
                      "flex flex-col bg-white items-center gap-1 py-2 cursor-pointer hover:bg-accent",
                      activeTab === tab.activeTab &&
                      "bg-primary text-primary-foreground rounded-md hover:bg-primary"
                    )}
                  >
                    {tab.Icon}
                    <span className="text-sm">{tab.title}</span>
                  </TabsTrigger>
                )
              })
            }
          </TabsList>
        </Tabs>
      </div>

      <Section className="w-full flex-col rounded-sm">

        {tabs[activeTab as keyof typeof tabs]?.component}

      </Section>
    </Section>
  );
};

export default ContentConfig;
