
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Music, Brain, DollarSign } from "lucide-react";

export default function NoMaLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 text-gray-900 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">A Minor House of Music (HOM)</h1>
        <p className="text-xl italic text-gray-700">“What’s the matter?”</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About the Book</h2>
            <p>
              This 30-day frequency writing challenge, transcribed by Jason Freeman,
              decodes spiritual, mental, and musical vibrations through the No Syn Mind
              Application (NoMa). Designed to relieve anxiety, depression, and reconnect people
              with inner harmony.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">What is NoMa?</h2>
            <p>
              NoMa stands for No Syn Mind Application — a revolutionary approach
              to mental wellness through sound, color, and structure. It helps users
              transmute emotion into frequency and frequency into manifestation. It leads into HOM — A Minor House of Music.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <Brain className="mx-auto mb-2 text-orange-500" size={32} />
            <h3 className="text-xl font-semibold">Mental Health Relief</h3>
            <p>Tools for anxiety, trauma, focus, and meditation.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <Music className="mx-auto mb-2 text-orange-500" size={32} />
            <h3 className="text-xl font-semibold">Music Theory & Healing</h3>
            <p>Learn music, decode frequency, and restore emotional balance.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <DollarSign className="mx-auto mb-2 text-orange-500" size={32} />
            <h3 className="text-xl font-semibold">32.7K Grant Campaign</h3>
            <p>Seeking partners, grants, and investment to expand this mind tech.</p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white rounded-2xl shadow-xl p-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact & Investment Inquiry</h2>
        <form className="grid grid-cols-1 gap-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Textarea placeholder="Message / Investment Inquiry" rows={4} />
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Send Message
          </Button>
        </form>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-600">
        <Mail className="inline mr-1" size={14} /> bookings@nomasound.com | © 2025 Jason Freeman | Outtaservice LLC
      </footer>
    </div>
  );
}
