import { HiHome, HiCalendar, HiBookOpen } from 'react-icons/hi';

export const navItems = [
  {
    to: '/home',
    text: 'Головна',
    icon: <HiHome size='24' />,
  },
  {
    to: '/schedule',
    text: 'Розклад',
    icon: <HiCalendar size='24' />,
  },
  {
    to: '/book',
    text: 'Конспект',
    icon: <HiBookOpen size='24' />,
  },
];
