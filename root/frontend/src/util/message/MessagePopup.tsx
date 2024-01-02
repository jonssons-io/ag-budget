import { useEffect } from "react";
import { message } from "antd";
import { useAtomValue } from "jotai";
import { messageSettingsAtom } from "../../state/atoms";

export default function MessagePopup() {
  const [messageApi, contextHolder] = message.useMessage();
  const messageSettings = useAtomValue(messageSettingsAtom);
  useEffect(() => {
    if (messageSettings) {
      messageApi.open({
        key: messageSettings.key,
        type: messageSettings.type,
        content: messageSettings.content,
        duration: messageSettings.duration,
      });
    }
  }, [messageSettings, messageApi]);
  return <div>{contextHolder}</div>;
}
