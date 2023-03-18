import "./index.css";

const MiniList = ({ titleText }) => {
  return (
    <div className="MiniList">
      <h2>{titleText}</h2>
      <div className="MiniList__icons">
        <div>
          <p>🪑</p>
          <p>Chair</p>
        </div>
        <div>
          <p>🛏️</p>
        </div>
        <div>
          <p>👜</p>
        </div>
        <div>
          <p>🛖</p>
        </div>
      </div>
    </div>
  );
};

export default MiniList;
