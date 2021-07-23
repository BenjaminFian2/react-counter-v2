import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ value, index, counters, setCounters }) => {
  return (
    <>
      <div className="Counter">
        <div className="boxIcon">
          {value > 0 && (
            <FontAwesomeIcon
              icon="minus"
              className="iconM"
              onClick={() => {
                const tab = [...counters];
                tab[index] = value - 1;
                setCounters(tab);
              }}
            />
          )}
        </div>

        <div className="count">
          <p>{value}</p>
          <button
            className="btnReset"
            onClick={() => {
              const tab = [...counters];
              tab[index] = 0;
              setCounters(tab);
            }}
          >
            Reset
          </button>
        </div>

        <div className="boxIcon">
          {value < 10 && (
            <FontAwesomeIcon
              icon="plus"
              className="iconP"
              onClick={() => {
                const tab = [...counters];
                tab[index] = value + 1;
                setCounters(tab);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Counter;
