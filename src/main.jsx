import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ClerkProvider } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const address = import.meta.env.VITE_CONVEX_URL;

const convex = new ConvexReactClient(address);
const clerk = "pk_test_YXJyaXZpbmctaGFsaWJ1dC02Mi5jbGVyay5hY2NvdW50cy5kZXYk"

ReactDOM.render(
  <StrictMode>
    <ClerkProvider
      publishableKey={clerk}
    >
    <ConvexProviderWithClerk client={convex}>
      <App />
    </ConvexProviderWithClerk>
    </ClerkProvider>
  </StrictMode>,
  document.getElementById("root")
);
