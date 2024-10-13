import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";

export default function Page() {
  return (
    <main>
      <H1>Your Account</H1>

      <ContentBlock>
        <p>You are logged in as ...</p>
      </ContentBlock>
    </main>
  );
}
