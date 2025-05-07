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
      setIsShowTooltip(
        textRef.current.scrollHeight > textRef.current.clientHeight
      );
    }
  }, []);

  if (isShowTooltip) {
    return (
      <Tooltip closeOnScroll variant="light" content={text} position="top">
        <div ref={textRef}>{children}</div>
      </Tooltip>
    );
  }

  return <div ref={textRef}>{children}</div>;
};

export default TextTooltip;
