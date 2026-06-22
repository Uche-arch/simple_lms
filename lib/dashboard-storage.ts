// export interface RoadmapData {
//   completedSections: string[];
//   progress: number;
//   lastStudied: string;
//   status: "Active" | "In Progress" | "Completed";
// }

// export interface ActivityItem {
//   name: string;
//   progress: string;
//   lastStudied: string;
//   status: string;
// }

// // const ROADMAP_KEY = "roadmap-progress";
// // const ACTIVITY_KEY = "dashboard-activity";
// // const STREAK_KEY = "study-streak";
// // const STATS_KEY = "dashboard-stats";
// // const CHART_KEY = "dashboard-chart";

// export const ROADMAP_KEY = "roadmap-progress";
// export const ACTIVITY_KEY = "dashboard-activity";
// export const STREAK_KEY = "study-streak";
// export const STATS_KEY = "dashboard-stats";
// export const CHART_KEY = "dashboard-chart";

// export function getRoadmaps() {
//   if (typeof window === "undefined") return {};

//   const data = localStorage.getItem(ROADMAP_KEY);

//   return data ? JSON.parse(data) : {};
// }

// export function getRoadmap(
//   roadmapName: string
// ): RoadmapData | null {
//   const roadmaps = getRoadmaps();

//   return roadmaps[roadmapName] || null;
// }

// export function saveRoadmap(
//   roadmapName: string,
//   roadmap: RoadmapData
// ) {
//   const roadmaps = getRoadmaps();

//   roadmaps[roadmapName] = roadmap;

//   localStorage.setItem(
//     ROADMAP_KEY,
//     JSON.stringify(roadmaps)
//   );
// }

// export function getActivities(): ActivityItem[] {
//   if (typeof window === "undefined") return [];

//   const data = localStorage.getItem(ACTIVITY_KEY);

//   return data ? JSON.parse(data) : [];
// }

// export function saveActivity(activity: ActivityItem) {
//   const activities = getActivities();

//   const existingIndex = activities.findIndex(
//     (item) => item.name === activity.name
//   );

//   if (existingIndex !== -1) {
//     activities[existingIndex] = activity;
//   } else {
//     activities.unshift(activity);
//   }

//   localStorage.setItem(
//     ACTIVITY_KEY,
//     JSON.stringify(activities)
//   );
// }

// export function getCompletedRoadmapsCount() {
//   const roadmaps = getRoadmaps();

//   return Object.values(roadmaps).filter(
//     (roadmap: any) => roadmap.progress === 100
//   ).length;
// }

// export function updateStudyStreak() {
//   const today = new Date().toDateString();

//   const streakData = JSON.parse(
//     localStorage.getItem(STREAK_KEY) ||
//       '{"streak":0,"lastVisit":""}'
//   );

//   if (streakData.lastVisit === today) {
//     return streakData.streak;
//   }

//   streakData.streak += 1;
//   streakData.lastVisit = today;

//   localStorage.setItem(
//     STREAK_KEY,
//     JSON.stringify(streakData)
//   );

//   return streakData.streak;
// }

// export function getStudyStreak() {
//   const streakData = JSON.parse(
//     localStorage.getItem(STREAK_KEY) ||
//       '{"streak":0,"lastVisit":""}'
//   );

//   return streakData.streak;
// }

// export function getDashboardStats() {
//   const existing = localStorage.getItem(STATS_KEY);

//   if (existing) {
//     return JSON.parse(existing);
//   }

//   const defaults = {
//     platformVisits: 12847,
//     activeStudents: 342,
//   };

//   localStorage.setItem(
//     STATS_KEY,
//     JSON.stringify(defaults)
//   );

//   return defaults;
// }

// export function updateDashboardStats() {
//   const stats = getDashboardStats();

//   const randomChange = () => {
//     const values = [-1, 0, 1, 2, 3];

//     return values[
//       Math.floor(Math.random() * values.length)
//     ];
//   };

//   stats.platformVisits += randomChange();
//   stats.activeStudents += randomChange();

//   localStorage.setItem(
//     STATS_KEY,
//     JSON.stringify(stats)
//   );

//   return stats;
// }

// // export function getChartData() {
// //   const existing = localStorage.getItem(CHART_KEY);

// //   if (existing) {
// //     return JSON.parse(existing);
// //   }

// //   const defaultChart = [
// //     { day: "Mon", users: 51 },
// //     { day: "Tue", users: 64 },
// //     { day: "Wed", users: 43 },
// //     { day: "Thu", users: 72 },
// //     { day: "Fri", users: 88 },
// //     { day: "Sat", users: 102 },
// //     { day: "Sun", users: 77 },
// //   ];

// //   localStorage.setItem(
// //     CHART_KEY,
// //     JSON.stringify(defaultChart)
// //   );

// //   return defaultChart;
// // }

// export function getChartData() {
//   const existing = localStorage.getItem(CHART_KEY);

//   if (existing) {
//     return JSON.parse(existing);
//   }

//   // 7 Days Structure (Mon - Sun)
//   const default7d = [
//     { label: "Mon", users: 51 },
//     { label: "Tue", users: 64 },
//     { label: "Wed", users: 43 },
//     { label: "Thu", users: 72 },
//     { label: "Fri", users: 88 },
//     { label: "Sat", users: 102 },
//     { label: "Sun", users: 77 },
//   ];

//   // 30 Days Dynamic Structure
//   const default30d = Array.from({ length: 30 }, (_, i) => ({
//     label: `Day ${i + 1}`,
//     users: Math.floor(Math.random() * (120 - 40 + 1)) + 40,
//   }));

//   // 12 Months Structure
//   const default12m = [
//     { label: "Jan", users: 1200 },
//     { label: "Feb", users: 1450 },
//     { label: "Mar", users: 1320 },
//     { label: "Apr", users: 1780 },
//     { label: "May", users: 2100 },
//     { label: "Jun", users: 1980 },
//     { label: "Jul", users: 2400 },
//     { label: "Aug", users: 2210 },
//     { label: "Sep", users: 2600 },
//     { label: "Oct", users: 2890 },
//     { label: "Nov", users: 2740 },
//     { label: "Dec", users: 3200 },
//   ];

//   const fullChartData = {
//     "7d": default7d,
//     "30d": default30d,
//     "12m": default12m,
//   };

//   localStorage.setItem(CHART_KEY, JSON.stringify(fullChartData));

//   return fullChartData;
// }

// // export function getChartData() {
// //   if (typeof window === "undefined") return null;

// //   let existing = localStorage.getItem(CHART_KEY);

// //   // Fallback Fix: If localStorage contains the old array format instead of our new object format, wipe it!
// //   if (existing && existing.trim().startsWith("[")) {
// //     localStorage.removeItem(CHART_KEY);
// //     existing = null;
// //   }

// //   if (existing) {
// //     return JSON.parse(existing);
// //   }

// //   // 7 Days Structure (Mon - Sun)
// //   const default7d = [
// //     { label: "Mon", users: 51 },
// //     { label: "Tue", users: 64 },
// //     { label: "Wed", users: 43 },
// //     { label: "Thu", users: 72 },
// //     { label: "Fri", users: 88 },
// //     { label: "Sat", users: 102 },
// //     { label: "Sun", users: 77 },
// //   ];

// //   // 30 Days Dynamic Structure
// //   const default30d = Array.from({ length: 30 }, (_, i) => ({
// //     label: `${i + 1}`,
// //     users: Math.floor(Math.random() * (120 - 40 + 1)) + 40,
// //   }));

// //   // 12 Months Structure
// //   const default12m = [
// //     { label: "Jan", users: 1200 },
// //     { label: "Feb", users: 1450 },
// //     { label: "Mar", users: 1320 },
// //     { label: "Apr", users: 1780 },
// //     { label: "May", users: 2100 },
// //     { label: "Jun", users: 1980 },
// //     { label: "Jul", users: 2400 },
// //     { label: "Aug", users: 2210 },
// //     { label: "Sep", users: 2600 },
// //     { label: "Oct", users: 2890 },
// //     { label: "Nov", users: 2740 },
// //     { label: "Dec", users: 3200 },
// //   ];

// //   const fullChartData = {
// //     "7d": default7d,
// //     "30d": default30d,
// //     "12m": default12m,
// //   };

// //   localStorage.setItem(CHART_KEY, JSON.stringify(fullChartData));

// //   return fullChartData;
// // }

export interface RoadmapData {
  completedSections: string[];
  progress: number;
  lastStudied: string;
  status: "Active" | "In Progress" | "Completed";
}

export interface ActivityItem {
  name: string;
  progress: string;
  lastStudied: string;
  status: string;
}

export const ROADMAP_KEY = "roadmap-progress";
export const ACTIVITY_KEY = "dashboard-activity";
// export const STREAK_KEY = "study-streak";
export const STREAK_KEY = "study-streak";
export const PERSONAL_BEST_KEY = "study-personal-best";
export const STATS_KEY = "dashboard-stats";
export const CHART_KEY = "dashboard-chart";

export function getRoadmaps() {
  if (typeof window === "undefined") return {};
  const data = localStorage.getItem(ROADMAP_KEY);
  return data ? JSON.parse(data) : {};
}

// MODIFIED: Automatically initializes unvisited roadmaps as "Active"
export function getRoadmap(
  roadmapName: string,
  roadmapTitle?: string,
): RoadmapData | null {
  if (typeof window === "undefined") return null;

  const roadmaps = getRoadmaps();

  // If the roadmap data exists, return it cleanly
  if (roadmaps[roadmapName]) {
    return roadmaps[roadmapName];
  }

  // FIRST TIME OPENING TRACK LOGIC: Initialize data matching the exact required interface layout structures
  // const today = new Date().toLocaleDateString();
  const today = new Date().toISOString();
  const initialTrackData: RoadmapData = {
    completedSections: [],
    progress: 0,
    lastStudied: today,
    status: "Active",
  };

  // Persist the newly active track layout entry back into the shared object database
  roadmaps[roadmapName] = initialTrackData;
  localStorage.setItem(ROADMAP_KEY, JSON.stringify(roadmaps));

  // Sync the dashboard activity table tracking system instantly
  saveActivity({
    name: roadmapTitle || `${roadmapName.toUpperCase()} Roadmap`,
    progress: "0%",
    lastStudied: today,
    status: "Active",
  });

  return initialTrackData;
}

export function saveRoadmap(roadmapName: string, roadmap: RoadmapData) {
  const roadmaps = getRoadmaps();
  roadmaps[roadmapName] = roadmap;
  localStorage.setItem(ROADMAP_KEY, JSON.stringify(roadmaps));
}

// export function getActivities(): ActivityItem[] {
//   if (typeof window === "undefined") return [];
//   const data = localStorage.getItem(ACTIVITY_KEY);
//   return data ? JSON.parse(data) : [];
// }

export function getActivities(): ActivityItem[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(ACTIVITY_KEY);
  const activities = data ? JSON.parse(data) : [];

  return activities.sort(
    (a: ActivityItem, b: ActivityItem) =>
      new Date(b.lastStudied).getTime() -
      new Date(a.lastStudied).getTime()
  );
}

// export function saveActivity(activity: ActivityItem) {
//   const activities = getActivities();
//   const existingIndex = activities.findIndex(
//     (item) => item.name === activity.name,
//   );

//   // if (existingIndex !== -1) {
//   //   activities[existingIndex] = activity;
//   // } else {
//   //   activities.unshift(activity);
//   // }

//   if (existingIndex !== -1) {
//     activities.splice(existingIndex, 1);
//   }

//   activities.unshift(activity);

//   localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activities));
// }

export function saveActivity(activity: ActivityItem) {
  const activities = getActivities();
  
  // 1. Find if this roadmap already exists in the activity feed
  const existingIndex = activities.findIndex(
    (item) => item.name === activity.name,
  );

  // 2. Remove it if it exists so we don't have duplicates
  if (existingIndex !== -1) {
    activities.splice(existingIndex, 1);
  }

  // 3. CRITICAL: Force the timestamp to be right NOW 
  // This ensures that the item you just clicked always has the newest time stub.
  const updatedActivity = {
    ...activity,
    lastStudied: new Date().toISOString()
  };

  // 4. Push it straight to the top of the array
  activities.unshift(updatedActivity);

  localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activities));
}

export function getCompletedRoadmapsCount() {
  const roadmaps = getRoadmaps();
  return Object.values(roadmaps).filter(
    (roadmap: any) => roadmap.progress === 100,
  ).length;
}

// export function updateStudyStreak() {
//   const today = new Date().toDateString();
//   const streakData = JSON.parse(
//     localStorage.getItem(STREAK_KEY) || '{"streak":0,"lastVisit":""}',
//   );

//   if (streakData.lastVisit === today) {
//     return streakData.streak;
//   }

//   streakData.streak += 1;
//   streakData.lastVisit = today;
//   localStorage.setItem(STREAK_KEY, JSON.stringify(streakData));
//   return streakData.streak;
// }

export function updateStudyStreak() {
  const now = new Date();

  const streakData = JSON.parse(
    localStorage.getItem(STREAK_KEY) ||
      '{"streak":0,"lastVisit":null}'
  );

  const personalBest = Number(
    localStorage.getItem(PERSONAL_BEST_KEY) || 0
  );

  // First ever study session
  if (!streakData.lastVisit) {
    streakData.streak = 1;
    streakData.lastVisit = now.toISOString();

    localStorage.setItem(
      STREAK_KEY,
      JSON.stringify(streakData)
    );

    localStorage.setItem(
      PERSONAL_BEST_KEY,
      "1"
    );

    return 1;
  }

  const lastVisit = new Date(streakData.lastVisit);

  const msPerDay = 1000 * 60 * 60 * 24;

  const daysDifference = Math.floor(
    (now.getTime() - lastVisit.getTime()) /
      msPerDay
  );

  // Already studied today
  if (daysDifference === 0) {
    return streakData.streak;
  }

  // Consecutive day
  if (daysDifference === 1) {
    streakData.streak += 1;
  }

  // Missed a day
  if (daysDifference > 1) {
    streakData.streak = 1;
  }

  streakData.lastVisit = now.toISOString();

  localStorage.setItem(
    STREAK_KEY,
    JSON.stringify(streakData)
  );

  if (streakData.streak > personalBest) {
    localStorage.setItem(
      PERSONAL_BEST_KEY,
      String(streakData.streak)
    );
  }

  return streakData.streak;
}

export function getStudyStreak() {
  const streakData = JSON.parse(
    localStorage.getItem(STREAK_KEY) ||
      '{"streak":0,"lastVisit":null}'
  );

  if (!streakData.lastVisit) {
    return 0;
  }

  const lastVisit = new Date(streakData.lastVisit);
  const now = new Date();

  const daysDifference = Math.floor(
    (now.getTime() - lastVisit.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  // Streak expired
  if (daysDifference > 1) {
    streakData.streak = 0;

    localStorage.setItem(
      STREAK_KEY,
      JSON.stringify(streakData)
    );

    return 0;
  }

  return streakData.streak;
}

export function getPersonalBest() {
  return Number(
    localStorage.getItem(PERSONAL_BEST_KEY) || 0
  );
}

// export function getStudyStreak() {
//   const streakData = JSON.parse(
//     localStorage.getItem(STREAK_KEY) || '{"streak":0,"lastVisit":""}',
//   );
//   return streakData.streak;
// }

export function getDashboardStats() {
  const existing = localStorage.getItem(STATS_KEY);
  if (existing) return JSON.parse(existing);

  const defaults = { platformVisits: 12847, activeStudents: 342 };
  localStorage.setItem(STATS_KEY, JSON.stringify(defaults));
  return defaults;
}

export function updateDashboardStats() {
  const stats = getDashboardStats();
  const randomChange = () => {
    const values = [-1, 0, 1, 2, 3];
    return values[Math.floor(Math.random() * values.length)];
  };

  stats.platformVisits += randomChange();
  stats.activeStudents += randomChange();
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  return stats;
}

export function getChartData() {
  if (typeof window === "undefined") return null;
  let existing = localStorage.getItem(CHART_KEY);

  if (existing && existing.trim().startsWith("[")) {
    localStorage.removeItem(CHART_KEY);
    existing = null;
  }

  if (existing) return JSON.parse(existing);

  const default7d = [
    { label: "Mon", users: 51 },
    { label: "Tue", users: 64 },
    { label: "Wed", users: 43 },
    { label: "Thu", users: 72 },
    { label: "Fri", users: 88 },
    { label: "Sat", users: 102 },
    { label: "Sun", users: 77 },
  ];

  // const default30d = Array.from({ length: 30 }, (_, i) => ({
  //   label: `${i + 1}`,
  //   users: Math.floor(Math.random() * (120 - 40 + 1)) + 40,
  // }));

  const default30d = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));

    return {
      label: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      users: Math.floor(Math.random() * (120 - 40 + 1)) + 40,
    };
  });

  const default12m = [
    { label: "Jan", users: 1200 },
    { label: "Feb", users: 1450 },
    { label: "Mar", users: 1320 },
    { label: "Apr", users: 1780 },
    { label: "May", users: 2100 },
    { label: "Jun", users: 1980 },
    { label: "Jul", users: 2400 },
    { label: "Aug", users: 2210 },
    { label: "Sep", users: 2600 },
    { label: "Oct", users: 2890 },
    { label: "Nov", users: 2740 },
    { label: "Dec", users: 3200 },
  ];

  const fullChartData = {
    "7d": default7d,
    "30d": default30d,
    "12m": default12m,
  };
  localStorage.setItem(CHART_KEY, JSON.stringify(fullChartData));
  return fullChartData;
}
