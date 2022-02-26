import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation } from "../animation";

const resume = () => {

  const variants = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Civil Engineering</h5>
            <p className="font-semibold">
              Birla Institute of Technology (2018-2022)
            </p>
            <p className="my-3">
              I am currently pursuing bachelor of technology in Civil
              Engineering from Birla Institute of Technology-Mesra
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Technology Intern-Automations
            </h5>
            <p className="font-semibold">Microland Limited (2022- on)</p>
            <p className="my-3">
              Design and develop software tools and frameworks to improve the
              performance, throughput, and reporting of our automated testing
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
