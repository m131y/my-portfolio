import { Badge, Button, Card } from "@radix-ui/themes";
import { FaGithub, FaBuilding, FaCalendarDays, FaLink } from "react-icons/fa6";

const ContactSection = ({ contact }) => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
      </div>
    </section>
  );
};

export default ContactSection;
