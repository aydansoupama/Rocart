
const Logo = ({ size }: { size: number }) => {
  return (
    <img
      src={"/bloxbeam_logo.png"}
      className={`object-cover h-${size}`}
      alt="Bloxbeam's Logo"
    />
  );
};

export default Logo;
