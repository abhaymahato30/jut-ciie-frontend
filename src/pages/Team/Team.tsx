import { useEffect, useState } from "react";
import { getTeamMembers } from "../../services/homeApi";

export default function Team() {
const [members, setMembers] = useState<any[]>([]);

useEffect(() => {
getTeamMembers().then(setMembers);
}, []);

return ( <section className="bg-background py-24"> <div className="container-custom px-6">


    {/* Header */}
    <div className="mb-16 text-center">
      <span className="text-secondary text-sm font-semibold uppercase tracking-[3px]">
        Our Leadership
      </span>

      <h1 className="font-heading mt-4 text-4xl text-primary md:text-5xl">
        Meet Our Team
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-gray-600">
        Driving innovation, incubation and entrepreneurship
        across Jharkhand through leadership, mentorship,
        industry collaboration and startup support.
      </p>
    </div>

    {/* Team Members */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => {
        const imageUrl = member?.photo?.[0]?.url || "";
        return (
          <div
            key={member.id}
            className="group rounded-3xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Photo */}
            <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-secondary/20">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-primary text-4xl font-bold text-white">
                  {member.name?.charAt(0)}
                </div>
              )}
            </div>

            {/* Name */}
            <h3 className="font-heading text-2xl text-primary">
              {member.name}
            </h3>

            {/* Designation */}
            <p className="mt-2 font-medium text-secondary">
              {member.designation}
            </p>

            {/* Divider */}
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-secondary" />

            {/* LinkedIn */}
            {member.linkidin && (
              <a
                href={member.linkidin}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-secondary"
              >
                View Profile →
              </a>
            )}
          </div>
        );
      })}
    </div>

  </div>
</section>


);
}
