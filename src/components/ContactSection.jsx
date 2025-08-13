import { Badge, Button, Card } from "@radix-ui/themes";
import {
  FaRegEnvelope,
  FaGithub,
  FaBuilding,
  FaCalendarDays,
  FaLink,
  FaRegCommentDots,
} from "react-icons/fa6";

const ContactSection = ({ contact }) => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Contact
        </h2>
        <Card size="3">
          <p className="text-lg mb-8 text-center">{contact.cta}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="3">
              <a href={`mailto:${contact.email}`}>
                <FaRegEnvelope className="w-5 h-5 mr-2" />
                Email 보내기
              </a>
            </Button>
            <Button asChild size="3" variant="outline">
              <a href={`mailto:${contact.kakao_openchat_url}`}>
                <FaRegCommentDots className="w-5 h-5 mr-2" />
                Kakao 오픈채팅
              </a>
            </Button>
          </div>

          <div className="mt-6 text-sm text-center">{contact.email}</div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
