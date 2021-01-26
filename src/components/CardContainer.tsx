import CSS from 'csstype';
import './CardContainer.css';

const backImg =
  'https://i.pinimg.com/564x/91/69/ef/9169ef73b3564976a7dc564d66861027.jpg';

interface Props {
  cardSet: string[];
}

const CardContainer = ({ cardSet }: Props) => {
  return (
    <div className="card-container">
      {cardSet.map((card, idx) => {
        const style: CSS.Properties = {
          zIndex: -idx,
        };
        return (
          <>
            <img
              key={`f${idx}`}
              className={`front card-img card${idx}`}
              src={process.env.PUBLIC_URL + `/image/${card}.jpg`}
              alt="card"
              style={style}
            />
            <img
              style={style}
              className={`back card-img card${idx}`}
              key={`b${idx}`}
              src={backImg}
              alt="back"
            />
          </>
        );
      })}
    </div>
  );
};

export default CardContainer;
