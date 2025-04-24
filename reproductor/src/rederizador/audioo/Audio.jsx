import "./audio.css";

export const Audio = () => {
  return (
    <div className="Audio">
      
        <span className="aud">
            <h2>musica rara</h2>
            <audio controls>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            
        </span>
    </div>
  )
}
