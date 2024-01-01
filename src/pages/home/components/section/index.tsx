import { ReactNode } from "react";

interface SectionProps {
  title: string;
  content?: ReactNode;
  sub_title?: string;
}

export const Section = ({ title, content, sub_title }: SectionProps) => {
  return (
    <div id="section_container" className="mt-8">
      <div id="section_title" className="text-center mb-3">
        <h3 className="font-bold lg:text-lg text-md uppercase text-black">{title}</h3>
      </div>
      <div id="section_sub_title" className="hidden lg:block text-center">
        <h3 className="font-extralight lg:text-xl text-md text-black">{sub_title}</h3>
      </div>
      <div id="section_content">{content}</div>
    </div>
  );
};
