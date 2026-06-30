import { useEffect, useState } from "react";

import Hero from "../../components/ui/Hero";
import AnnouncementPreview from "../../components/ui/AnnouncementPreview";
import Programs from "../../components/ui/Program";
import StartupPreview from "../../components/ui/StartupPreview";
import EventPreview from "../../components/ui/EventPreview";
import CTA from "../../components/ui/CTA";
import Stats from "../../components/ui/Stats";

import {
getHeroSlides,
getStatistics,
getPrograms,
getStartups,
getEvents,
getAnnouncements,
} from "../../services/homeApi";

export default function Home() {
const [heroSlides, setHeroSlides] = useState<any[]>([]);
const [stats, setStats] = useState<any[]>([]);
const [announcements, setAnnouncements] = useState<any[]>([]);
const [programs, setPrograms] = useState<any[]>([]);
const [startups, setStartups] = useState<any[]>([]);
const [events, setEvents] = useState<any[]>([]);

useEffect(() => {
getHeroSlides().then(setHeroSlides);
getStatistics().then(setStats);
getAnnouncements().then(setAnnouncements);
getPrograms().then(setPrograms);
getStartups().then(setStartups);
getEvents().then(setEvents);
}, []);

if (!heroSlides.length) {
return ( <div className="flex min-h-screen items-center justify-center">
Loading... </div>
);
}

return (
<> <Hero slides={heroSlides} />
 <Stats stats={stats} />

  <AnnouncementPreview
    announcements={announcements}
  />

  <Programs programs={programs} />

  <StartupPreview startups={startups} />

  <EventPreview events={events} />

  <CTA />
</>


);
}
