type Props = {
  width?: number;
  height?: number;
};

const Spacer = ({ width = 0, height = 0 }: Props) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
      }}
    ></div>
  );
};

export default Spacer;
