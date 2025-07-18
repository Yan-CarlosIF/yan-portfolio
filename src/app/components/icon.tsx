import type { IconType } from 'react-icons';

interface IconProps {
  Icon: IconType;
  name: string;
  color?: string;
}

export function IconComponent({ Icon, name, color }: IconProps) {
  return (
    <span className="flex flex-col items-center gap-3">
      <Icon className="size-6" color={color} />
      <p className="font-medium">{name}</p>
    </span>
  );
}
