import { cn } from "@/lib/utils";
import { File } from "lucide-react";
import { BundledLanguage, codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
  className?: string;
  title?: string;
}

export async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });

  return (
    <div>
      {props.title && (
        <div className="border rounded-t-sm border-gray-200 bg-gray-100 overflow-x-auto">
          <File className="w-4 h-4 inline mr-2" />
          <span className="text-gray-500 font-[Consolas]">{props.title}</span>
        </div>
      )}
      <div
        className={cn("text-sm [&>*]:p-4 [&>*]:border ", props.title ? "[&>*]:rounded-b-md" : "[&>*]:rounded-md", props.className)}
        dangerouslySetInnerHTML={{ __html: out }}
      />
    </div>
  );
}
