export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle - blue */}
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" className="text-primary" />
      
      {/* Inner gear teeth */}
      <path
        d="M20 6V10M20 30V34M6 20H10M30 20H34M10.1 10.1L13 13M27 27L29.9 29.9M29.9 10.1L27 13M13 27L10.1 29.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-primary"
      />
      
      {/* Center wrench shape */}
      <path
        d="M16 14L24 22M24 14L16 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-foreground"
      />
      
      {/* Center dot */}
      <circle cx="20" cy="18" r="3" fill="currentColor" className="text-primary" />
    </svg>
  )
}
