import colors from "../theme/customcolors";

type RethinkLogoProps = {
  width?: number;
  darkMode: boolean;
  text?: boolean;
};

function RethinkLogo({
  width = 300,
  darkMode = false,
  text = true,
}: RethinkLogoProps) {
  return (
    <svg
      width={width}
      height={width * 0.8752}
      viewBox="0 0 350 306.34406654723864"
    >
      <g
        id="007"
        transform="matrix(5.810546875,0,0,5.810546875,82,0)"
        fill={
          darkMode ? colors.primary.lighter.dark : colors.primary.lighter.light
        }
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <polygon points="24,0 26.7,2.7 18.6,10.8 13.2,5.5 0,18.7 2.9,21.5 13.2,11.1 18.6,16.5 29.5,5.5 32,7.9 32,0  " />
          <polygon points="5.4,32 9.4,32 9.4,17.7 5.4,21.7  " />
          <polygon points="13.9,32 17.9,32 17.9,18.7 13.9,14.7  " />
          <polygon points="22.4,32 26.4,32 26.4,11.4 22.4,15.4  " />
        </g>
      </g>
      {text ? (
        <g
          id="008"
          transform="matrix(5.017203327361931,0,0,5.017203327361931,-5.418678494911184,184.5263687062398)"
          fill={colors.text.primary.main.dark}
        >
          <path d="M7.12 9.38 c0.24 0 0.44668 0.03334 0.62002 0.1 l0 2.64 c-0.30666 -0.06666 -0.64666 -0.1 -1.02 -0.1 c-1.8667 0 -2.8 1.1067 -2.8 3.32 l0 4.66 l-2.84 0 l0 -10.34 l2.7 0 l0 1.92 l0.04 0 c0.28 -0.66666 0.72334 -1.2 1.33 -1.6 s1.2633 -0.6 1.97 -0.6 z M13.280000000000001 9.38 c0.97334 0 1.84 0.22664 2.6 0.67998 s1.3567 1.11 1.79 1.97 s0.65 1.85 0.65 2.97 c0 0.10666 -0.0066602 0.28 -0.02 0.52 l-7.46 0 c0.02666 0.82666 0.24332 1.47 0.64998 1.93 s1.03 0.69 1.87 0.69 c0.52 0 0.99666 -0.13 1.43 -0.39 s0.71 -0.57666 0.83 -0.95 l2.5 0 c-0.73334 2.32 -2.3466 3.48 -4.84 3.48 c-0.94666 -0.01334 -1.8233 -0.22 -2.63 -0.62 s-1.45 -1.0233 -1.93 -1.87 s-0.72 -1.83 -0.72 -2.95 c0 -1.0533 0.24334 -2.0134 0.73 -2.88 s1.1333 -1.5133 1.94 -1.94 s1.6767 -0.64 2.61 -0.64 z M15.459999999999999 13.719999999999999 c-0.13334 -0.77334 -0.38 -1.3333 -0.74 -1.68 s-0.87334 -0.52 -1.54 -0.52 c-0.69334 0 -1.24 0.19666 -1.64 0.59 s-0.63334 0.93 -0.7 1.61 l4.62 0 z M22.2 4.279999999999999 l0 20 l-2.14 0 l0 -20 l2.14 0 z M28.04 6.5600000000000005 l0.000019531 3.1 l2.08 0 l0 1.9 l-2.08 0 l0 5.12 c0 0.48 0.08 0.8 0.24 0.96 s0.48 0.24 0.96 0.24 c0.34666 0 0.64 -0.02666 0.88 -0.08 l0 2.22 c-0.4 0.06666 -0.96 0.1 -1.68 0.1 c-1.0933 0 -1.9067 -0.18666 -2.44 -0.56 s-0.8 -1.02 -0.8 -1.94 l0 -6.06 l-1.72 0 l0 -1.9 l1.72 0 l0 -3.1 l2.84 0 z M34.32 5.720000000000001 l0 5.38 l0.06 0 c0.32 -0.53334 0.75334 -0.95334 1.3 -1.26 s1.1267 -0.46 1.74 -0.46 c1.32 0 2.2766 0.33334 2.87 1 s0.89 1.72 0.89 3.16 l0 6.46 l-2.84 0 l0 -5.88 c0 -0.84 -0.13666 -1.4667 -0.41 -1.88 s-0.74334 -0.62 -1.41 -0.62 c-0.76 0 -1.3167 0.23 -1.67 0.69 s-0.53 1.2167 -0.53 2.27 l0 5.42 l-2.84 0 l0 -14.28 l2.84 0 z M46.26 5.720000000000001 l0 2.34 l-2.84 0 l0 -2.34 l2.84 0 z M46.26 9.66 l0 10.34 l-2.84 0 l0 -10.34 l2.84 0 z M54.44 9.38 c1.32 0 2.2766 0.33338 2.87 1 s0.89 1.7267 0.89 3.18 l0 6.44 l-2.84 0 l0 -5.86 c0 -0.85334 -0.13666 -1.4867 -0.41 -1.9 s-0.74334 -0.62 -1.41 -0.62 c-0.77334 0 -1.3333 0.23334 -1.68 0.7 s-0.52 1.2333 -0.52 2.3 l0 5.38 l-2.84 0 l0 -10.34 l2.7 0 l0 1.44 l0.06 0 c0.70666 -1.1467 1.7667 -1.72 3.18 -1.72 z M63.46 5.720000000000001 l0 7.66 l3.58 -3.72 l3.36 0 l-3.9 3.8 l4.34 6.54 l-3.44 0 l-2.84 -4.62 l-1.1 1.06 l0 3.56 l-2.84 0 l0 -14.28 l2.84 0 z" />
        </g>
      ) : null}
    </svg>
  );
}
export default RethinkLogo;
