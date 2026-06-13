    // export interface LessonNode {
    // id: string;          // Unique identifier (used for LocalStorage tracking)
    // title: string;       // Name of the lesson (e.g., "Semantic HTML")
    // duration: string;    // Estimated time to finish (e.g., "45 mins")
    // summary: string;     // Your custom 2-line killer takeaway
    // videoUrl: string;    // The curated YouTube video ID or full URL
    // articleUrl?: string; // Optional: Link to official docs or MDN
    // resourcePack: {      // The "Bait" assets for this specific node
    //     projectBrief: string;
    //     starterFilesUrl?: string; 
    // };
    // }   

    export interface LessonNode {
  id: string;
  title: string;
  duration: string;
  summary: string;

  videoUrl: string;
  articleUrl?: string;

  project: {
    title: string;
    description: string;
    referenceUrl?: string;
    referenceLabel?: string;
  };
}