import {
  Column,
  Container,
  Heading,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import MainLayout from "../layouts/MainLayout";

interface SupportConfirmationEmailProps {
  ticketId: string;
  requestTypeLabel: string;
  title: string;
  description: string;
  userName: string;
  expectedResponseTime: string;
}

const SupportConfirmationEmail = ({
  ticketId = "TICKET-12345",
  requestTypeLabel = "Support Request",
  title = "This is the title",
  userName = "Jane Doe",
  description = "This is the description",
  expectedResponseTime = "24 hours",
}: SupportConfirmationEmailProps) => {
  return (
    <MainLayout>
      <Container>
        <Section className="text-center mb-10" align="center">
          <Row>
            <Column align="center">
              <Img
                src="https://res.cloudinary.com/dwhuiazdn/image/upload/72558_d7yn3s.png"
                width={100}
                height={100}
                className="object-contain"
              />
            </Column>
          </Row>
          <Heading className="mb-2">We're on it!</Heading>
          <Text className="text-base text-gray-600 m-0 leading-relaxed">
            Thanks for reaching out, {userName}
          </Text>
        </Section>

        <Section className="bg-gray-100 rounded p-6 mb-4">
          <Text className="text-xs font-medium text-gray-500 m-0 mb-2 uppercase tracking-wide">
            {requestTypeLabel} #{ticketId}
          </Text>
          <Text className="text-lg text-gray-900 m-0 font-medium leading-snug mb-1">
            {title}
          </Text>
          <Text className="text-sm text-gray-700 m-0 leading-relaxed">
            {description}
          </Text>
        </Section>

        <Section className="mb-8">
          <Heading as="h4">
            Your request has been received and assigned to our support team!
          </Heading>

          <Text>Here's what happens next:</Text>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#00bbff] rounded-full mr-4"></div>
              <Text className="text-sm text-gray-700 m-0">
                Our team will review your request within the next few hours
              </Text>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#00bbff] rounded-full mr-4"></div>
              <Text className="text-sm text-gray-700 m-0">
                You'll receive a response within {expectedResponseTime}
              </Text>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#00bbff] rounded-full mr-4"></div>
              <Text className="text-sm text-gray-700 m-0">
                We'll work together until everything is resolved
              </Text>
            </div>
          </div>
        </Section>

        <Section>
          <Text className="text-sm text-gray-900 m-0">Best Regards,</Text>
          <Text className="text-sm text-gray-900 m-0 font-medium">
            GAIA Support Team
          </Text>
        </Section>
      </Container>
    </MainLayout>
  );
};

SupportConfirmationEmail.PreviewProps = {
  ticketId: "TICKET-12345",
  requestTypeLabel: "Support Request",
  userName: "Jane Doe",
  userEmail: "user@example.com",
  expectedResponseTime: "24 hours",
};

export default SupportConfirmationEmail;
