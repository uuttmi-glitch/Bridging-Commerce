/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopNavBar } from "./components/TopNavBar";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      <TopNavBar />
      <main className="pt-20">
        <Hero />
        <Process />
        <Footer />
      </main>
    </div>
  );
}
