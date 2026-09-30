import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  GitBranch,
  Github,
  Copy,
  Check,
  Terminal,
  Layers,
  KeyRound,
  Radio,
  Workflow,
  Box,
  Monitor,
  Smartphone,
  Code2,
  ShieldCheck,
  Menu,
  X,
  Plug,
} from "lucide-react";
import "./style.css";

const repo = "https://github.com/bobbybacklogs/ModelHitch";
const docs = `${repo}/blob/main/docs/guide.md`;
const packages = [
  {
    name: "TypeScript",
    sub: "Web, Node.js & React",
    tag: "npm",
    icon: Code2,
    command: "npm install modelhitch",
    url: "https://www.npmjs.com/package/modelhitch",
    detail:
      "The core library. Chat, streaming, tools, discovery, and React hooks.",
  },
  {
    name: "Dart & Flutter",
    sub: "Cross-platform apps",
    tag: "pub.dev",
    icon: Layers,
    command: "dart pub add modelhitch_dart",
    url: "https://pub.dev/packages/modelhitch_dart",
    detail:
      "Provider-neutral types, SSE streaming, and a Flutter secure-storage adapter.",
  },
  {
    name: "Android",
    sub: "Native Kotlin",
    tag: "Maven Central",
    icon: Smartphone,
    command:
      'implementation("io.github.bobbybacklogs.modelhitch:modelhitch-android:0.1.0")',
    url: "https://central.sonatype.com/artifact/io.github.bobbybacklogs.modelhitch/modelhitch-android",
    detail:
      "Coroutine streaming and BYOK credentials backed by Android Keystore.",
  },
  {
    name: ".NET",
    sub: "C# applications",
    tag: "NuGet",
    icon: Box,
    command: "dotnet add package ModelHitch --version 0.1.0",
    url: "https://www.nuget.org/packages/ModelHitch/0.1.0#supportedframeworks-body-tab",
    detail:
      "A native .NET 8 client for chat, streaming, and tool events. Connect directly to an OpenAI-compatible provider or your local bridge.",
  },
  {
    name: "Expo",
    sub: "React Native & Expo",
    tag: "npm",
    icon: Monitor,
    command: "npm install modelhitch modelhitch-expo",
    url: "https://www.npmjs.com/package/modelhitch-expo",
    detail:
      "Metro-safe integration with Expo streaming and SecureStore credentials on iOS and Android.",
  },
];
const providers = [
  "OpenAI",
  "Anthropic",
  "Google Gemini",
  "Vercel AI Gateway",
  "OpenRouter",
  "Groq",
  "Together AI",
  "Hugging Face",
  "DeepSeek",
  "xAI",
  "Mistral",
  "Moonshot",
  "Z.ai",
  "Ollama",
  "LM Studio",
  "vLLM",
  "llama.cpp",
  "KoboldCpp",
  "OpenCode",
  "OpenCode Go",
];
function Mark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M5 25V7l11 12L27 7v18M5 16h22"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function External({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
function CopyButton({ value, className = "" }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(true);
    }
  }
  return (
    <button
      className={`copy ${className}`}
      onClick={copy}
      aria-label={copied ? "Copied" : `Copy ${value}`}
      title={error ? "Select and copy the command manually" : "Copy command"}
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
      <span className="sr-only" role="status">
        {copied
          ? "Copied to clipboard"
          : error
            ? "Clipboard unavailable. Select and copy the command."
            : ""}
      </span>
    </button>
  );
}
function App() {
  const [menu, setMenu] = useState(false);
  const [route, setRoute] = useState("Hosted");
  const [tab, setTab] = useState("TypeScript");
  const [filter, setFilter] = useState("All providers");
  const selected = packages.find((p) => p.name === tab);
  const shown = providers.filter(
    (p) =>
      filter === "All providers" ||
      (filter === "Local models"
        ? ["Ollama", "LM Studio", "vLLM", "llama.cpp", "KoboldCpp"].includes(p)
        : !["Ollama", "LM Studio", "vLLM", "llama.cpp", "KoboldCpp"].includes(
            p,
          )),
  );
  return (
    <>
      <header>
        <a className="brand" href="#">
          <span className="brand-mark">
            <Mark />
          </span>
          ModelHitch<span className="brand-label">/ OPEN SOURCE</span>
        </a>
        <nav className={menu ? "open" : ""} aria-label="Main navigation">
          <a href="#capabilities" onClick={() => setMenu(false)}>
            Capabilities
          </a>
          <a href="#integrations" onClick={() => setMenu(false)}>
            Integrations
          </a>
          <a href="#ecosystem" onClick={() => setMenu(false)}>
            Ecosystem
          </a>
          <External href={docs}>
            Documentation <ArrowUpRight size={13} />
          </External>
        </nav>
        <External href={repo} className="github-nav">
          <Github size={16} /> GitHub <ArrowUpRight size={14} />
        </External>
        <button
          className="menu-toggle"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> THE CONNECTION LAYER FOR AI
            </div>
            <h1>
              Your app.
              <br />
              Any model.
              <br />
              <span>One hitch.</span>
            </h1>
            <p className="hero-description">
              Give your app the freedom to choose.
              <br className="desktop" /> One integration for hosted and local
              AI.
              <br className="desktop" /> Your providers. Your keys. Your rules.
            </p>
            <div className="hero-actions">
              <a href="#get-started" className="button primary">
                Start building <ArrowRight size={17} />
              </a>
              <External href={repo} className="button secondary">
                <Github size={17} /> Explore the source
              </External>
            </div>
            <div className="install-inline">
              <span>$</span>
              <code>npm install modelhitch</code>
              <CopyButton value="npm install modelhitch" />
            </div>
            <div className="hero-notes">
              <span>
                <Check size={13} /> MIT licensed
              </span>
              <span>
                <Check size={13} /> BYOK native
              </span>
              <span>
                <Check size={13} /> Hosted + local
              </span>
            </div>
          </div>
          <div className="routing-art">
            <div className="art-top">
              <span>
                <span className="status-dot" /> ONE API. MANY POSSIBILITIES.
              </span>
              <span>01 / CONNECT</span>
            </div>
            <div className="route-switch" aria-label="Routing illustration">
              {["Hosted", "Local", "Custom"].map((r) => (
                <button
                  key={r}
                  className={route === r ? "active" : ""}
                  aria-pressed={route === r}
                  onClick={() => setRoute(r)}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="graph">
              <div className="app-node">
                <Code2 size={23} />
                <span>Your app</span>
                <small>BUILD WHAT MATTERS</small>
              </div>
              <div className="line vertical-line" />
              <div className="hitch-node">
                <span className="node-mark">
                  <Mark />
                </span>
                <b>ModelHitch</b>
                <small>ONE UNIFIED INTERFACE</small>
              </div>
              <div className="branch-lines">
                <i />
                <i />
                <i />
              </div>
              <div className="provider-nodes">
                {(route === "Hosted"
                  ? ["OpenAI", "Anthropic", "Gemini"]
                  : route === "Local"
                    ? ["Ollama", "LM Studio", "vLLM"]
                    : ["Your API", "Your model", "Your keys"]
                ).map((p, i) => (
                  <div key={p}>
                    <span>
                      {i === 0 ? (
                        <Workflow size={20} />
                      ) : i === 1 ? (
                        <Layers size={20} />
                      ) : (
                        <Plug size={20} />
                      )}
                    </span>
                    <b>{p}</b>
                  </div>
                ))}
              </div>
            </div>
            <div className="art-bottom">
              <span>
                <GitBranch size={13} /> Flexible by design
              </span>
              <span>
                ILLUSTRATED ROUTING <span className="tiny-dot" />
              </span>
            </div>
          </div>
        </section>
        <section className="platform-strip wrap">
          <p>
            ONE ECOSYSTEM.
            <br />
            <strong>WHEREVER YOU BUILD.</strong>
          </p>
          <div>
            {packages.map((p) => (
              <a key={p.name} href="#ecosystem">
                <p.icon size={20} />
                {p.name}
              </a>
            ))}
          </div>
        </section>
        <section id="capabilities" className="section wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / CAPABILITIES</span>
              <h2>
                Less glue code.
                <br />
                <span>More possibilities.</span>
              </h2>
            </div>
            <p>
              Everything between your app and its AI,
              <br className="desktop" /> brought together in one integration
              layer.
            </p>
          </div>
          <div className="feature-grid">
            {[
              [
                KeyRound,
                "Bring your own keys.",
                "Let users connect their own providers and credentials. Use request keys, memory storage, or platform-specific credential stores.",
                "OWN YOUR CONNECTION",
              ],
              [
                Radio,
                "One API. Full conversation.",
                "Chat, stream responses, and work with tools through a provider-neutral interface. Keep your app logic focused on the experience.",
                "CHAT / STREAM / TOOLS",
              ],
              [
                GitBranch,
                "Keep the conversation going.",
                "Automatic failover across models and providers on rate limits, server errors, and network failures in the TypeScript core and bridge.",
                "BUILT FOR THE REAL WORLD",
              ],
              [
                Terminal,
                "A bridge for your workflow.",
                "Connect agents and IDEs through a local bridge with OpenAI, Anthropic, and Gemini-compatible API surfaces.",
                "LOCALHOST, CONNECTED",
              ],
              [
                Layers,
                "Discover. Connect. Extend.",
                "List models from supported providers, register custom providers, and connect hosted services or local model servers.",
                "YOUR STACK, YOUR CHOICE",
              ],
              [
                ShieldCheck,
                "See what your AI uses.",
                "Track tokens, latency, failovers, and estimated spend through the bridge usage dashboard, with optional SQLite persistence.",
                "VISIBILITY BUILT IN",
              ],
            ].map(([Icon, title, desc, label], i) => (
              <article className="feature" key={title}>
                <div className="feature-top">
                  <Icon size={22} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="feature-label">{label}</span>
              </article>
            ))}
          </div>
        </section>
        <section id="integrations" className="integrations section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">02 / INTEGRATIONS</span>
                <h2>
                  A wider world
                  <br />
                  of <span>AI.</span>
                </h2>
              </div>
              <div className="integration-intro">
                <p>
                  Go hosted. Run local. Bring something new.
                  <br />
                  Your next provider shouldn’t mean a rewrite.
                </p>
                <div className="filters" aria-label="Filter integrations">
                  {["All providers", "Hosted", "Local models"].map((f) => (
                    <button
                      key={f}
                      aria-pressed={filter === f}
                      onClick={() => setFilter(f)}
                      className={filter === f ? "active" : ""}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="providers">
              {shown.map((p, i) => (
                <div className="provider" key={p}>
                  <span className="provider-symbol">
                    {[
                      "Ollama",
                      "LM Studio",
                      "vLLM",
                      "llama.cpp",
                      "KoboldCpp",
                    ].includes(p) ? (
                      <Monitor size={19} />
                    ) : (
                      <Layers size={19} />
                    )}
                  </span>
                  {p}
                  <span className="provider-dot" />
                </div>
              ))}
            </div>
            <div className="provider-foot">
              <span>
                <Plug size={16} /> Have your own endpoint? Custom providers fit
                right in.
              </span>
              <External href={`${repo}/blob/main/docs/guide.md`}>
                Explore the technical guide <ArrowUpRight size={15} />
              </External>
            </div>
          </div>
        </section>
        <section id="get-started" className="section wrap quickstart">
          <div className="quickstart-copy">
            <span className="eyebrow">03 / GET STARTED</span>
            <h2>
              A small install.
              <br />
              <span>A big unlock.</span>
            </h2>
            <p>
              Choose your stack. Add ModelHitch.
              <br />
              Start building with the model that fits.
            </p>
            <External href={docs} className="text-link">
              Read the documentation <ArrowUpRight size={17} />
            </External>
            <div className="quick-facts">
              <span>
                <Check size={15} /> Provider-neutral types
              </span>
              <span>
                <Check size={15} /> Hosted and local models
              </span>
              <span>
                <Check size={15} /> Open source, MIT licensed
              </span>
            </div>
          </div>
          <div className="code-panel">
            <div
              className="code-tabs"
              role="tablist"
              aria-label="Installation platform"
            >
              {packages.map((p) => (
                <button
                  key={p.name}
                  role="tab"
                  id={`tab-${p.tag}-${packages.indexOf(p)}`}
                  aria-selected={tab === p.name}
                  aria-controls="install-panel"
                  tabIndex={tab === p.name ? 0 : -1}
                  onClick={() => setTab(p.name)}
                  onKeyDown={(event) => {
                    const index = packages.indexOf(p);
                    const next =
                      event.key === "ArrowRight"
                        ? (index + 1) % packages.length
                        : event.key === "ArrowLeft"
                          ? (index + packages.length - 1) % packages.length
                          : event.key === "Home"
                            ? 0
                            : event.key === "End"
                              ? packages.length - 1
                              : null;
                    if (next === null) return;
                    event.preventDefault();
                    setTab(packages[next].name);
                    event.currentTarget.parentElement.children[next].focus();
                  }}
                  className={tab === p.name ? "active" : ""}
                >
                  {p.name === "Dart & Flutter" ? "Dart" : p.name}
                </button>
              ))}
            </div>
            <div
              id="install-panel"
              role="tabpanel"
              aria-labelledby={`tab-${selected.tag}-${packages.indexOf(selected)}`}
            >
              <div className="code-install">
                <span>$</span>
                <code>{selected.command}</code>
                <CopyButton value={selected.command} />
              </div>
              {tab === "TypeScript" ? (
                <pre>
                  <code>
                    <span className="code-muted">
                      // One interface. Your choice of provider.
                    </span>
                    {"\n"}
                    <span className="code-orange">import</span>
                    {" { ModelHitch } "}
                    <span className="code-orange">from</span>{" "}
                    <span className="code-green">'modelhitch'</span>;{"\n\n"}
                    <span className="code-orange">const</span>
                    {" mh = "}
                    <span className="code-orange">new</span>
                    {" ModelHitch();\n\n"}
                    <span className="code-orange">const</span>
                    {" result = "}
                    <span className="code-orange">await</span>
                    {" mh.chat({\n  provider: "}
                    <span className="code-green">'openai'</span>
                    {",\n  model: "}
                    <span className="code-green">'gpt-4o-mini'</span>
                    {
                      ",\n  apiKey: userProvidedKey,\n  messages: [{\n    role: "
                    }
                    <span className="code-green">'user'</span>
                    {",\n    content: "}
                    <span className="code-green">'Let’s build something.'</span>
                    {"\n  }],\n});\n\nconsole.log(result.message.content);"}
                  </code>
                </pre>
              ) : (
                <div className="platform-detail">
                  <selected.icon size={35} />
                  <h3>{selected.name}</h3>
                  <p>{selected.detail}</p>
                  <External href={selected.url} className="text-link">
                    Open package & installation guide <ArrowUpRight size={16} />
                  </External>
                </div>
              )}
              <div className="code-foot">
                <span>
                  {tab === "TypeScript"
                    ? "TypeScript · example requires a provider API key"
                    : selected.sub}
                </span>
                <External href={selected.url}>
                  View package <ArrowUpRight size={13} />
                </External>
              </div>
            </div>
          </div>
        </section>
        <section className="bridge-section wrap">
          <div className="bridge-copy">
            <span className="eyebrow">BEYOND YOUR APP</span>
            <h2>
              Your tools.
              <br />
              All hitched.
            </h2>
            <p>
              Bring the same connection layer to your coding workflow. Install
              agent skills, launch the local bridge, and route requests to your
              chosen provider.
            </p>
            <div className="agent-list">
              {[
                ["Codex", ".agents/plugins"],
                ["Claude", ".claude/skills"],
                ["Cursor", ".cursor-plugin"],
                ["VS Code / Copilot", ".github/plugin"],
              ].map(([name, path]) => (
                <External
                  href={`${repo}/blob/main/${path}/README.md`}
                  key={name}
                >
                  {name}
                  <ArrowUpRight size={12} />
                </External>
              ))}
            </div>
          </div>
          <div className="terminal-panel">
            <div className="terminal-title">
              <Terminal size={15} /> modelhitch / terminal<span>CLI</span>
            </div>
            <div className="terminal-command">
              <span className="code-muted">
                # Install skills for your agent
              </span>
              <div>
                <span className="code-orange">$ </span>
                <code>npx modelhitch setup codex</code>
                <CopyButton value="npx modelhitch setup codex" />
              </div>
            </div>
            <div className="terminal-command">
              <span className="code-muted"># Start your local bridge</span>
              <div>
                <span className="code-orange">$ </span>
                <code>npx modelhitch bridge --background</code>
                <CopyButton value="npx modelhitch bridge --background" />
              </div>
            </div>
            <div className="terminal-end">
              <span>DEFAULT ENDPOINT</span>
              <code>127.0.0.1:3939/v1</code>
            </div>
          </div>
        </section>
        <section id="ecosystem" className="section wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / ECOSYSTEM</span>
              <h2>
                Find your <span>hitch.</span>
              </h2>
            </div>
            <p>
              From the browser to native mobile.
              <br />
              Pick your package and make the connection.
            </p>
          </div>
          <div className="package-grid">
            {packages.map((p) => (
              <External key={p.name} href={p.url} className="package-card">
                <div className="package-top">
                  <p.icon size={27} />
                  <ArrowUpRight size={19} />
                </div>
                <h3>{p.name}</h3>
                <p>{p.sub}</p>
                <div className="package-bottom">
                  <span>{p.tag}</span>
                  <code>
                    {p.name === "TypeScript"
                      ? "modelhitch"
                      : p.name === "Dart & Flutter"
                        ? "modelhitch_dart"
                        : p.name === "Android"
                          ? "modelhitch-android"
                          : p.name === ".NET"
                            ? "ModelHitch"
                            : "modelhitch-expo"}
                  </code>
                </div>
              </External>
            ))}
          </div>
        </section>
        <section
          className="more-connections wrap"
          aria-label="More integrations"
        >
          <External href={`${repo}/blob/main/electron-sdk/README.md`}>
            <Monitor size={19} />
            <span>
              <b>Building for desktop?</b>
              <small>Electron adapter with safeStorage and renderer IPC.</small>
            </span>
            <ArrowUpRight size={17} />
          </External>
          <External href={`${docs}#local-agent-bridge`}>
            <Workflow size={19} />
            <span>
              <b>Go beyond chat.</b>
              <small>
                Optional image generation and Cursor Cloud Agent lanes.
              </small>
            </span>
            <ArrowUpRight size={17} />
          </External>
        </section>
        <section className="closing wrap">
          <div>
            <span className="eyebrow">BUILD WITH FREEDOM.</span>
            <h2>
              Good apps deserve
              <br />
              <span>more than one model.</span>
            </h2>
          </div>
          <div>
            <a href="#get-started" className="button primary">
              Make the connection <ArrowRight size={17} />
            </a>
            <External href={repo} className="closing-link">
              Explore ModelHitch on GitHub <ArrowUpRight size={14} />
            </External>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div>
          <a className="brand" href="#">
            <span className="brand-mark">
              <Mark />
            </span>
            ModelHitch
          </a>
          <p>Hitch any model to your app.</p>
        </div>
        <div className="footer-links">
          <External href={repo}>
            GitHub <ArrowUpRight size={13} />
          </External>
          <External href={docs}>
            Docs <ArrowUpRight size={13} />
          </External>
          <External href={`${repo}/blob/main/LICENSE`}>
            MIT License <ArrowUpRight size={13} />
          </External>
        </div>
        <span className="footer-credit">
          Built by{" "}
          <External href="https://github.com/bobbybacklogs">
            bobbybacklogs <ArrowUpRight size={12} />
          </External>
        </span>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
