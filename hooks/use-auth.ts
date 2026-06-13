"use client";

import { useEffect, useState } from "react";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function check() {
      const res = await fetch("/api/dashboard");
      const data = await res.json();

      setAuthenticated(data.authenticated);
    }

    check();
  }, []);

  return { authenticated };
}