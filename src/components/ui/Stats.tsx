import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "../common/AnimatedCounter";

interface StatsProps {
  stats: any[];
}

export default function Stats({ stats }: StatsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="relative z-20 -mt-14 px-6">
      <div className="container-custom">
        <div
          ref={ref}
          className="
            relative overflow-hidden rounded-3xl
            border border-slate-200/60
            bg-white/95 backdrop-blur-xl
            shadow-[0_20px_80px_rgba(26,45,44,0.12)]
            hover:shadow-[0_25px_100px_rgba(26,45,44,0.18)]
            transition-all duration-700
          "
        >
          {/* Top Gradient Border */}
          <div
            className="absolute left-0 top-0 h-1 w-full"
            style={{
              background:
                "linear-gradient(90deg,#1A2D2C,#2D4F4D,#3F6B67)",
            }}
          />

          {/* Background Glow */}
          <div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-[#dce8e7] opacity-60 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-[#e6efee] opacity-60 blur-3xl" />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #1A2D2C 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden p-8 text-center"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-[#F4F8F7] via-white to-[#EAF3F2]" />
                </div>

                {/* Vertical Separator */}
                {index !== stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-20 -translate-y-1/2 md:block">
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                  </div>
                )}

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    background:
                      "linear-gradient(90deg,#1A2D2C,#3F6B67)",
                  }}
                />

                <div className="relative z-10">
                  {/* Counter */}
                  <h3 className="text-4xl font-extrabold md:text-5xl">
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg,#1A2D2C,#2D4F4D,#3F6B67)",
                        filter:
                          "drop-shadow(0 0 12px rgba(26,45,44,0.25))",
                      }}
                    >
                      {inView ? (
                        <AnimatedCounter
                          value={parseInt(stat.value)}
                        />
                      ) : (
                        0
                      )}
                      {stat.icon}
                    </span>
                  </h3>

                  {/* Title */}
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 md:text-sm">
                    {stat.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}