interface RarityIconProps extends React.SVGProps<SVGSVGElement> {
  fromColor: string;
  toColor: string;
}

const ShecklesRarityIcon = ({ fromColor, toColor }: RarityIconProps) => {
  const gradientId = `rarity-gradient-${fromColor}-${toColor}`.replace(
    /#/g,
    ""
  );

  return (
    <svg viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: toColor }} />
          <stop offset="100%" style={{ stopColor: fromColor }} />
        </linearGradient>
      </defs>

      <g fill={`url(#${gradientId})`}>
        <polygon points="360.1,175.1 306.5,359.1 63,359.1 184.2,175.1  " />
        <polygon points="307.2,399.1 459.8,820.7 70.8,399.1  " />
        <polygon points="718.3,399.1 953.3,399.1 565.5,820.3  " />
        <polygon points="719.1,359.1 665.5,175.1 839.8,175.1 961,359.1  " />
        <polygon points="675.8,399.1 530.8,798.6 512.6,848.9 494.3,798.5 349.8,399.1  " />
        <polygon points="677.4,359.1 348.1,359.1 401.7,175.1 623.8,175.1  " />
      </g>
    </svg>
  );
};

export default ShecklesRarityIcon;
