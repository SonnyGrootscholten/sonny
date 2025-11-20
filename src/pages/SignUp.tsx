import { SlideOutMenu } from "@/components/SlideOutMenu";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Data will be stored when Lovable Cloud is enabled
    console.log("Sign up for updates:", { 
      email, 
      firstName, 
      lastName, 
      instagramUsername 
    });

    // Show success message
    toast({
      title: "THANK YOU FOR SUBSCRIBING!",
      description: "YOU'RE NOW SIGNED UP FOR FUTURE UPDATES FROM SONNY.",
      duration: 5000,
    });

    // Clear form
    setEmail("");
    setFirstName("");
    setLastName("");
    setInstagramUsername("");
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Header */}
        <section className="mb-8">
          <h2 className="text-sm font-bold text-black mb-1 uppercase">
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
              onChange={(e) => setEmail(e.target.value.toUpperCase())}
              placeholder="NAME@EMAIL.COM"
              required
              className="w-full bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12 uppercase"
            />
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
                onChange={(e) => setFirstName(e.target.value.toUpperCase())}
                placeholder="JANE"
                required
                className="flex-1 bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12 uppercase"
              />
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value.toUpperCase())}
                placeholder="DOE"
                required
                className="flex-1 bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12 uppercase"
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
              onChange={(e) => setInstagramUsername(e.target.value.toUpperCase())}
              placeholder="@USERNAME"
              className="w-full bg-white border border-black text-black text-sm tracking-tight placeholder:text-black/40 focus:ring-0 focus:border-black rounded-none h-12 uppercase"
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
