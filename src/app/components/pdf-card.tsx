"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Image from "next/image"; // Importing Image from next/image

interface PdfResource {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
  coverImage: string;
}

interface PdfCardProps {
  pdf: PdfResource;
}

export function PdfCard({ pdf }: PdfCardProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf.pdfUrl;
    link.download = pdf.pdfUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-800/60 border-gray-700 backdrop-blur-sm hover:scale-[1.02] hover:bg-gray-800/80">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-400" />
          <CardTitle className="text-lg text-white">{pdf.title}</CardTitle>
        </div>
        <CardDescription>
          <div className="mt-1 text-gray-300">{pdf.description}</div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-32 rounded-md overflow-hidden">
          <Image
            src={pdf.coverImage}
            alt={pdf.title + " Cover"}
            className="w-full h-full object-cover rounded opacity-90 hover:opacity-100 transition-opacity"
            width={500}
            height={200} 
          />
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        <Button
          variant="default"
          className="w-full flex items-center justify-center cursor-pointer gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all hover:shadow-lg"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
}
