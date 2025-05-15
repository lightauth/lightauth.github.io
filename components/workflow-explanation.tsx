export default function WorkflowExplanation() {
  return (
    <div className="space-y-4">
      <p className="text-slate-700 dark:text-slate-300">The Light-Auth framework provides a streamlined authentication workflow for SSR applications:</p>

      <ol className="space-y-4 mt-4">
        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 font-medium mr-3">
            1
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">User Initiates Login</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              The user clicks a login button in your application, which triggers a request to Light-Auth.
            </p>
          </div>
        </li>

        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 font-medium mr-3">
            2
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">OAuth2/OpenID Provider Authentication</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Light-Auth redirects the user to the selected authentication provider (Google, GitHub, Microsoft, etc.) where they authenticate.
            </p>
          </div>
        </li>

        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 font-medium mr-3">
            3
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">Token Exchange</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              After successful authentication, the provider returns an authorization code. Light-Auth exchanges this code for tokens (JWT, access token, refresh
              token) and user information.
            </p>
          </div>
        </li>

        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 font-medium mr-3">
            4
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">Session Creation</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Light-Auth extracts essential authentication data (userId, sessionId, email, expirationDate) and creates a Session object. This is stored in a
              cookie via the SessionStore.
            </p>
          </div>
        </li>

        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 font-medium mr-3">
            5
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">User Data Storage</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Light-Auth creates a User object with complete metadata (access token, refresh token, provider details, etc.) and stores it in a backend store via
              the UserAdapter.
            </p>
          </div>
        </li>

        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 font-medium mr-3">
            6
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">Data Retrieval</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              In your application, you can access the session data with{" "}
              <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getSession()</code> for quick authentication checks, and the
              complete user data with <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getUser()</code> when needed.
            </p>
          </div>
        </li>
      </ol>

      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-6">
        <div className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-500 mr-3 mt-0.5"
          >
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
          <div>
            <h4 className="font-medium text-amber-800 dark:text-amber-400">Key Benefit</h4>
            <p className="text-amber-700 dark:text-amber-500 mt-1">
              This separation allows Light-Auth to maintain essential authentication data in cookies for quick access while storing larger user metadata in a
              more appropriate backend storage solution, avoiding cookie size limitations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
