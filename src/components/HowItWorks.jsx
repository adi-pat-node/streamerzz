import { HOW_IT_WORKS_CONTENT } from "../constants";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 2, duration: 0.6, ease: "easeOut" },
    }),
  };
  return (
    <section className="" id="works">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" mb-12 border-t border-neutral-800 text-center"
        >
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <motion.div
              custom={index}
              variants={stepVariants}
              className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between"
              key={index}
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="mb-4 text-neutral-400">{step.description}</p>
              </div>
              <div className="flex justify-center">
                <img src={step.imageSrc} alt="" className="rounded-lg" />
              </div>
              {step.users && (
                <div className="flex justify-center mt-4 items-center">
                  <div className="flex -space-x-2">
                    {step.users.map((user, index) => (
                      <img
                        key={index}
                        src={user}
                        alt=""
                        className="h-8 w-8 rounded-full border-2  border-black"
                      />
                    ))}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg">
                    Connect
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
