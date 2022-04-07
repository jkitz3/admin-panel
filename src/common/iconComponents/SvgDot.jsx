export const SvgDot = ({ fill = "#FFF", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={8} cy={8} r={4} />
  </svg>
);
