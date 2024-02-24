type Props = {
  color?: string;
};
const IconX = ({ color = "#040914" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="55"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export default IconX;
