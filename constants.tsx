
// @ts-ignore - Importing from sibling file
import { Project, Experience, Skill } from './types';

/**
 * PROJECTS: Portfolio items for Shelby Berry.
 * Used in Home.tsx (featured) and Portfolio.tsx (all).
 */
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NFL Gameday Branding',
    category: 'Branding',
    description: 'Complete brand identity and visual language for NFL gameday marketing materials, focusing on fan engagement and consistency across digital platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=800&auto=format&fit=crop',
    tags: ['Branding', 'Sports', 'Identity']
  },
  {
    id: '2',
    title: 'Tapout Apparel Line',
    category: 'Print',
    description: 'Art direction and design for a seasonal apparel line, including graphic tees, tech packs, and marketing collateral for international retail.',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    tags: ['Apparel', 'Graphic Design', 'Print']
  },
  {
    id: '3',
    title: 'BKFC Event Visuals',
    category: 'Logo Design',
    description: 'High-impact logo design and event branding for Bare Knuckle Fighting Championship, ensuring visibility across broadcast and arena signage.',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
    tags: ['Sports', 'Identity', 'Logo']
  },
  {
    id: '4',
    title: 'Warner Bros Campaign',
    category: 'Web',
    description: 'Digital marketing campaign and microsite design for upcoming theatrical releases, bridging the gap between print advertising and digital interaction.',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
    tags: ['Web Design', 'Entertainment', 'Marketing']
  },
  {
    id: '5',
    title: 'MLB Visual Identity',
    category: 'Branding',
    description: 'Seasonal visual identity development for Major League Baseball franchises, focusing on heritage and modern fan appeal.',
    imageUrl: 'https://images.unsplash.com/photo-1508344928928-7165037df802?q=80&w=800&auto=format&fit=crop',
    tags: ['Branding', 'Baseball', 'Sports']
  },
  {
    id: '6',
    title: 'Mike Tyson Gear',
    category: 'Print',
    description: 'Design and marketing strategy for licensed apparel and equipment for the Mike Tyson brand, emphasizing power and legacy.',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
    tags: ['Apparel', 'Logo Design', 'Sports']
  }
];

/**
 * SKILLS: Professional capabilities and proficiency levels.
 * Used in About.tsx.
 */
export const SKILLS: Skill[] = [
  { name: 'Adobe Creative Suite', level: 100 },
  { name: 'Brand Management', level: 95 },
  { name: 'Web Design', level: 90 },
  { name: 'Print Production', level: 100 },
  { name: 'Marketing Strategy', level: 85 },
  { name: 'UI/UX Design', level: 88 },
  { name: 'Art Direction', level: 96 },
  { name: 'Logo Design', level: 98 }
];

/**
 * EXPERIENCES: Professional journey over 30+ years.
 * Used in About.tsx.
 */
export const EXPERIENCES: Experience[] = [
  {
    company: 'Self-Employed / Independent',
    role: 'Senior Creative Director & Marketing Consultant',
    period: '2015 - Present',
    location: 'Houston, TX',
    description: [
      'Leading end-to-end creative strategy for major sports and entertainment brands including NFL, MLB, and Warner Bros.',
      'Developing comprehensive brand identities that resonate with global audiences through strategic visual storytelling.',
      'Consulting on multi-channel marketing campaigns and optimizing large-scale print production workflows.',
      'Managing complete project lifecycles from initial concept and art direction to final delivery.'
    ]
  },
  {
    company: 'Leading Creative Agency',
    role: 'Senior Graphic Designer',
    period: '2005 - 2015',
    location: 'Houston, TX',
    description: [
      'Managed high-profile accounts, delivering iconic gameday branding and marketing collateral.',
      'Collaborated with cross-functional teams to bridge the gap between creative vision and technical execution.',
      'Oversaw technical aspects of print production, including complex color management and substrate selection.',
      'Mentored junior designers and established studio-wide design standards.'
    ]
  },
  {
    company: 'Retail Design Firm',
    role: 'Marketing Manager',
    period: '1995 - 2005',
    location: 'Houston, TX',
    description: [
      'Developed and executed data-driven marketing plans for national retail rollouts.',
      'Directed graphic design teams in the creation of point-of-purchase displays and signage for major retail environments.',
      'Streamlined internal design processes, increasing project turnaround by 40%.',
      'Established core brand guidelines that ensured consistency across all consumer touchpoints.'
    ]
  }
];
