type Props = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number;
};

const Icons = ({ Icon, size }: Props) => {
  return <Icon width={size} height={size} />;
};

export default Icons;
