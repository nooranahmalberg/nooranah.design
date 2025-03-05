import { slugifyNote } from "@/data/slugify-note";
import Markdown from "react-markdown";
import { visit } from "unist-util-visit";

function remarkLinkPlugin() {
  return function transformer(tree) {
    visit(tree, "text", visitor);
    function visitor(node, index, parent) {
      const regex = /\[\[([^[\]]+)\]\]/g;
      let match;
      const newChildren = [];
      let lastIndex = 0;
      while ((match = regex.exec(node.value)) !== null) {
        const beforeText = node.value.substring(lastIndex, match.index);
        if (beforeText) {
          newChildren.push({
            type: "text",
            value: beforeText,
          });
        }
        const content = match[1];
        const [slug, title] = content.includes("|")
          ? content.split("|")
          : [content, content];

        newChildren.push({
          type: "link",
          title: null,
          url: `/notes/${slugifyNote(slug.trim())}`,
          children: [{ type: "text", value: title.trim() }],
        });
        lastIndex = regex.lastIndex;
      }
      const remainingText = node.value.substring(lastIndex);
      if (remainingText) {
        newChildren.push({
          type: "text",
          value: remainingText,
        });
      }
      if (newChildren.length > 0) {
        parent.children.splice(index, 1, ...newChildren);
      }
    }
  };
}

export function NotesRenderer({ content }: { content: string }) {
  return <Markdown remarkPlugins={[remarkLinkPlugin]}>{content}</Markdown>;
}
