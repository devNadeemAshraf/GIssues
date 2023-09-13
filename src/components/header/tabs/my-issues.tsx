"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import TabsWrapper from "./tabs-wrapper";

import axios from "axios";

import { IIssues } from "@/types/issues";

// TEST
// Right now its not showing all the issues fetched from API
import { testIssue } from "../../../../testissue";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function MyIssues() {
  const [issues, setIssues] = useState<IIssues[]>([testIssue]);
  const { data } = useSession();

  console.log(testIssue);

  const getMyIssues = async () => {
    const apiResp = await axios.post("http://localhost:3000/api/git/myissues", {
      token: data?.accessToken,
    });
    console.log(apiResp);
  };

  useEffect(() => {
    // if (data?.accessToken) {
    //   getMyIssues();
    // }
  }, [data?.accessToken]);

  return (
    <TabsWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.length === 0 ? (
            <TableRow>
              <TableCell className="font-medium text-center">
                Looks like there are no issues assigned to you yet!
              </TableCell>
            </TableRow>
          ) : (
            issues.map((issue, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{issue.id}</TableCell>
                  <TableCell className="capitalize text-green-500">
                    {issue.state}
                  </TableCell>
                  <TableCell>{issue.title}</TableCell>
                  <TableCell>{issue.body}</TableCell>
                  <TableCell>{`${new Date(
                    issue.created_at
                  ).toUTCString()}`}</TableCell>
                  <TableCell>
                    <a href={issue.html_url} target="_blank" className="underline">
                      Open Issue
                    </a>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TabsWrapper>
  );
}
