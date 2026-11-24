interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/tenderwise-logo.png"
      alt="TenderWise"
      className={`h-10 w-auto object-contain ${className}`}
    />
  );
}