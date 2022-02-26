import { FunctionComponent } from "react";
import { Skill } from "../types";
import { motion } from "framer-motion"
const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, level, name },
}) => {

  const bar_width = `${level}`;
  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 10,
        stiffness: 100
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-400 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-400"
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div >
  );
};

export default Bar;
