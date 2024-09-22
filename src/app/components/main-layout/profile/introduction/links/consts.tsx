import { IconType, SiBilibili, SiGithub, SiGmail, SiSteamdeck } from '@icons-pack/react-simple-icons';

interface ILink {
  Icon: IconType;
  href: string;
  label: string;
}

export const LINKS: ILink[] = [
  {
    Icon: SiGithub,
    href: '',
    label: 'Github',
  },
  {
    Icon: SiBilibili,
    href: '',
    label: 'BiliBili',
  },
  {
    Icon: SiSteamdeck,
    href: '',
    label: 'Steam',
  },
  {
    Icon: SiGmail,
    href: 'mailto:mailbox@zhang-wen-tao.com',
    label: 'Email',
  },
];
