import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  Eye,
  EyeOff,
  Zap,
  Coins,
  FastForward,
  ShieldCheck,
  ArrowRight,
  Check,
  Lock,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../../hooks/authHook";
import ToastSuccess from "../../../../shared/UI/components/ToastSuccess";
import { useSelector } from "react-redux";
import { NormalLoader } from "../../../../shared/UI/components/NormalLoader";

const AuthPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    activeTab,
    setActiveTab,
    showPassword,
    setShowPassword,
    submittedData,
    setSubmittedData,
    passwordStrength,
    onSubmit,
    toastMsg,
    setToastMsg,
    loginHadle,
    signUpHandle,
  } = useAuth();

  const { isLoding } = useSelector((store) => store.auth);
  // console.log(isLoding)
  if (isLoding)
    return (
      <NormalLoader
        type="dots"
        theme="light"
        text="Loading data..."
        subtext="Please wait a second"
        variant="overlay"

      />
    );

  return (
    <div className=" max-w-7xl mx-auto bg-[#fafafa] flex flex-col lg:flex-row antialiased text-[#111] font-sans selection:bg-[#cbfb45] selection:text-black shadow-xl  overflow-hidden rounded-2xl transition-all duration-700 ease-in-out">
      {}
      <section className="relative w-full lg:w-[48%] xl:w-[45%] bg-[#121316] text-white flex flex-col justify-between p-6 sm:p-10 lg:p-12  overflow-hidden">
        {/* Background Streetwear Model Layer */}
        <div
          className="absolute inset-0 bg-cover bg-top lg:bg-center opacity-45 mix-blend-luminosity filter contrast-125 pointer-events-none scale-105 transition-transform duration-1000 ease-out hover:scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />

        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#121316]/90 via-[#121316]/75 to-[#0b0c0d] pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-block bg-white text-black font-black text-[11px] tracking-[0.2em] px-3.5 py-1.5 uppercase shadow-sm">
            SS//25 DROP REGISTRY
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cbfb45] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cbfb45]"></span>
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400">
              LIVE PORTAL
            </span>
          </div>
        </div>

        {/* Middle Content: Headline & Perks */}
        <div className="relative z-10 my-auto py-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400 font-semibold mb-2">
            SNITCH INNER CIRCLE
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.92] mb-8 select-none">
            JOIN <br />
            THE <br />
            <span className="text-[#cbfb45] inline-block drop-shadow-[0_0_20px_rgba(203,251,69,0.35)]">
              SNITCH
            </span>{" "}
            <br />
            SQUAD
          </h1>

          {/* Perks Grid */}
          <div className="space-y-4 max-w-md">
            {/* Perk 1 */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-none bg-neutral-900/90 border border-neutral-700/60 flex items-center justify-center text-[#cbfb45] shrink-0 mt-0.5 group-hover:border-[#cbfb45] transition-colors">
                <Zap className="w-4 h-4 fill-[#cbfb45]" />
              </div>
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-100">
                  EXCLUSIVE EARLY DROP ACCESS
                </h2>
                <p className="text-[11.5px] leading-relaxed text-neutral-400 font-normal">
                  Front-row VIP entry 30 mins before global releases
                </p>
              </div>
            </div>

            {/* Perk 2 */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-none bg-neutral-900/90 border border-neutral-700/60 flex items-center justify-center text-[#cbfb45] shrink-0 mt-0.5 group-hover:border-[#cbfb45] transition-colors">
                <Coins className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-100">
                  SNITCH COINS ENGINE
                </h2>
                <p className="text-[11.5px] leading-relaxed text-neutral-400 font-normal">
                  Earn 5% flat payback on every streetwear cart
                </p>
              </div>
            </div>

            {/* Perk 3 */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-none bg-neutral-900/90 border border-neutral-700/60 flex items-center justify-center text-[#cbfb45] shrink-0 mt-0.5 group-hover:border-[#cbfb45] transition-colors">
                <FastForward className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-100">
                  EXPRESS 1-CLICK CHECKOUT
                </h2>
                <p className="text-[11.5px] leading-relaxed text-neutral-400 font-normal">
                  Pre-authenticated logistics & express air dispatch
                </p>
              </div>
            </div>

            {/* Perk 4 */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-none bg-neutral-900/90 border border-neutral-700/60 flex items-center justify-center text-[#cbfb45] shrink-0 mt-0.5 group-hover:border-[#cbfb45] transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-100">
                  VIP MEMBER VAULT
                </h2>
                <p className="text-[11.5px] leading-relaxed text-neutral-400 font-normal">
                  Hidden price tiers & invite-only offline pop-ups
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
          <span>STREETWEAR ARCHIVE 2025</span>
          <span>BANGALORE / MUMBAI</span>
        </div>
      </section>

      {}
      <section className="w-full lg:w-[52%] xl:w-[55%] flex items-center justify-center p-6 sm:p-10 lg:p-14 bg-white transition-all duration-500 ease-in-out ">
        <div className="w-full max-w-xl flex flex-col justify-between min-h-[90%]">
          {/* Brand Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase">
                  SNITCH
                </span>
                <span className="w-2.5 h-2.5 bg-[#e11d48] rounded-[1px] ml-0.5" />
              </div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-neutral-500 uppercase mt-0.5">
                HIGH STREET MANIFESTO
              </p>
            </div>

            {/* Secure Pass Chip */}
            <div className="inline-flex items-center gap-2 bg-neutral-100/90 text-neutral-800 border border-neutral-200/80 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
              SECURE PASS 2.0
            </div>
          </div>

          {/* Tab Selector */}
          <div className="grid grid-cols-2 bg-neutral-100 p-1 mb-8 rounded-none">
            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className={`py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === "login"
                  ? "bg-black text-white shadow-sm"
                  : "text-neutral-600 hover:text-black hover:bg-neutral-200/50"
              }`}
            >
              LOGIN TO ACCOUNT
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("register")}
              className={`py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === "register"
                  ? "bg-black text-white shadow-sm"
                  : "text-neutral-600 hover:text-black hover:bg-neutral-200/50"
              }`}
            >
              CREATE AN ACCOUNT
            </button>
          </div>

          {/* Submission Feedback Toast */}
          {submittedData && <ToastSuccess toastMsg={toastMsg} />}

          {/* Registration Form */}
          {activeTab === "register" ? (
            <form
              onSubmit={handleSubmit((data) => {
                onSubmit(data);
                signUpHandle(data);
                setToastMsg(
                  "Welcome to the Squad! Account successfully created ",
                );
              })}
              className="space-y-6"
            >
              {/* Full Legal / Street Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-neutral-800 mb-1.5">
                  FULL NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Aryan Sharma"
                  {...register("fullName", {
                    required: "Legal/Street name is mandatory",
                  })}
                  className="w-full bg-white border border-neutral-200 focus:border-black rounded-none px-4 py-3.5 text-sm font-medium text-black placeholder:text-neutral-400 outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 font-semibold tracking-wide mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Two Column: Email & Mobile */}
              <div className="w-full">
                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-neutral-800 mb-1.5">
                    EMAIL ADDRESS <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="aryan@snitch.co"
                    {...register("email", {
                      required: "Valid email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full bg-white border border-neutral-200 focus:border-black rounded-none px-4 py-3.5 text-sm font-medium text-black placeholder:text-neutral-400 outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 font-semibold tracking-wide mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Password & Security Meter */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-800">
                    CREATE PASSWORD <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[10px] font-bold tracking-wider text-[#e11d48] uppercase">
                    MINIMUM 8 CHARACTERS
                  </span>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                    })}
                    className="w-full bg-white border border-neutral-200 focus:border-black rounded-none px-4 py-3.5 pr-11 text-sm font-medium text-black placeholder:text-neutral-400 outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-black transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 cursor-pointer" />
                    ) : (
                      <Eye className="w-4 h-4 cursor-pointer" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-[11px] text-red-500 font-semibold tracking-wide mt-1">
                    {errors.password.message}
                  </p>
                )}

                {/* Password Strength Meter Bars */}
                <div className="grid grid-cols-4 gap-2 mt-2.5">
                  {[1, 2, 3, 4].map((step) => {
                    const isFilled = passwordStrength >= step;
                    let barColor = "bg-neutral-200";
                    if (isFilled) {
                      if (passwordStrength === 1) barColor = "bg-rose-500";
                      else if (passwordStrength === 2)
                        barColor = "bg-amber-400";
                      else if (passwordStrength === 3) barColor = "bg-lime-500";
                      else barColor = "bg-[#cbfb45]";
                    }
                    return (
                      <div
                        key={step}
                        className={`h-1.5 rounded-full transition-all duration-300 ${barColor}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-neutral-900 active:scale-[0.99] font-black text-xs uppercase tracking-[0.2em] py-4 px-6 flex items-center justify-center gap-2.5 transition-all shadow-md group cursor-pointer disabled:opacity-70"
              >
                <span>
                  {isSubmitting
                    ? "ENROLLING MEMBER..."
                    : "CREATE SNITCH ACCOUNT"}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          ) : (
            <form
              onSubmit={handleSubmit((data) => {
                setSubmittedData({ fullName: data.loginEmail });
                setTimeout(() => setSubmittedData(null), 3500);
                setToastMsg("Welcome back to the Squad!");
                loginHadle(data);
                onSubmit(data);
              })}
              className="space-y-6 py-4"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-neutral-800 mb-1.5">
                  EMAIL OR MOBILE <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="aryan@snitch.co"
                  {...register("loginEmail", {
                    required: "Please enter registered credential",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full bg-white border border-neutral-200 focus:border-black rounded-none px-4 py-3.5 text-sm font-medium text-black placeholder:text-neutral-400 outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-800">
                    PASSWORD <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    {...register("loginPassword", {
                      required: "Password is required",
                    })}
                    className="w-full bg-white border border-neutral-200 focus:border-black rounded-none px-4 py-3.5 pr-11 text-sm font-medium text-black placeholder:text-neutral-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-black"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4  cursor-pointer" />
                    ) : (
                      <Eye className="w-4 h-4 cursor-pointer" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-neutral-900 active:scale-[0.99] font-black text-xs uppercase tracking-[0.2em] py-4 px-6 flex items-center justify-center gap-2.5 transition-all shadow-md group cursor-pointer"
              >
                <span>SIGN IN TO PASS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

          {}
          <div className="mt-8 pt-6 border-t border-neutral-100">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[10.5px] uppercase tracking-wider text-neutral-500 font-semibold mb-3">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                256-BIT SSL ENCRYPTED CHECKOUT
              </span>
              <span className="tracking-widest text-neutral-400">
                ISO:27001 COMPLIANT
              </span>
            </div>

            <p className="text-[11px] leading-relaxed text-neutral-500 font-normal">
              By authenticating, you agree to Snitch's{" "}
              <a
                href="#terms"
                className="underline hover:text-black font-medium"
              >
                Terms of Service
              </a>
              ,{" "}
              <a
                href="#rules"
                className="underline hover:text-black font-medium"
              >
                Membership Rules
              </a>
              , and{" "}
              <a
                href="#privacy"
                className="underline hover:text-black font-medium"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthPage;
