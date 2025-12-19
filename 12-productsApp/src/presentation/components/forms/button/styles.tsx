import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: 'items-center rounded p-4 active:opacity-70',
  variants: {
    variant: {
      primary: 'bg-primary',
      secondary: 'bg-gray-500',
      link: 'bg-transparent',
    },
  },
});
