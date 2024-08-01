import {Technology} from './technology';

export interface Project {
  id: number;
  title: string;
  short_description: string;
  description: string;
  created_at: string;
  technologies: Technology[];
}
