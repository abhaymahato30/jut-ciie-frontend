interface StatsProps {
stats: any[];
}

export default function Stats({ stats }: StatsProps) {
return ( <section className="relative z-20 -mt-14 px-6"> <div className="container-custom"> <div className="overflow-hidden rounded-3xl bg-white shadow-2xl"> <div className="grid grid-cols-2 md:grid-cols-4">
{stats.map((stat, index) => (
<div
key={stat.id}
className={`                   animate-fadeUp
                  group p-8 text-center transition-all duration-300
                  hover:-translate-y-2
                  hover:bg-gray-50
                  ${
                    index !== stats.length - 1
                      ? "border-b border-gray-100 md:border-b-0 md:border-r"
                      : ""
                  }
                `}
> <h3 className="text-4xl font-bold text-black md:text-5xl">
{stat.value}
{stat.icon} </h3>


            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-gray-700 md:text-base">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


);
}
