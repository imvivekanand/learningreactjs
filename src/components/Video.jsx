import "./Video.css";

// export default function Video(props) { -> Old way to define props
export default function Video({ title, channel="Vivek Anand", views, time}) {
  // let topic = "React Js";
  // let bg = "dark";
  return (
    <>
    <div className="container">
      <div className="pic">
        <img src="http://placekitten.com/250/250/" alt="img" />
      </div>
      {/* <div className={bg}>{topic} Hi This is my new webpage of {props.title}.</div> ->Old method to use props.*/}
      {/* <div className={bg} style={{ backgroundColor: bgColor }}> */}
        {/* {topic} Hi This is my new webpage of {title}.
      </div> */}

      <div className="title">{title}</div>
      <div className="chanel">{channel}</div>
      <div className="views">
        {views} view <span>.</span> {time}
      </div>
      </div>
    </>
  );
}
