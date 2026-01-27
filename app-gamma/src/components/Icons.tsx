type Props = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number;
  color? : string;
};

const Icons = ({ Icon, size, color }: Props) => {
  return <Icon width={size} height={size} style={{color}} />;
};

export default Icons;
