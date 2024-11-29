"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { getcategoriesData } from "@/app/action";

export default function page() {
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const result = await getcategoriesData();
    setCategories(result);
    console.log("categories", result);
  };

  return (
    <div className="w-full lg:w-full  mt-8">
      <div className="gap-4 flex flex-col">
        <Button asChild className="flex items-center gap-x-2 w-36">
          <Link href="./categories/create" className="flex items-center">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Categoreis</span>
          </Link>
        </Button>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Categoreis</CardTitle>
            <CardDescription>View all your Categoreis</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories &&
                  categories.map((item: any, index: number) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Image
                          src={item.images}
                          width={64}
                          height={64}
                          alt="banner"
                          className="rounded-md object-cover h-16 w-16"
                        />
                      </TableCell>
                      <TableHead>{item.name}</TableHead>
                      <TableHead>{item.description}</TableHead>
                      <TableHead>{item.createAt.toDateString()}</TableHead>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size={"icon"}>
                              <MoreHorizontal className="w-5 h-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className=" text-left py-2 border border-gray-300 border-opacity-50 rounded-lg"
                          >
                            <DropdownMenuLabel>Action</DropdownMenuLabel>
                            <DropdownMenuSeparator className="mt-1" />
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/admin/categories/${item.id}/delete`}
                              >
                                delete
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
