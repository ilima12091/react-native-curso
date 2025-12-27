import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: 'items-center rounded p-4 active:opacity-70 disabled:opacity-60',
  variants: {
    variant: {
      primary: 'bg-primary',
      secondary: 'bg-gray-500',
      link: 'bg-transparent text-primary p-0',
      danger: 'bg-red-600',
      fab: 'absolute bottom-8 right-8 w-16 h-16 rounded-full bg-primary items-center justify-center shadow-lg',
    },
  },
});

export const buttonTextStyles = tv({
  base: 'color-text-primary-contrast font-bold',
  variants: {
    variant: {
      primary: 'text-white',
      secondary: 'text-white',
      link: '!color-primary',
      danger: 'text-white',
      fab: 'text-white text-3xl',
    },
  },
});
