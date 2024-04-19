import { Profile } from "@/app/profile"
import { ToastProvider } from "@/components/Toast";
import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <ToastProvider position="top">
        <Profile />
        <StatusBar style="light" />
      </ToastProvider>
    </>
  );
}
