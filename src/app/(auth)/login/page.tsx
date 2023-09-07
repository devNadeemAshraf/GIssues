"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { GithubIcon } from "lucide-react";

import { handleSignInWithGithub } from "@/helper/auth";

export default function Login() {
  return (
    <Card className="min-w-[320px]">
      <CardHeader>
        <CardTitle>GIssues</CardTitle>
        <CardDescription>Github Issues on the go</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleSignInWithGithub}
          className="w-full flex items-center justify-between"
        >
          Sign in with Github <GithubIcon className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
