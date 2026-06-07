export const blogs = [
  {
    name: "React - SWR vs React Query",

    codeSnippet: (
      <div className="jetbrains-mono  text-white/70 flex flex-col gap-1 p-4 rounded-xl">
        {/* SWR */}
        <div>
          {"</"}
          <span>
            {"SWR "}
            <span className="!text-amber-300">{`url="/api/user"`}</span>
          </span>
          {">"}
        </div>

        <div className="pl-4">
          {`const { data } = useSWR("/api/user", fetcher);`}
        </div>

        <div>
          {"</"}
          <span>{"SWR"}</span>
          {">"}
        </div>

        {/* spacing */}
        <div className="mt-2" />

        {/* React Query */}
        <div>
          {"</"}
          <span>
            {"ReactQuery "}
            <span className="!text-amber-300">{`queryKey="user"`}</span>
          </span>
          {">"}
        </div>

        <div className="pl-4">{`const { data } = useQuery({`}</div>

        <div className="pl-8">{`queryKey: ["user"],`}</div>

        <div className="pl-8">{`queryFn: fetchUser`}</div>

        <div className="pl-4">{`});`}</div>

        <div>
          {"</"}
          <span>{"ReactQuery"}</span>
          {">"}
        </div>
      </div>
    ),

    description:
      "Visual comparison of SWR and React Query using JSX-based code rendering. SWR is simple and minimal, while React Query offers structured and feature-rich data fetching.",
  },

  {
    name: "JavaScript Closure",

    codeSnippet: (
      <div className="jetbrains-mono! has-[div]:[&_span]:text-yellow-400  has-[div]:[&_div]:text-emerald-400 p-4 rounded-xl flex flex-col gap-1">
        <div>
          <span className="text-pink-400">function</span>{" "}
          <span className="text-yellow-300">outer</span>() {"{"}
        </div>

        <div className="pl-4">
          <span className="text-pink-400">let</span> count ={" "}
          <span className="text-green-400">0</span>;
        </div>

        <div className="pl-4">
          <span className="text-pink-400">return</span>{" "}
          <span className="text-pink-400">function</span>{" "}
          <span className="text-yellow-300">inner</span>() {"{"}
        </div>

        <div className="pl-8">count++;</div>

        <div className="pl-8">
          <span className="text-pink-400">return</span> count;
        </div>

        {/* closing inner */}
        <div className="pl-4">{"}"}</div>

        {/* closing outer */}
        <div>{"}"}</div>

        {/* const counter = outer(); */}
        <div className="mt-2">
          <span className="text-pink-400">const</span> counter ={" "}
          <span className="text-yellow-300">outer</span>();
        </div>

        {/* counter(); */}
        <div>
          counter(); <span className="text-white/40">// 1</span>
        </div>

        <div>
          counter(); <span className="text-white/40">// 2</span>
        </div>
      </div>
    ),

    description:
      "A closure in JavaScript is a function that remembers and can access variables from its outer scope, even after that outer function has finished executing Closures are created automatically whenever a function is defined inside another function",
  },

  {
    name: "Next.js Dynamic Rendering",

    codeSnippet: (
      <div className="scroller jetbrains-mono  has-[div]:[&_div]:text-amber-200 p-4 rounded-xl flex flex-col gap-1 overflow-x-auto">
        <div className="text-white/40">{"// Server Component"}</div>

        <div>
          <span className="text-pink-400">export default</span>{" "}
          <span className="text-pink-400">async function</span>{" "}
          <span className="text-yellow-300">Page</span>() {"{"}
        </div>

        {/* const data = await fetch(...) */}
        <div className="pl-4">
          <span className="text-pink-400">const</span> data ={" "}
          <span className="text-pink-400">await</span>{" "}
          <span className="text-yellow-300">fetch</span>(
          <span className="text-green-400">"https://api.example.com"</span>
          ).then(res =&gt; res.json());
        </div>

        <div className="pl-4">
          <span className="text-pink-400">return</span> {"<"}
          <span className="text-red-400">div</span>
          {">"}
          {"{data.title}"}
          {"</"}
          <span className="text-red-400">div</span>
          {">"};
        </div>

        <div>{"}"}</div>
      </div>
    ),
    description:
      "Example of server-side rendering in Next.js using async components.",
  },

  {
    name: "CSS Specificity Trick",

    codeSnippet: (
      <div className="jetbrains-mono  has-[div]:[&_div]:text-cyan-400 p-4 rounded-xl flex flex-col gap-1">
        {/* p { */}
        <div>
          <span className="text-red-400">p</span> {"{"}
        </div>

        {/* font-weight: bold; */}
        <div className="pl-4">
          font-weight: <span className="text-yellow-300">bold</span>;
        </div>

        {/* } */}
        <div>{"}"}</div>

        {/* .font-medium { */}
        <div className="mt-2">
          <span className="text-green-400">.font-medium</span> {"{"}
        </div>

        {/* font-weight: 500 !important; */}
        <div className="pl-4">
          font-weight: <span className="text-yellow-300">500</span>{" "}
          <span className="text-pink-400">!important</span>;
        </div>

        {/* } */}
        <div>{"}"}</div>
      </div>
    ),

    description: "Shows how !important overrides normal CSS specificity.",
  },
];
