import { SignUp } from "@clerk/clerk-react";
import { Flex } from "antd";

export default function SignUpPage() {
  return (
    <Flex
      vertical={false}
      justify="center"
      align="center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <SignUp />
    </Flex>
  );
}
