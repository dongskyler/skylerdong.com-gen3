export interface IfcResume {
  resume?: {
    basics?: {
      name?: string;
      names?: {
        firstName?: string;
        middleName?: string;
        lastName?: string;
      };
      label?: string;
      picture?: string;
      email?: string;
      phone?: string;
      website?: string;
      summary?: string;
      location?: {
        address?: string;
        postalCode?: string;
        city?: string;
        region?: string;
        countryCode?: string;
      };
      profiles?: {
        network?: string;
        username?: string;
        url?: string;
        icon?: {
          iconPrefix?: string | any;
          iconName?: string | any;
        };
      }[];
      resumeDownload?: string;
    };
    work?: {
      company?: string;
      position?: string;
      website?: string;
      startDate?: string;
      endDate?: string;
      summary?: string;
      highlights?: string[];
    }[];
    projects?: {
      name?: string;
      organization?: string;
      position?: string;
      startDate?: string;
      endDate?: string;
      website?: string;
      repository?: string;
      summary?: string;
      highlights?: string[];
    }[];
    volunteer?: {
      organization?: string;
      position?: string;
      website?: string;
      startDate?: string;
      endDate?: string;
      summary?: string;
      highlights?: string[];
    }[];
    education?: {
      institution?: string;
      city?: string;
      region?: string;
      countryCode?: string;
      area?: string;
      studyType?: string;
      startDate?: string;
      endDate?: string;
      gpa?: string;
      courses?: string[];
    }[];
    awards?: {
      title?: string;
      date?: string;
      awarder?: string;
      summary?: string;
    }[];
    publications?: {
      name?: string;
      publisher?: string;
      releaseDate?: string;
      website?: string;
      summary?: string;
    }[];
    skills?: {
      name?: string;
      level?: number;
      keywords?: string[];
    }[];
    languages?: {
      language?: string;
      fluency?: string;
    }[];
    interests?: {
      name?: string;
      keywords?: string[];
    }[];
  };
}
