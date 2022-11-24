import { motion } from "framer-motion";

// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => {
//     const delay = 1 + i * 0.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 },
//       },
//     };
//   },
// };

export default function Shield() {
    const transition = { duration: 2, yoyo: Infinity, ease: "easeInOut" }

  return (
    <svg
      width="600"
      height="315"
      viewBox="0 0 24 24"
      fill="secondary"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.865 5.12377C19.302 5.27677 19.594 5.68877 19.594 6.15177V12.9248C19.594 14.8178 18.906 16.6248 17.691 18.0248C17.08 18.7298 16.307 19.2788 15.486 19.7228L11.928 21.6448L8.364 19.7218C7.542 19.2778 6.768 18.7298 6.156 18.0238C4.94 16.6238 4.25 14.8158 4.25 12.9208V6.15177C4.25 5.68877 4.542 5.27677 4.979 5.12377L11.561 2.81077C11.795 2.72877 12.05 2.72877 12.283 2.81077L18.865 5.12377Z"
        stroke="#0072F5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        d="M9.32251 11.9177L11.2145 13.8107L15.1125 9.91272"
        stroke="#f5902b"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
      />
    </svg>
  );
}
