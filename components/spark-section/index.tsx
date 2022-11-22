import React, { memo, ReactChild } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Section } from "@primitives";
import { isMobile } from "react-device-detect";

export const SparkSection = ({ children }: { children: ReactChild }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const mobileVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={!isMobile ? boxVariant : mobileVariants}
      animate={control}
      initial="hidden"
    >
      <Section>{children}</Section>
    </motion.section>
  );
};

export default memo(SparkSection);
