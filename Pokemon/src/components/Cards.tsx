// Deklarera en prop med TS
const Card = ({
  colorChoise,
  children,
}: {
  colorChoise: string;
  children: React.ReactNode;
}) => {
  return <div className={colorChoise}>{children}</div>;
};

export default Card;
