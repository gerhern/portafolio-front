import {Technology} from './technology';
import {Images} from '../images';

export interface Project {
  id: number;
  title: string;
  short_description: string;
  description: string;
  created_at: string;
  technologies: Technology[];
  images: Images[];
}
