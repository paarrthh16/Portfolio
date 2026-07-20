import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  Server,
} from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI Engineering" },
  { icon: Code, label: "Full-Stack Development" },
  { icon: Server, label: "Distributed Systems" },
  { icon: Database, label: "Cloud & Databases" },
];

const stats = [
  {
    value: "8.62",
    label: "CGPA",
  },
  {
    value: "3+",
    label: "Flagship Projects",
  },
  {
    value: "2",
    label: "Internships",
  },
  {
    value: "AI + Full Stack",
    label: "Focus",
  },
];

const Profile = () => {
  return (
    <section id="about" className="section-container bg-background-secondary">
      <div className="gradient-blob w-[420px] h-[420px] bg-cyber-teal/20 top-0 right-0 animate-pulse-glow" />

      <div className="container relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
            About
          </span>
          

          <h2 className="mt-5 font-heading text-5xl md:text-6xl font-bold">
            The Engineer Behind the Projects
          </h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-9 text-muted-foreground">
           Building scalable systems, learning relentlessly, and solving
           <span className="text-primary font-medium">
            {" "}meaningful problems.
            </span>
          </p>
        </div>
        </motion.div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-6">

              <p className="text-lg leading-8 text-secondary-foreground">

                I'm <span className="font-semibold text-foreground">Parth Shah</span>, a final-year Computer Science student specializing in{" "}

                <span className="font-semibold text-primary">
                  Artificial Intelligence & Machine Learning
                </span>{" "}

                at{" "}

                <span className="font-semibold text-foreground">
                  VIT Chennai
                </span>.

                I enjoy designing scalable backend systems, building modern full-stack applications, and applying AI where it creates measurable value rather than unnecessary complexity.

              </p>

              <p className="text-lg leading-8 text-muted-foreground">

                Whether it's distributed systems, computer vision, or production-grade APIs, I'm driven by understanding how things work beneath the surface.

                Every project I build is another opportunity to become a better software engineer and create technology that solves real-world problems.

              </p>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-4">

              {stats.map((stat, index) => (

                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="glass-card-hover rounded-2xl p-6 text-center"
                >

                  <h3 className="font-heading text-3xl font-bold gradient-text">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.22em] font-mono text-muted-foreground">
                    {stat.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >

            {highlights.map((item, index) => (

              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="glass-card-hover rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
              >

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">

                  <item.icon className="w-7 h-7 text-primary" />

                </div>

                <h3 className="font-semibold text-lg leading-snug text-foreground">
                  {item.label}
                </h3>

              </motion.div>

            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Profile;