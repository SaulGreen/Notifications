import React from 'react';

const Card = (props) => {

    const showsCards = ({allCards}) => {
        if(allCards){
            return allCards.map((card,index) => {
                console.log(card)
                return(
                    <div key={index} className="card">
                        <h4>{card}</h4>
                        <hr/>
                        <div className="card_image">
                            <img src={`/images/${props.allIcons[index]}.png`}/>
                        </div>
                        <div className="card_options"></div>
                    </div>
                )
            })
        }
    }

    return(
        <div className="cards_holder">
            {showsCards(props)}
        </div>
    )
}

export default Card;