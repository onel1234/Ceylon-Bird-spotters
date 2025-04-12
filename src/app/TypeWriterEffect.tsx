import React, { useEffect } from "react";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  // Convert words array to have each word split into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(
                `dark:text-white text-black opacity-0 hidden font-[Poppins] `,
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );
  
  return (
    <div className={cn("text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-6 md:h-8 lg:h-10 text-teal-700", cursorClassName)}
      />
    </div>
  );
};

export default TypewriterEffect;