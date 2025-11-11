interface RarityIconProps extends React.SVGProps<SVGSVGElement> {
  fromColor: string;
  toColor: string;
}

const BundlesRarityIcon = ({ fromColor, toColor }: RarityIconProps) => {
  const gradientId = `rarity-gradient-${fromColor}-${toColor}`.replace(
    /#/g,
    ""
  );

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: toColor }} />
          <stop offset="100%" style={{ stopColor: fromColor }} />
        </linearGradient>
      </defs>

      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={`url(#${gradientId})`}
        stroke="none"
      >
        <path
          d="M764 4255 c-82 -18 -137 -47 -201 -107 -61 -59 -94 -112 -117 -187
-14 -49 -16 -193 -16 -1401 0 -1470 -3 -1395 56 -1496 31 -53 119 -136 173
-164 101 -51 48 -50 1901 -50 1852 0 1800 -1 1900 50 55 28 131 100 169 158
64 102 61 19 61 1502 0 1470 3 1395 -56 1496 -31 53 -119 136 -173 164 -101
51 -47 50 -1906 49 -1400 0 -1742 -3 -1791 -14z m3504 -947 l2 -318 -1710 0
-1710 0 0 313 c0 173 3 317 7 320 3 4 772 6 1707 5 l1701 -3 3 -317z"
        />
      </g>
    </svg>
  );
};

export default BundlesRarityIcon;
