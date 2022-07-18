export interface content {
  type?: "bold" | "italic" | "underline" | "link";
  content: string;
  link?: string;
}

export interface block {
  type: "header" | "sub-header" | "normal" | "image" | "video" | "code";
  content: content[];
}
