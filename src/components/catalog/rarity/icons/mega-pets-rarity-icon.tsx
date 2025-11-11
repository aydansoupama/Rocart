interface RarityIconProps extends React.SVGProps<SVGSVGElement> {
  fromColor: string;
  toColor: string;
}

const MegaPetsRarityIcon = ({ fromColor, toColor }: RarityIconProps) => {
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
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000) rotate(90, 2560, 2560)"
        fill={`url(#${gradientId})`}
        stroke="none"
      >
        <path
          d="M2647 4370 c-118 -37 -210 -119 -264 -236 l-28 -59 -5 -330 -5 -330
-251 -5 -251 -5 -39 -27 c-21 -15 -50 -44 -64 -65 l-25 -37 0 -716 0 -717 27
-39 c15 -21 44 -50 65 -64 36 -25 40 -25 287 -30 l251 -5 5 -330 5 -330 31
-65 c89 -186 288 -284 483 -239 123 28 108 15 907 813 877 876 819 805 819
1006 0 201 58 130 -819 1006 -799 798 -784 785 -907 813 -67 16 -157 12 -222
-9z m828 -2510 l-700 -700 -5 418 -5 418 -25 37 c-14 21 -43 50 -64 65 l-39
27 -251 5 -251 5 0 425 0 425 251 5 c247 5 251 5 287 30 21 14 50 43 65 64
l27 39 3 421 3 420 702 -702 702 -702 -700 -700z"
        />
        <path
          d="M554 3396 c-44 -20 -102 -83 -115 -125 -7 -24 -9 -270 -7 -732 l3
-695 25 -37 c14 -21 43 -50 64 -65 35 -24 49 -27 116 -27 67 0 81 3 116 27 21
15 50 44 64 65 l25 37 0 716 0 717 -27 39 c-44 63 -90 88 -167 91 -41 2 -78
-2 -97 -11z"
        />
        <path
          d="M1194 3396 c-44 -20 -102 -83 -115 -125 -7 -24 -9 -270 -7 -732 l3
-695 25 -37 c14 -21 43 -50 64 -65 35 -24 49 -27 116 -27 67 0 81 3 116 27 21
15 50 44 64 65 l25 37 0 716 0 717 -27 39 c-44 63 -90 88 -167 91 -41 2 -78
-2 -97 -11z"
        />
      </g>
    </svg>
  );
};

export default MegaPetsRarityIcon;
