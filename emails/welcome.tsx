import {
  Button,
  Container,
  Link,
  Section,
  Text,
} from "@react-email/components";
import MainLayout from "../layouts/MainLayout";

interface WelcomeEmailProps {
  userName: string;
  discordUrl: string;
  whatsappUrl: string;
  twitterUrl: string;
  supportEmail: string;
}

const WelcomeEmail = ({
  userName,
  discordUrl,
  whatsappUrl,
  twitterUrl,
  supportEmail,
}: WelcomeEmailProps) => {
  return (
    <MainLayout showFooter={false} showHeader={false}>
      <Container>
        <Section className="mb-8">
          <Text className="font-light text-medium">
            Hey {userName}, <br /> Aryan here – one of the founders of GAIA{" "}
            <br />
            <br />
            Just wanted to say thanks for signing up.
            <br />
            <br />
            We've been working on this day and night for months, and it means a
            lot to have you here early. We're just getting started, there's a
            ton of features coming soon that we're really excited about, and
            your feedback will shape a lot of it.
            <br />
            <br />
            If you ever need anything, feel free to send me an email at
            <Link href={`mailto:${supportEmail}`} className="px-1">
              {supportEmail}
            </Link>
            or just reply to this email. I make sure to read all my emails :)
            <br />
            <br />
            Also, if you want to stay in the loop, feel free to join our{" "}
            <Link href={discordUrl}>Discord</Link>,{" "}
            <Link href={whatsappUrl}>WhatsApp</Link>, or follow our{" "}
            <Link href={twitterUrl}>Twitter</Link>
            .
            <br />
            <br />
            Glad you're here.
            <br />
            <br />
            Best,
            <br /> Aryan
          </Text>
          <Section className="mt-6 mb-6">
            <Button
              href="https://heygaia.io/login"
              style={{
                backgroundColor: "#00bbff",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "normal",
                fontSize: "14px",
                display: "inline-block",
              }}
            >
              Get Started
            </Button>
          </Section>
        </Section>
      </Container>
    </MainLayout>
  );
};

WelcomeEmail.PreviewProps = {
  userName: "Dhruv",
  discordUrl: "https://discord.heygaia.io",
  whatsappUrl: "https://whatsapp.heygaia.io",
  twitterUrl: "https://twitter.com/_heygaia",
  supportEmail: "aryan@heygaia.io",
};

export default WelcomeEmail;
