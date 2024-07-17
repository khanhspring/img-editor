import * as Icons from './icons';

type IconProps = {
  name: keyof typeof Icons | string;
  [x: string]: any;
};
export default function Icon({ name, ...rest }: IconProps) {
  const CustomIcon = (name ? (Icons as any)[name] : null) || Icons.SquareIcon;
  return <CustomIcon {...rest} />;
}
