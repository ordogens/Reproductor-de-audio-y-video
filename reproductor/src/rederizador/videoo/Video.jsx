import "./Video.css";
import vid1 from "../../../public/video/VID.mp4";
import vid2 from "../../../public/video/VID2.mp4";
import vid3 from "../../../public/video/VID3.mp4";

export const Video = () => {
  return (
    <div className="Video">
      <input  className="imput" type="text" placeholder="🔎"/>
      <button className="btn">Search</button>
      <span className="spann">
        <span className="span1">
          <h2>Examen</h2>
          <video controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>Examen2</h2>
          <video controls>
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>Examen</h2>
          <video controls>
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </span>
        <span className="span1">
          <h2>Examen</h2>
          <video controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>Examen</h2>
          <video controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>Examen</h2>
          <video controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </span>
        <span className="span1">
          <h2>Examen</h2>
          <video controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>Examen</h2>
          <video controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>Examen</h2>
          <video controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </span>
      </span>
    </div>
  );
};
