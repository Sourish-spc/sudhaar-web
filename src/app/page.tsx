'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  // Validation function
  const validateLogin = (uid: string, pwd: string) => {
    const hardcodedUid = "123456789";
    const hardcodedPwd = "1111";

    if (uid !== hardcodedUid) {
      return "User not found";
    }
    if (pwd !== hardcodedPwd) {
      return "Wrong password";
    }
    return ""; // No error → login successful
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validate login
    const validationError = validateLogin(userId, password);
    if (validationError) {
      setError(validationError);
    } else {
      setSuccess("Login successful! Redirecting...");
      
      // Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      {/* Welcome Section - Left Side */}
      <div className="welcome-section">
        {/* Logo and Branding */}
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="logo-text">Single sign-on (SSO)</div>
        </div>

        {/* Welcome Text */}
        <h1 className="welcome-title">WELCOME BACK !</h1>
        <p className="welcome-subtitle">
          Enter your ID and Password to continue
        </p>
      </div>

      {/* Login Section - Right Side */}
      <div className="login-section">
        <div className="login-form-container">
          {/* Login Header */}
          <div className="login-header">
            <h2 className="login-title">SIGN IN</h2>
            <p className="login-subtitle">TO ACCESS THE PORTAL</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="alert alert-success">
                {success}
              </div>
            )}

            {/* User ID Field */}
            <div className="form-group">
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User Name Here"
                className="form-input"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="form-input"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="login-button"
            >
              {isLoading ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Login'
              )}
            </button>

            {/* Forgot Password */}
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="login-footer">
          Copyright © 2022 Corporate Info Tech Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}