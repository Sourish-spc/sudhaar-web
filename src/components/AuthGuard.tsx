"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = { children: React.ReactNode };

export default function AuthGuard({ children }: Props) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // client-only check
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      // not logged -> go to login page ("/")
      router.replace("/");
    } else {
      setChecked(true);
    }
  }, [router]);

  // show nothing (or loading) until we verify to avoid flashing protected UI
  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span>Checking session…</span>
      </div>
    );
  }

  return <>{children}</>;
}
