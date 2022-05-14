import React from "react";

import "./Xanimation.scss";

import audio from "../assets/audio/zoom.wav";

function Xanimation() {

	function xoomin() {
		var track_1 = document.getElementById('xoom');
		track_1.play();
	}

	function xoomout() {
		var track_1 = document.getElementById('xoom');
		track_1.load();
	}

	return (
		<section className="section">
			<div className="section__container">
				<div className="section__container__main">
					<p onMouseEnter={()=>xoomin()} onMouseLeave={()=>xoomout()} className="animate__text">This is the year 5000 A.D.</p>
					<p onMouseEnter={()=>xoomin()} onMouseLeave={()=>xoomout()} className="animate__text">Mankind has expanded all over the universe</p>
					<br></br>
					<p onMouseEnter={()=>xoomin()} onMouseLeave={()=>xoomout()} className="animate__text">But a threat still exists to the mother earth</p>
					<p onMouseEnter={()=>xoomin()} onMouseLeave={()=>xoomout()} className="animate__text">So we are gathering defenders like you<br></br> from all over the universe to eliminate the enemies!</p>
				</div>
				<div>    
					<audio id="xoom">
						<source src={audio} type="audio/wav"></source>
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
		</section>
	);
}

export default Xanimation;


