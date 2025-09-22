import React from "react";

// Love Lighthouse Network (LLN) — Accessible, trauma‑informed landing page
// Framework: React + TailwindCSS
export default function LLNLandingPage() {
  const quickExit = () => {
    window.location.assign("https://www.metoffice.gov.uk/weather");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-white border rounded px-3 py-2 shadow"
      >
        Skip to content
      </a>

      <div className="w-full bg-amber-50 border-b border-amber-200 text-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 text-sm flex items-center justify-between gap-4">
          <p className="leading-tight">
            If you are in immediate danger, call <strong>999</strong>. For non-emergency police, call <strong>101</strong>. For NHS, call <strong>111</strong>.
          </p>
          <button
            onClick={quickExit}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
            aria-label="Quickly leave this website"
            title="Quick Exit"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-red-400" /> Quick Exit
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">LL</div>
            <div>
              <p className="font-semibold leading-tight">Love Lighthouse Network</p>
              <p className="text-xs text-slate-500 leading-tight">Safety • Support • Healing</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary">
            <a className="hover:text-indigo-700" href="#support">Get Support</a>
            <a className="hover:text-indigo-700" href="#resources">Resources</a>
            <a className="hover:text-indigo-700" href="#app">LLN App</a>
            <a className="hover:text-indigo-700" href="#helpers">For Helpers</a>
            <a className="hover:text-indigo-700" href="#about">About</a>
            <a className="hover:text-indigo-700" href="#contact">Contact</a>
            <a className="hover:text-indigo-700" href="#donate">Donate</a>
          </nav>

          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer rounded-full border px-3 py-1 text-sm">Menu</summary>
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow p-2 text-sm">
                <a className="block px-2 py-1 rounded hover:bg-slate-50" href="#support">Get Support</a>
                <a className="block px-2 py-1 rounded hover:bg-slate-50" href="#resources">Resources</a>
                <a className="block px-2 py-1 rounded hover:bg-slate-50" href="#app">LLN App</a>
                <a className="block px-2 py-1 rounded hover:bg-slate-50" href="#helpers">For Helpers</a>
                <a className="block px-2 py-1 rounded hover:bg-slate-50" href="#about">About</a>
                <a className="block px-2 py-1 rounded hover:bg-slate-50" href="#contact">Contact</a>
                <a className="block px-2 py-1 rounded hover:bg-slate-50" href="#donate">Donate</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
                You are not alone. <span className="text-indigo-700">Support starts here.</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-prose">
                LLN helps people affected by trauma—including sexual assault and abuse—find safe, confidential support. Learn about trauma, access resources, and connect with help at your pace.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#support" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">
                  Get Support
                </a>
                <a href="#resources" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border font-medium hover:bg-slate-50">
                  Learn about Trauma
                </a>
                <button onClick={quickExit} className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400" aria-label="Quickly leave this website">
                  Quick Exit
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-500">Your visit may be visible in your browser history. Consider using a private window.</p>
            </div>
            <div className="md:pl-8">
              <div className="relative rounded-2xl border bg-white p-6 shadow-xl">
                <h2 className="text-xl font-semibold">Need help now?</h2>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li>• UK Emergency: <a className="underline" href="tel:999">999</a></li>
                  <li>• NHS (non‑emergency): <a className="underline" href="tel:111">111</a></li>
                  <li>• Samaritans (24/7): <a className="underline" href="tel:116123">116 123</a></li>
                  <li>• Rape Crisis England & Wales: <a className="underline" href="https://rapecrisis.org.uk/" target="_blank" rel="noreferrer">rapecrisis.org.uk</a></li>
                </ul>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a href="#contact" className="text-center rounded-lg border px-3 py-2 hover:bg-slate-50">Message us</a>
                  <a href="#chat" className="text-center rounded-lg bg-indigo-600 text-white px-3 py-2 hover:bg-indigo-700">Open Live Chat</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Ways we can support you</h2>
            <p className="mt-2 text-slate-600 max-w-prose">Choose what feels right for you today. Everything is confidential and at your pace.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "1:1 Support", body: "Talk privately with a trained supporter via chat, phone or in‑person appointment.", cta: "Book a session", href: "#contact" },
              { title: "Peer Community", body: "Join moderated groups for shared experiences, coping strategies, and gentle accountability.", cta: "See groups", href: "#community" },
              { title: "Self‑guided Tools", body: "Grounding exercises, journaling prompts, and short lessons to understand trauma.", cta: "Try tools", href: "#resources" },
            ].map((c, i) => (
              <article key={i} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-slate-600">{c.body}</p>
                <a href={c.href} className="mt-4 inline-flex items-center gap-2 text-indigo-700 font-medium">
                  {c.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline"><path dName="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="resources" className="bg-slate-50 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Learn about trauma</h2>
                <p className="mt-2 text-slate-600 max-w-prose">Short, plain‑language explainers and exercises you can do anywhere.</p>
              </div>
              <a href="#all-articles" className="hidden sm:inline text-indigo-700 font-medium">Browse all</a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tag: "Explainer", title: "What is trauma?", blurb: "Understand how the body and brain respond, and why reactions can linger." },
                { tag: "Exercise", title: "5‑4‑3‑2‑1 grounding", blurb: "A simple technique to anchor yourself in the present during flashbacks." },
                { tag: "Guide", title: "Planning a safe disclosure", blurb: "Tips for telling someone you trust, including boundaries and aftercare." },
              ].map((r, i) => (
                <article key={i} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                  <span className="inline-block text-[11px] uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded px-2 py-1">{r.tag}</span>
                  <h3 className="mt-3 font-semibold text-lg">{r.title}</h3>
                  <p className="mt-2 text-slate-600">{r.blurb}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 text-indigo-700 font-medium">
                    Read more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="app" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">The LLN App</h2>
              <p className="mt-3 text-slate-600 max-w-prose">
                Your pocket companion for understanding trauma and building daily coping skills. Track mood, follow micro‑lessons, and connect to support—whenever you need it.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Daily grounding + breathwork</li>
                <li>Gentle check‑ins and mood tracking</li>
                <li>Crisis shortcuts & local resources</li>
              </ul>
              <div className="mt-5 flex gap-3">
                <a className="rounded-xl bg-slate-900 text-white px-4 py-2 font-medium" href="#">App Store</a>
                <a className="rounded-xl border px-4 py-2 font-medium hover:bg-slate-50" href="#">Google Play</a>
              </div>
            </div>
            <div className="md:pl-8">
              <div className="aspect-[4/3] rounded-2xl border bg-white p-6 shadow-sm grid place-items-center text-slate-400">
                <span>App screenshot placeholder</span>
              </div>
            </div>
          </div>
        </section>

        <section id="helpers" className="bg-slate-50 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <h2 className="text-2xl sm:text-3xl font-bold">For supporters & professionals</h2>
            <p className="mt-2 text-slate-600 max-w-prose">Guides for parents, partners, teachers, and pre‑marital counsellors to offer safe, empowering support.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { title: "How to listen well", blurb: "Validating without fixing, respecting pace, and modelling boundaries." },
                { title: "Create safer spaces", blurb: "Trauma‑informed practices for groups, events, and faith communities." },
                { title: "Referral pathways", blurb: "When and how to refer to GPs, IAPT, ISVAs, and specialist services." },
              ].map((c, i) => (
                <article key={i} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-lg">{c.title}</h3>
                  <p className="mt-2 text-slate-600">{c.blurb}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 text-indigo-700 font-medium">
                    Read guide
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">About Love Lighthouse Network</h2>
              <p className="mt-3 text-slate-600 max-w-prose">
                We are a community‑rooted organisation dedicated to trauma‑informed care. Our approach centres safety, choice, and empowerment for survivors and those who support them.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Confidential and survivor‑centred</li>
                <li>Evidence‑informed resources</li>
                <li>Safeguarding and privacy by design</li>
              </ul>
            </div>
            <div className="md:pl-8">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold">Our Values</h3>
                <dl className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-slate-500">Safety</dt>
                    <dd className="font-medium">We build spaces that feel calm and predictable.</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Choice</dt>
                    <dd className="font-medium">You decide pace and privacy—always.</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Empowerment</dt>
                    <dd className="font-medium">We focus on strengths and agency.</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Collaboration</dt>
                    <dd className="font-medium">We learn alongside survivors and helpers.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Contact us</h2>
                <p className="mt-2 text-slate-600 max-w-prose">Use this form to reach our support team. We aim to reply within 2 working days.</p>
                <form className="mt-6 grid gap-4 max-w-lg" onSubmit={(e)=>e.preventDefault()} aria-label="Contact form">
                  <label className="grid gap-1">
                    <span className="text-sm">Your name (optional)</span>
                    <input className="rounded-xl border px-3 py-2" type="text" name="name" placeholder="First name" />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm">Email</span>
                    <input className="rounded-xl border px-3 py-2" type="email" name="email" placeholder="you@example.org" required />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm">How can we help?</span>
                    <textarea className="rounded-xl border px-3 py-2 min-h-[120px]" name="message" placeholder="Share as little or as much as you like." />
                  </label>
                  <div className="flex items-center gap-2">
                    <input id="consent" type="checkbox" className="rounded border" required />
                    <label htmlFor="consent" className="text-sm text-slate-600">I agree to the privacy notice.</label>
                  </div>
                  <button type="submit" className="rounded-xl bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-700 w-max">Send message</button>
                </form>
              </div>
              <div className="md:pl-8">
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">Other ways to reach us</h3>
                  <p className="mt-2 text-slate-600">Prefer phone or chat? We’ve got options.</p>
                  <ul className="mt-3 space-y-2">
                    <li>Live chat (Mon–Fri, 10:00–17:00)</li>
                    <li>Support line: <a href="tel:+440000000000" className="underline">+44 (0)00 0000 0000</a></li>
                    <li>Email: <a href="mailto:support@lovelighthouse.org" className="underline">support@lovelighthouse.org</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="donate" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="rounded-2xl border bg-gradient-to-br from-indigo-50 to-sky-50 p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Help keep the light on</h2>
                <p className="mt-2 text-slate-600 max-w-prose">Your donation funds survivor‑centred resources, moderated groups, and 1:1 support.</p>
              </div>
              <div className="flex md:justify-end gap-3">
                <a className="rounded-xl bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-700" href="#">Donate once</a>
                <a className="rounded-xl border px-5 py-3 font-medium hover:bg-slate-50" href="#">Give monthly</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">LL</div>
            <p className="mt-3 text-slate-600">© {new Date().getFullYear()} Love Lighthouse Network. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold">Organisation</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#about">About</a></li>
              <li><a className="hover:underline" href="#contact">Contact</a></li>
              <li><a className="hover:underline" href="#">Safeguarding</a></li>
              <li><a className="hover:underline" href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Get support</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#support">1:1 support</a></li>
              <li><a className="hover:underline" href="#resources">Resources</a></li>
              <li><a className="hover:underline" href="#helpers">For helpers</a></li>
              <li><a className="hover:underline" href="#donate">Donate</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <form className="mt-2 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" placeholder="you@example.org" className="flex-1 rounded-xl border px-3 py-2" aria-label="Email address" />
              <button className="rounded-xl bg-slate-900 text-white px-4 py-2">Join</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
