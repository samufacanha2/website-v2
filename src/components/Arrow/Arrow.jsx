import ArrowDownSvg from "../../assets/icons/double-arrow-down.svg";

export const ArrowUp = () => {
  return (
    <div
      data-aos="fade-up"
      className="arrow-down up"
      onClick={() => window.scrollBy(0, -1 * window.innerHeight)}
    >
      <img src={ArrowDownSvg} />
    </div>
  );
};
export const ArrowDown = () => {
  return (
    <div
      className="arrow-down"
      onClick={() => window.scrollBy(0, window.innerHeight)}
    >
      <img src={ArrowDownSvg} />
    </div>
  );
};
