import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.shaobo.beandex",
  appName: "BeanDex",
  webDir: "dist",
  ios: {
    path: "ios/App",
  },
};

export default config;
