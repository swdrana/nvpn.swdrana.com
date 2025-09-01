"use client";

import { Eye, EyeOff, Lock, Mail, LogIn, Shield, ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
          {/* Left Side - Branding */}
          <div className="hidden lg:flex flex-col justify-center">
            <AnimateOnScroll animation="fade-in-left">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h1 className="text-4xl font-bold text-base-content">swdRana</h1>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
                  Welcome Back!
                </h2>
                
                <p className="text-xl text-base-content/70 mb-8">
                  Sign in to access your dashboard and manage your digital services.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-base-content/60">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Secure VPN Services</span>
                  </div>
                  <div className="flex items-center text-base-content/60">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Professional Web Development</span>
                  </div>
                  <div className="flex items-center text-base-content/60">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span>Premium Digital Services</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          {/* Right Side - Login Form */}
          <div className="flex items-center justify-center">
            <AnimateOnScroll animation="fade-in-right">
              <div className="card bg-base-100 shadow-2xl w-full max-w-md">
                <div className="card-body p-8">
                  {/* Mobile Branding */}
                  <div className="lg:hidden text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-3">
                        <Shield className="text-white" size={24} />
                      </div>
                      <h1 className="text-2xl font-bold text-base-content">swdRana</h1>
                    </div>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                      Sign In
                    </h2>
                    <p className="text-base-content/60">
                      Enter your credentials to access your account
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Email Address</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-base-content/40" />
                        </div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="input input-bordered w-full pl-10 focus:input-primary"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Password Field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Password</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-base-content/40" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="input input-bordered w-full pl-10 pr-10 focus:input-primary"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/40 hover:text-base-content/60"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>
                    
                    {/* Error Message */}
                    {error && (
                      <div className="alert alert-error">
                        <span className="text-sm">{error}</span>
                      </div>
                    )}
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary w-full hover:scale-105 transition-transform"
                    >
                      {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        <>
                          <LogIn size={20} />
                          Sign In
                        </>
                      )}
                    </button>
                  </form>
                  
                  {/* Divider */}
                  <div className="divider my-6">or</div>
                  
                  {/* Register Link */}
                  <div className="text-center">
                    <p className="text-base-content/60 mb-4">
                      Don&apos;t have an account?
                    </p>
                    <Link 
                      href="/register"
                      className="btn btn-outline btn-secondary w-full hover:scale-105 transition-transform"
                    >
                      Create New Account
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                  
                  {/* Additional Links */}
                  <div className="text-center mt-6 space-y-2">
                    <Link 
                      href="/"
                      className="link link-primary text-sm"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
