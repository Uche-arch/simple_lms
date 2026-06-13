"use client";
interface Course {
  name: string;
  progress: string;
  time: string;
  lastStudied: string;
  status: string;
}

interface DashboardData {
  authenticated: boolean;
  studyHours: number;
  completedCourses: number;
  streak: number;
  dailyFocus: number;
  chartData: {
    day: string;
    hours: number;
  }[];
  courses: Course[];
}


import { useEffect, useState } from "react";

export function useDashboard() {
  const [loading, setLoading] = useState(true);

//   const [data, setData] = useState<any>(null);
const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/dashboard");

      const result = await res.json();

      setData(result);

      setLoading(false);
    }

    load();
  }, []);

  return {
    loading,
    data,
  };
}