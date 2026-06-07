import { Clipboard } from "lucide-react";
import ReactDOMServer from "react-dom/server";
import { useRef } from "react";

export const CodeBlock = ({ code }) => {
  const refs = useRef();
  const handleCopy = async () => {
    try {
      let htmlCode = ReactDOMServer.renderToStaticMarkup(code);
      await navigator.clipboard.writeText(htmlCode);
      console.log("Copied!");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="relative bg-[#2c292d33]  p-2 rounded-xl">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md  transition"
      >
        <Clipboard size={14} className="text-white/70" />
      </button>

      {/* Code */}
      <pre ref={refs} className="text-[13px] text-white/70 overflow-x-auto">
        {code}
      </pre>
    </div>
  );
};
