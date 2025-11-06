
const Logo = ({ size }: { size: number }) => {
  return (
    <img
      src={"/ro-cart-33-2.png"}
      className={`object-cover h-${size}`}
      alt="Rocart's Logo"
    />
  );
};

export default Logo;
