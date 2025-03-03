"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="flex-1" variant="outline">
        <FcGoogle className="size-5" />
      </Button>
      <Button size="lg" className="flex-1" variant="outline">
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
}
