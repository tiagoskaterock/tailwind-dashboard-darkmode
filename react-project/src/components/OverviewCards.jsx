import OverviewCard from "./OverviewCard"
import { overviewCardsData } from '../data/overviewCardsData'

function OverviewCards() {
	return (
		<>
			<section className="pt-8">
	      <h2 className="text-3xl md:text-4xl mb-8">
	        Overview - Today
	      </h2>

	      <div 
	        className="grid gap-6 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

	        {
	        	overviewCardsData.map((card, index) => (
			        <OverviewCard
			          key={index}
			          title={card.title}
			          logo={card.logo}
			          total={card.total}
			          percentage={card.percentage}
			        />
		      		)
		      	)
		      }

	      </div>
	    </section>
		</>
	)
}

export default OverviewCards
