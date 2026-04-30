export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon shape - automotive feel */}
      <path
        d="M22 3L38 12.5V31.5L22 41L6 31.5V12.5L22 3Z"
        fill="#2563EB"
        opacity="0.12"
      />
      <path
        d="M22 3L38 12.5V31.5L22 41L6 31.5V12.5L22 3Z"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Wrench icon - clean automotive symbol */}
      <path
        d="M27.5 14.5C25.8 12.8 23.2 12.3 21 13.3L24 16.3L22.6 17.7L19.6 14.7C18.6 16.9 19.1 19.5 20.8 21.2C22.5 22.9 25.1 23.4 27.3 22.4L31.5 26.6C32.1 27.2 32.1 28.2 31.5 28.8L30.1 30.2C29.5 30.8 28.5 30.8 27.9 30.2L23.7 26C21.5 27 18.9 26.5 17.2 24.8C15.5 23.1 15 20.5 16 18.3"
        stroke="#1e3a5f"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
