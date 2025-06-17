import { useState, useEffect, useRef } from "react";
import Tooltip from "@ff/ui-kit/lib/Tooltip";

type Props = {
  text: string;
  children: React.ReactNode;
};

const TextTooltip = ({ text, children }: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const range = document.createRange();
      range.selectNodeContents(textRef.current);
      const rect = range.getBoundingClientRect();
      const elRect = textRef.current.getBoundingClientRect();

      if (rect.height > elRect.height) {
        setIsShowTooltip(true);
      }
    }
  }, []);

  if (isShowTooltip) {
    return (
      <Tooltip variant="light" content={text} position="top">
        <div ref={textRef}>{children}</div>
      </Tooltip>
    );
  }

  return <div ref={textRef}>{children}</div>;
};

export default TextTooltip;
