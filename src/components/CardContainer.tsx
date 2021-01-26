import CSS from 'csstype';
import { Fragment } from 'react';
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
          <Fragment key={idx}>
            <img
              className={`front card-img card${idx}`}
              src={process.env.PUBLIC_URL + `/image/${card}.jpg`}
              alt="card"
              style={style}
            />
            <img
              className={`back card-img card${idx}`}
              src={backImg}
              alt="back"
              style={style}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default CardContainer;
