import { SlideOutMenu } from "@/components/SlideOutMenu";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Data will be stored when Lovable Cloud is enabled
    console.log("Sign up for updates:", { 
      email, 
      phoneNumber, 
      firstName, 
      lastName, 
      instagramUsername 
    });
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Header */}
        <section className="mb-8">
          <h2 className="text-sm font-bold text-black mb-1 uppercase tracking-tight">
            SIGN UP FOR FUTURE UPDATES
          </h2>
        </section>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Email Address */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-normal text-black uppercase tracking-tight block">
              EMAIL ADDRESS <span className="text-black/60">(REQUIRED)</span>
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              required
              className="w-full bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-normal text-black uppercase tracking-tight block">
              PHONE NUMBER <span className="text-black/60">(REQUIRED)</span>
            </label>
            <div className="flex gap-2">
              <select className="bg-white border border-black text-black text-sm tracking-tight focus:ring-0 focus:border-black rounded-none h-12 px-3 w-24">
                <option value="+31">🇳🇱 +31</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+49">🇩🇪 +49</option>
              </select>
              <Input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+31"
                required
                className="flex-1 bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12"
              />
            </div>
          </div>

          {/* First & Last Name */}
          <div className="space-y-2">
            <label className="text-sm font-normal text-black uppercase tracking-tight block">
              FIRST & LAST NAME <span className="text-black/60">(REQUIRED)</span>
            </label>
            <div className="flex gap-2">
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
                required
                className="flex-1 bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12"
              />
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
                className="flex-1 bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12"
              />
            </div>
          </div>

          {/* Instagram Username */}
          <div className="space-y-2">
            <label htmlFor="instagram" className="text-sm font-normal text-black uppercase tracking-tight block">
              INSTAGRAM USERNAME
            </label>
            <Input
              id="instagram"
              type="text"
              value={instagramUsername}
              onChange={(e) => setInstagramUsername(e.target.value)}
              placeholder="@username"
              className="w-full bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-black/80 text-sm tracking-ultra uppercase transition-all duration-luxury rounded-none h-12 border border-black"
          >
            SIGN UP
          </Button>

          {/* Consent Text */}
          <p className="text-xs font-normal tracking-tight text-black/60 leading-relaxed">
            BY SUBMITTING MY INFO, I CONSENT TO RECEIVE RECURRING AUTOMATED MARKETING MESSAGES FROM SONNY. 
            MSG & DATA RATES MAY APPLY. MSG FREQUENCY VARIES. REPLY STOP TO CANCEL, HELP FOR HELP. 
            SMS WILL BE SENT BY LOVABLE. SEE{" "}
            <a href="#" className="underline hover:opacity-50 transition-opacity">
              TERMS OF SERVICE
            </a>
            {" "}AND{" "}
            <a href="#" className="underline hover:opacity-50 transition-opacity">
              PRIVACY POLICY
            </a>.
          </p>
        </form>

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
