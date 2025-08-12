import { Badge, Card } from "@radix-ui/themes";
import { FaBuilding, FaCalendarDays } from "react-icons/fa6";

const WritingSection = ({ writing, talks, openSource }) => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Writing & Contribution
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="mb-6">Work Experience</h3>
          </div>

          <div>
            <h3 className="mb-6">Education</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
