import "./skills.css";

export default function Card(props) {
  return (
    <div
      className="card"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.hover ? (
        <div className="absolute top-[20%] w-[90%] mx-auto flex gap-2 flex-wrap text-center justify-center">
          {props.items.known.map((list, index) => (
            <div className="flex gap-1 items-center">
              <span>{list.icon}</span>
              <span key={index}>{list.name}</span>
            </div>
          ))}
        </div>
      ) : null}
      {!props.hover ? (
        <img src={props.items.photo} alt="Card Image" className="h-[250px]" />
      ) : null}
      <p className="heading">{props.items.heading}</p>
    </div>
  );
}
