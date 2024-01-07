import { SignIn } from "@clerk/clerk-react";
import { Flex } from "antd";

export default function SignInPage() {
  return (
    <Flex
      vertical={false}
      justify="center"
      align="center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </Flex>
  );
}
