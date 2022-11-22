import React, { ReactChild } from "react";
import { motion, useAnimation, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useMeasure } from "react-use";
import { Section } from "@primitives";

export const SparkSection = ({ children }: { children: ReactChild }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [, { x, y }] = useMeasure();

  const springConfig = {
    stiffness: Math.max(700 - x * 120, 0),
    damping: 20 + y * 5,
  };

  const dx = useSpring(x, springConfig);

  const boxVariant = {
    visible: { opacity: 1, scale: [1, 0.99, 1] },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <motion.section
        ref={ref}
        variants={boxVariant}
        animate={control}
        initial="hidden"
        style={{
          x: dx,
        }}
        transition={{
          type: "spring",
          repeatDelay: 1,
        }}
      >
        <Section>{children}</Section>
      </motion.section>
    </>
  );
};

export default SparkSection;
