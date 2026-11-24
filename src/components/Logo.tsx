
interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({
  size = 40,
  className = "",
}: LogoProps) {
  return (
    <img
      src="/tenderwise-logo.png"
      alt="TenderWise"
      style={{ height: size }}
      className={`w-auto object-contain ${className}`}
    />
  );
}
