import { Component } from "react";
import "./CardList.style.css";
import Card from "./../Card/Card";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card name={name} email={email} id={id} />;
        })}
      </div>
    );
  }
}

export default CardList;
