import ArticalDetail from "@/components/articalDetail";
import Navbar from "@/components/navbar";
import RichTextEditor from "@/components/richTextEditor";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Navbar />
      <div className="h-[100dvh] w-full flex flex-col mt-2">
        <ArticalDetail id={params.id} />
        <RichTextEditor />
      </div>
    </>
  );
};

export default page;
