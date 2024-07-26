"use client";
import Footer from "@/app/components/ui/layout/sections/footer/Footer";
import Layout from "../pages/layout";
import Hero from "../components/ui/layout/sections/consultingPage/Hero";
import AshleyAdv from "../components/ui/layout/sections/consultingPage/AshleyAdv";
import Services from "../components/ui/layout/sections/consultingPage/Services";
import ContactForm from "../components/ui/layout/sections/consultingPage/ContactForm";
import Call2Action from "../components/ui/layout/sections/landingPage/call2Action/Call2Action";
import CnsltPlans from "../components/ui/layout/sections/consultingPage/CnsltPlans";
import React, { useRef } from "react";

export default function Page() {
  const formRef = useRef(null);
  const ashleyAdvRef = useRef(null);

  return (
    <main className="max-w-[2200px] overflow-hidden min-h-screen">
      <Layout />
      <Hero formRef={formRef} ashleyAdvRef={ashleyAdvRef} />
      <div ref={ashleyAdvRef}>
        <AshleyAdv />
      </div>
      <Services formRef={formRef} />
      <ContactForm ref={formRef} />
      <CnsltPlans />
      <Call2Action />
      <Footer />
    </main>
  );
}
