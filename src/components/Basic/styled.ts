import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
`;

export const BeamSvg = styled(motion.svg)`
  overflow: visible;
  stroke: #08154d;
  stroke-width: 0.4;
  stroke-linejoin: round;
  stroke-linecap: round;
`;


