import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Installation - Light-Auth Documentation",
  description: "Learn how to install Light-Auth in your application.",
}

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
      <p className="text-lg text-muted-foreground">
        Learn how to install Light-Auth in your application using different package managers.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Choose Your Installation Method</h2>
        <p>
          Light-Auth can be installed via npm, yarn, or included directly from a CDN. Select the method that best suits
          your project:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <a
            href="/docs/installation/npm"
            className="flex flex-col items-center p-6 bg-white border rounded-lg hover:shadow-md transition-shadow"
          >
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-500" fill="currentColor">
              <path d="M0 0v24h24V0H0zm19.2 19.2H4.8V4.8h14.4v14.4z" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold">npm</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Install using npm package manager</p>
          </a>

          <a
            href="/docs/installation/yarn"
            className="flex flex-col items-center p-6 bg-white border rounded-lg hover:shadow-md transition-shadow"
          >
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-500" fill="currentColor">
              <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.016.248.068.433.247.505.495.058.206.06.418.008.62-.027.135-.065.293-.111.486 1.265.443 2.355.865 3.126 1.71.068.047.12.103.178.155.348.338.668.683.95 1.055 1.763-.62 3.427-.556 4.14-.056.118.083.23.175.323.282.5.569.534 1.265.284 1.961-.199.562-.597 1.102-1.17 1.588-.12.1-.246.196-.376.284-1.967 1.323-4.976 1.215-8.276-.3-.1.083-.25.199-.266.217-.648.405-1.305.703-1.97.886-.193.98-.398.175-.608.232-.109.033-.219.053-.33.065-.214.024-.43.027-.644.008-.575-.051-1.06-.291-1.514-.676-.548-.466-.853-1.066-.889-1.771-.024-.483.058-.95.243-1.398.117-.286.279-.56.476-.817.17-.22.397-.482.728-.731-.443-.618-.809-1.262-1.096-1.932-.178-.403-.329-.819-.455-1.24-.129-.446-.227-.901-.292-1.36-.105-.728.055-1.372.5-1.901.192-.23.43-.396.706-.486.168-.054.34-.08.513-.077Zm.13.638c-.137-.017-.27.022-.396.095-.32.32-.223.535-.135.892.266 1.015.681 1.996 1.245 2.892a4.32 4.32 0 0 1 .435-.21c.138-.058.252-.092.362-.11.132-.024.263-.034.394-.032a1.3 1.3 0 0 1 .623.157c.246.123.473.327.588.62.14.28.14.57.028.835-.117.28-.32.498-.577.667.028.27.047.539.057.807.412-.16.845-.386 1.293-.681-.257-.234-.88-.971-1.15-1.35-1.206-1.704-2.25-3.253-3.267-4.583Zm2.69 4.142a.709.709 0 0 0-.332.057c-.06.023-.154.065-.154.065-.133.08-.24.152-.323.223-.076.067-.285.236-.38.446-.054.12-.08.245-.078.37 0 .12.028.241.082.355.038.08.09.154.151.22.134.145.306.25.496.31a.65.65 0 0 0 .21.029c.068 0 .139-.01.205-.024a1.582 1.582 0 0 0 .328-.13c.243-.116.486-.3.724-.567.092-.102.085-.149-.028-.284a1.41 1.41 0 0 0-.325-.28 1.164 1.164 0 0 0-.575-.196 1.062 1.062 0 0 0-.001 0Zm-3.272.203c-.472.44-.825.845-1.14 1.23.213.21.511.483.855.677a1.8 1.8 0 0 0 .884.258c.197 0 .388-.034.57-.104a2.2 2.2 0 0 0 .47-.23c.475-.281.882-.671 1.225-1.17-.577-.069-1.078-.28-1.491-.652a2.805 2.805 0 0 1-.398-.401c-.189-.244-.348-.531-.437-.842a3.266 3.266 0 0 0-.538 1.234Zm6.358 1.562c-.49.34-.98.635-1.566.885.135.065.21.087.362.181.447.28.913.483 1.403.593.437.092.887.1 1.308-.006.232-.058.454-.142.662-.252.15-.08.309-.183.463-.28.264-.175.471-.391.582-.677a.73.73 0 0 0 .007-.47c-.084-.216-.27-.369-.438-.445-.239-.108-.51-.15-.791-.152-.764.004-1.538.247-1.993.623ZM6.214 9.859c.8.5.214.154.396.351.176.19.394.394.666.591.562.41 1.324.733 2.28.948.32.07.648.123.982.16a1.724 1.724 0 0 0-.067-.185 2.162 2.162 0 0 0-.189-.342c-.262-.41-.678-.843-1.35-1.257-.2-.122-.353-.207-.517-.277a2.336 2.336 0 0 0-.575-.154 1.813 1.813 0 0 0-.295-.02c-.43.007-.954.056-1.332.185Z" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold">yarn</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Install using yarn package manager</p>
          </a>

          <a
            href="/docs/installation/cdn"
            className="flex flex-col items-center p-6 bg-white border rounded-lg hover:shadow-md transition-shadow"
          >
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-gray-800" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold">CDN</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Include via CDN for quick prototyping</p>
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-8">System Requirements</h2>
        <p>Light-Auth is compatible with:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Node.js 14.x or higher</li>
          <li>Modern browsers (Chrome, Firefox, Safari, Edge)</li>
          <li>React 16.8+ for the React integration</li>
          <li>Vue 3+ for the Vue integration</li>
          <li>Angular 13+ for the Angular integration</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Next Steps</h2>
        <p>
          After installation, follow our{" "}
          <a href="/docs/tutorial" className="text-blue-600 hover:underline">
            tutorial
          </a>{" "}
          to implement authentication in your application.
        </p>
      </div>
    </div>
  )
}
