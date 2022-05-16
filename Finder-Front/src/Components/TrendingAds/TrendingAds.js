import {Link} from "react-router-dom";
import Card  from "../Card/Card";
export default function TrendingAds() {
  return (
    <>
    <section className="popular-deals section bg-grey">
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-10">
					<div className="section-title">
						<h2>Featured Ads</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magnam.</p>
					</div>
				</div>
			</div>
			<div className="row justify-content-center pl-5 pr-5	">
				
				{/* <!-- offer 01 --> */}
				
					

						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
									



						
					

				
			</div>
		</div>
	</section>

    </>
  );
}
