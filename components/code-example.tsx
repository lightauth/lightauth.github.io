import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Info } from "lucide-react";
import { CodeBlock } from "./code-block";

export default function CodeExample() {
  return (
    <section id="documentation" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple Implementation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get up and running with just a few lines of code. Light-Auth is
            designed to be easy to implement in any project.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl">
          <Tabs defaultValue="nextjs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger value="nextjs">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                    src="/nextjs.svg"
                    alt="NextJS Logo"
                    width={30}
                    height={30}
                    className="w-8 h-8"
                  />
                  <span className="text-sm text-gray-500">NextJS</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="astro">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                    src="/astro.svg"
                    alt="NextJS Logo"
                    width={30}
                    height={30}
                    className="w-8 h-8"
                  />
                  <span className="text-sm text-gray-500">Astro</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="express">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                    src="/express.svg"
                    alt="Express Logo"
                    width={30}
                    height={30}
                    className="w-8 h-8"
                  />
                  <span className="text-sm text-gray-500">Express</span>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="nextjs">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 text-sm text-gray-500">
                    Install the NextJS package:
                  </div>
                  <pre className="rounded-md bg-gray-800 p-4 text-sm text-white overflow-x-auto">
                    <code>{`npm i @ligh-auth/nextjs artic`}</code>
                  </pre>
                  <div className="my-4 text-sm text-gray-500">
                    Add the following code to your Next.js project to set up
                    Light-Auth
                  </div>
                  <pre className="rounded-md bg-slate-100 p-1 mb-4 text-sm  overflow-x-auto">
                    <code>{`/app/lib/auth.ts`}</code>
                  </pre>
                  <div className="rounded-md bg-blue-100 border-blue-600 border p-1 mb-4 text-sm overflow-x-auto gap-2">
                    <Info className="h-4 w-4 text-blue-500 inline-block mr-2" />
                    You can use any path. Remember this path will be used
                    everywhere as it contains all the required exports. You can
                    choose &nbsp;
                    <span className="text-blue-500 font-mono border border-blue-200 rounded-md px-2">
                      "/app/auth.ts"
                    </span>
                    <span> or&nbsp;</span>
                    <span className="text-blue-500 font-mono border border-blue-200 rounded-md px-2">
                      "/app/lib/light-auth.ts"
                    </span>
                    <span> or any valid path you want.</span>
                  </div>
                  <CodeBlock lang="ts">
                    {`import { CreateLightAuth } from "@light-auth/nextjs";
import { Google } from "artic";                                        

export const { providers, handlers, signIn, signOut, getSession, getUser } =
  CreateLightAuth({
    providers: [
      {
        providerName: "google",
        artic: new Google(
          process.env.GOOGLE_CLIENT_ID || "",
          process.env.GOOGLE_CLIENT_SECRET || "",
          "http://localhost:3000/api/auth/callback/google"
        ),
      },
    ],
  });`}
                  </CodeBlock>
                  <pre className="rounded-md bg-gray-800 p-4 text-sm text-white overflow-x-auto">
                    <code></code>
                  </pre>

                  <div className="my-4 text-sm text-gray-500">
                    Add the handlers to your Next.js API routes:
                  </div>
                  <pre className="rounded-md bg-slate-100 p-1 mb-4 text-sm overflow-x-auto">
                    <code>{`/app/api/auth/[...lighauth]/route.ts`}</code>
                  </pre>
                  <div className="rounded-md bg-blue-100 border-blue-600 border p-1 mb-4 text-sm overflow-x-auto gap-2">
                    <Info className="h-4 w-4 text-blue-500 inline-block mr-2" />
                    You can use any path you want for the handlers, like&nbsp;
                    <span className="text-blue-500 font-mono border border-blue-200 rounded-md px-2">
                      "/app/my-auth/[...whatever]/route.ts"
                    </span>
                    <span>. Add the&nbsp;</span>
                    <span className="text-blue-500 font-mono border border-blue-200 rounded-md px-2">
                      basePath
                    </span>
                    <span>
                      &nbsp;to your Light-Auth config when invoking&nbsp;
                    </span>
                    <span className="text-blue-500 font-mono border border-blue-200 rounded-md px-2">
                      CreateLightAuth()
                    </span>
                  </div>
                  <pre className="rounded-md bg-gray-800 p-4 text-sm text-white overflow-x-auto">
                    <code>{`import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;`}</code>
                  </pre>

                  <div className="my-4 text-sm text-gray-500">
                    Now that everything is correctly configured, you can add a
                    signin action to sign in users:
                  </div>
                  <pre className="rounded-md bg-slate-100 p-1 mb-4 text-sm  overflow-x-auto">
                    <code>{`/app/page/login.tsx`}</code>
                  </pre>
                  <pre className="rounded-md bg-gray-800 p-4 text-sm text-white overflow-x-auto">
                    <code>{`import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (                    
    <form action={async () => {
      "use server";
      await signIn("google");
    }}>
      <Button type="submit">Google</Button>
    </form>
  );
}`}</code>
                  </pre>

                  <div className="my-4 text-sm text-gray-500">
                    Once your user is signed in, you can use the session and
                    user functions to get the user session and user data:
                  </div>
                  <pre className="rounded-md bg-slate-100 p-1 mb-4 text-sm  overflow-x-auto">
                    <code>{`/app/page.tsx`}</code>
                  </pre>
                  <pre className="rounded-md bg-gray-800 p-4 text-sm text-white overflow-x-auto">
                    <code>{`import { getSession } from "@/lib/auth";

export default async function Home() {
  const session = await getSession();
  return (
    <main>
    {session != null ? (
      <div>Welcome {session.name}</div>
    ) : (
      <div>Please sign in.</div>
    )}
    </main>
  )}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="astro">
              <Card>
                <CardContent className="pt-6">
                  <pre className="rounded-md bg-gray-900 p-4 text-sm text-white overflow-x-auto">
                    <code>{`import express from 'express';
import { LightAuth } from 'light-auth-node';

const app = express();
app.use(express.json());

// Initialize Light-Auth
const auth = new LightAuth({
  apiKey: process.env.LIGHT_AUTH_API_KEY,
  domain: 'your-app.com'
});

// Middleware to protect routes
const requireAuth = auth.requireAuth();

// Public route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await auth.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// Protected route
app.get('/api/profile', requireAuth, (req, res) => {
  // req.user contains the authenticated user
  res.json({ user: req.user });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="express">
              <Card>
                <CardContent className="pt-6">
                  <pre className="rounded-md bg-gray-900 p-4 text-sm text-white overflow-x-auto">
                    <code>{`from flask import Flask, request, jsonify
from light_auth import LightAuth

app = Flask(__name__)

# Initialize Light-Auth
auth = LightAuth(
    api_key=os.environ.get('LIGHT_AUTH_API_KEY'),
    domain='your-app.com'
)

# Login route
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    try:
        token = auth.login(data['email'], data['password'])
        return jsonify({'token': token})
    except Exception as e:
        return jsonify({'error': str(e)}), 401

# Protected route
@app.route('/api/profile', methods=['GET'])
@auth.require_auth
def profile():
    # g.user contains the authenticated user
    return jsonify({'user': g.user})

if __name__ == '__main__':
    app.run(debug=True)`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
