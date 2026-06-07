/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopNavBar } from "./components/TopNavBar";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Countries } from "./components/Countries";
import { Success } from "./components/Success";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden scroll-smooth">
      <TopNavBar />
      <main className="pt-20">
        <Hero />
        <Process />
        <Countries />
        <Success />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
