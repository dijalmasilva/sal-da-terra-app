import {Slot} from "expo-router";
import {SessionProvider} from "@/hooks/auth/auth-context";

const AppLayout = () => {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  )
}

export default AppLayout
