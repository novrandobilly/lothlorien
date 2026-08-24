"use client";

import React, { useState } from "react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { Mail, Calendar, Send, CheckCircle2, Clock, Shield } from "lucide-react";

export function CtaIntakeSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "mvp-sprint",
    budgetRange: "25m-50m",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief intake processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-800/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              Start a Conversation
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Let&apos;s build something exceptional together.
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Have a project in mind or need a senior frontend partner to accelerate your roadmap? Fill out the intake form or reach out directly.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-stone-300 text-sm">
                <div className="p-2 rounded-lg bg-stone-800 text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Fast response within 24 hours guaranteed</span>
              </div>

              <div className="flex items-center gap-3 text-stone-300 text-sm">
                <div className="p-2 rounded-lg bg-stone-800 text-emerald-400">
                  <Shield className="w-4 h-4" />
                </div>
                <span>NDA & complete IP protection from day one</span>
              </div>

              <div className="flex items-center gap-3 text-stone-300 text-sm">
                <div className="p-2 rounded-lg bg-stone-800 text-emerald-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Direct inquiries: <strong className="text-white font-mono">hello@lothlorien.dev</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7 bg-stone-800/90 border border-stone-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Inquiry Received!</h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I&apos;ll review your project details and get back to you with availability and proposed next steps within 24 hours.
                </p>
                <div className="pt-4">
                  <LothlorienButton
                    variant="outline"
                    size="sm"
                    className="border-stone-600 text-stone-200 hover:bg-stone-700"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </LothlorienButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chandra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Service Interest
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="mvp-sprint">0-to-1 MVP Frontend Sprint</option>
                      <option value="architecture-audit">Architecture & Performance Audit</option>
                      <option value="fractional-lead">Fractional Frontend Lead Retainer</option>
                      <option value="react-native">React Native Mobile App</option>
                      <option value="custom">Other / Custom Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Target Budget (IDR)
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="15m-25m">Rp 15.000.000 - Rp 25.000.000</option>
                      <option value="25m-50m">Rp 25.000.000 - Rp 50.000.000</option>
                      <option value="50m-100m">Rp 50.000.000 - Rp 100.000.000</option>
                      <option value="100m+">&gt; Rp 100.000.000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Project Brief & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me a bit about your product, current tech stack, key problems, and desired launch timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <LothlorienButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Submit Project Inquiry
                  </LothlorienButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
