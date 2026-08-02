// Career history from Joshua's LinkedIn export, filtered to the roles that
// carry the story. Advisory seats and short memberships are omitted here -
// they add rows without adding meaning. `end: null` means current.

export type Role = {
  company: string
  title: string
  start: number
  end: number | null
}

export const career: Role[] = [
  {
    company: 'YOUmanize Your Brand',
    title: 'Podcaster and Co-Host',
    start: 2025,
    end: null,
  },
  {
    company: 'Entrepreneur Media',
    title: 'Guest Writer',
    start: 2015,
    end: 2024,
  },
  {
    company: 'StandOut Authority',
    title: 'Founder, StandOut Authority — Dopamine Dealer of LinkedIn',
    start: 2014,
    end: null,
  },
  {
    company: 'Monstapreneur',
    title: 'Founder',
    start: 2013,
    end: 2019,
  },
  {
    company: 'MySearchNetwork',
    title: 'CEO/Founder',
    start: 2009,
    end: 2015,
  },
  {
    company: 'Adfirmative.com',
    title: 'CEO/Founder',
    start: 2005,
    end: 2016,
  },
  {
    company: 'LF Media, Inc',
    title: 'President/Founder',
    start: 2005,
    end: 2016,
  },
  {
    company: 'Net Visibility, Inc.',
    title: 'Network Director',
    start: 2002,
    end: 2005,
  },
  {
    company: 'AT&T',
    title: 'Business Account Executive',
    start: 1998,
    end: 2001,
  },
  {
    company: 'Chili\'s',
    title: 'Server',
    start: 1996,
    end: 1997,
  },
]
