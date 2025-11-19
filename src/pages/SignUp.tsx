import { SlideOutMenu } from "@/components/SlideOutMenu";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will be implemented when Lovable Cloud is enabled
    console.log("Sign up:", { email, password });
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Header */}
        <section className="mb-8">
          <h2 className="text-sm font-bold text-black mb-1 uppercase tracking-tight">
            SIGN UP
          </h2>
        </section>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-black uppercase tracking-tight block">
              EMAIL
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toUpperCase())}
              placeholder="YOUR@EMAIL.COM"
              required
              className="w-full bg-white border border-black text-black text-sm tracking-tight uppercase placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-bold text-black uppercase tracking-tight block">
              PASSWORD
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-white border border-black text-black text-sm tracking-tight focus:ring-0 focus:border-black rounded-none h-12"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-black/80 text-sm tracking-ultra uppercase transition-all duration-luxury rounded-none h-12 border border-black"
          >
            CREATE ACCOUNT
          </Button>
        </form>

        <div className="mt-6">
          <p className="text-sm font-normal tracking-tight text-black">
            ALREADY HAVE AN ACCOUNT?{" "}
            <a href="/login" className="font-bold hover:opacity-50 transition-opacity duration-luxury">
              LOG IN
            </a>
          </p>
        </div>

        {/* Copyright */}
        <footer className="fixed bottom-8 right-8">
          <p className="text-xs font-normal tracking-tight text-black uppercase">
            ©SONNY 2O26. ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </div>
  );
};

export default SignUp;
