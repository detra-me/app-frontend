/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ThemeType, useTheme } from "@nextui-org/react";
import ParticleLight from "./particles-light.json";
import ParticleDark from "./particles-dark.json";
import ParticleMobile from "./particles-mobile.json";
import { ISourceOptions } from "tsparticles-engine";
import { isMobile } from "react-device-detect";

const Practice = () => {
  const tType: ThemeType = useTheme().type as ThemeType;

  const params = {
    dark: ParticleDark,
    light: ParticleLight,
  };

  const param = useMemo(() => {
    const base = params[tType] || params.dark;

    return isMobile ? { ...base, ...ParticleMobile } : base;
  }, [tType, isMobile]);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={param as ISourceOptions}
    />
  );
};

export default Practice;
