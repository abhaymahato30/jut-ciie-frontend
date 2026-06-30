import { useEffect, useState } from "react";
import ProgramsPage from "../../components/ui/ProgramsPage";
import { getPrograms } from "../../services/homeApi";

export default function Programs() {
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    getPrograms().then(setPrograms);
  }, []);

  return <ProgramsPage programs={programs} />;
}