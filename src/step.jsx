const Step = ({ direction, number, title, description, img }) => {
  return (
    <div className="step" style={{ flexDirection: direction }}>
      <div className="text">
        <h2>{number}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="phone_img">
        <img src={img} width="150px" alt={`Step ${number}`} />
      </div>
    </div>
  );
};

export default Step;