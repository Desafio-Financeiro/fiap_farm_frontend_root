import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "fiap_farm_root",
  remotes: {
    inventory: `inventory@${process.env.INVENTORY_APP_URL}`,
    sales: `sales@${process.env.SALES_APP_URL}`,
    analytics: `analytics@${process.env.ANALYTICS_APP_URL}`,
  },
  shareStrategy: "loaded-first",

  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router-dom": { singleton: true },
  },
  dts: false,
  manifest: false,
});
