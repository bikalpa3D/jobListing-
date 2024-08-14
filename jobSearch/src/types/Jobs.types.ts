export type Data = {
  job_id: string;
  employer_name: string;
  job_employment_type: string;
  job_title: string;
  job_is_remote: false;
  job_apply_link: string;
  job_description: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_highlights: JobHighLights;
};

type JobHighLights = {
  Qualifications: string[];
  Responsibilities: string[];
  Benefits: string[];
};

export interface ChildProps {
  children: React.ReactNode;
}
