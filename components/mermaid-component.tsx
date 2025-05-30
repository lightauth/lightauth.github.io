"use client";

import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

// Add this function after the imports
const renderFallbackDiagram = () => {
  return (
    <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-lg">
      <div className="text-center text-slate-700 dark:text-slate-300 mb-4">
        <p className="font-medium">Light-Auth Authentication Flow</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 bg-emerald-50 dark:bg-emerald-950/30">
          <h3 className="font-medium text-emerald-700 dark:text-emerald-400 mb-2">Session Management</h3>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Essential data from JWT</li>
            <li>userId, sessionId, email, expirationDate</li>
            <li>Stored in cookie (~4KB limit)</li>
            <li>
              Access via <code className="bg-white dark:bg-slate-800 px-1 rounded">getAuthSession()</code>
            </li>
          </ul>
        </div>
        <div className="border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 bg-emerald-50 dark:bg-emerald-950/30">
          <h3 className="font-medium text-emerald-700 dark:text-emerald-400 mb-2">User Management</h3>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Complete metadata from JWT</li>
            <li>access token, refresh token, etc.</li>
            <li>Stored in backend (file/database)</li>
            <li>
              Access via <code className="bg-white dark:bg-slate-800 px-1 rounded">getUser()</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function MermaidDiagram() {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const initMermaid = async () => {
      if (mermaidRef.current) {
        // Dynamically import mermaid only on the client side
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "loose",
          fontFamily: "inherit",
          flowchart: {
            htmlLabels: true,
            curve: "basis",
          },
        });

        try {
          const { svg } = await mermaid.render(
            "mermaid-svg",
            `
    graph TD
        A["Web App (NextJS, Nuxt ...)"] -->|"Login"| B["Light-Auth"]
        B <-->|"(1) Authentication"| C["OAuth2/OpenID Provider"]
        C -->|"(2) JWT Token"| B
        
        B -->|"(3) Split JWT Data"| D{"Data Distribution"}
        
        D -->|"Essential Auth Data"| E["Session Management"]
        D -->|"Complete Metadata"| F["User Data Management"]
        
        subgraph "Session Management"
            E -->|"Store in Cookie"| G["SessionStore"]
            G -->|"userId, sessionId,<br/>email, expirationDate"| H["Session Object"]
        end
        
        subgraph "User Data Management"
            F -->|"Store in Backend"| J["UserAdapter"]
            J -->|"access token, refresh token,<br/>provider details, etc."| K["User Object"]
        end
    `
          );

          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid rendering error:", error);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = "";
            // Use ReactDOM to render the fallback component
            const root = ReactDOM.createRoot(mermaidRef.current);
            root.render(renderFallbackDiagram());
          }
        }
      }
    };

    if (isMounted) {
      initMermaid();
    }

    // Cleanup function
    return () => {
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = "";
      }
    };
  }, [isMounted]);

  // Show a loading state until client-side rendering is complete
  if (!isMounted) {
    return (
      <div className="flex justify-center items-center p-8 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900">
        <div className="text-slate-500 dark:text-slate-400">Loading diagram...</div>
      </div>
    );
  }

  return (
    <div className="mermaid-container overflow-auto">
      <div ref={mermaidRef} className="flex justify-center" />
    </div>
  );
}
