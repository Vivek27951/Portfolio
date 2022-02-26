import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, stagger, routeAnimation } from "../animation";

const index = () => {
  return (
    <motion.div
      variants={routeAnimation} initial="initial" animate="animate" exit="exit"
      className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="my-3 text-base font-medium ">
        2022 undergraduate student from Birla Institute of Technology, Mesra
        having proficiency in Data Structures and Algorithms and a keen interest
        to learn and work on impactful Full Stack Web Development projects.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">what I offer</h6>

        <motion.div
          className="grid gap-6 my-3 lg:grid-cols-2"
          variants={stagger} initial="initial" animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service} key={service.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
