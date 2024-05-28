import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../Features/cardSlice";
import axios from "axios";
const Card = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const fields = useSelector((state) => state.value);

  const filteredCard = cards.filter((card) =>
    card.name.toLowerCase().includes(fields)
  );

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/beers/ale")
      .then((res) => {
        dispatch(addCard(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-start w-[80%] flex-wrap mt-2 ">
        {filteredCard?.map((card) => (
          <div
            key={card.id}
            className="w-[450px] bg-neutral-700 rounded-md p-2 m-2">
            <div className="flex items-center justify-between flex-wrap">
              <div>
                <p className="w-[90%] font-bold">{card.name}</p>
                <p>Price:-{card.price}</p>
              </div>
              <img
                src={
                  card.image ||
                  "https://www.totalwine.com/media/sys_master/twmmedia/he8/h67/11931543830558.png"
                }
                alt="N/A"
                className="w-12"
              />
            </div>
            <div className="flex justify-between items-center w-full border-t-2 mt-3">
              <p>Avg:{+card.rating.average.toFixed(2)}</p>
              <p>Reviews:{card.rating.reviews}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
