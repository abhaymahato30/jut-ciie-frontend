import { useEffect, useState } from "react";
import { getLabs } from "../services/homeApi";

interface Lab {
  id: number;
  name: string;
  shortDescription: string;
  featured: boolean;
  image?: {
    url: string;
  };
}

export default function LabsPage() {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const data = await getLabs();
        setLabs(data);
      } catch (error) {
        console.error("Failed to fetch labs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLabs();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading labs...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#1A2D2C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 !text-white">
            Innovation & Research Labs
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the laboratories and innovation facilities available at JUT
            CIIE.
          </p>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => {
         const imageUrl = lab.image?.url || "https://via.placeholder.com/600x400?text=Lab";

            return (
              <div
                key={lab.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={imageUrl}
                  alt={lab.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  {lab.featured && (
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      Featured
                    </span>
                  )}

                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {lab.name}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {lab.shortDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}