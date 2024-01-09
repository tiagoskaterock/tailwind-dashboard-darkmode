import '../App.css';
import CardSocial from './CardSocial'

function Main() {
	return (
		<main className="w-[90%] max-w-screen-xl mx-auto overflow-hidden py-16">

	    <h1 className="text-3xl md:text-4xl">
	      Social Media Dashboard
	    </h1>

	    <p 
	      className="text-dark-grayish-blue font-bold mt-3 pb-6 border-b-2 dark:text-desaturated-blue md:text-xl">
	      Total Followers: 23,004      
	    </p>

	    <div className="flex items-center justify-between pt-6">
	      <p 
	        className="text-dark-grayish-blue font-bold dark:text-desaturated-blue md:text-xl">
	        Dark Mode
	      </p>

	      <input type="checkbox" id="switch" className="peer hidden" data-id="swith-theme" />

	      <label 
	        htmlFor="switch"
	        className="w-16 h-8 bg-[hsl(230,22%,74%)] p-2 block flex flex-row-reverse rounded-full cursor-pointer peer-checked:bg-gradient-to-r from-gradient-switch-first to-gradient-switch-second 
	        peer-checked:[--bg-circle:hsl(228,28%,20%)]
	        peer-checked:[--transform-circle:-100%]"
	        >

	        <div 
	          className="bg-[var(--bg-circle,white)] w-1/2 aspect-square rounded-full
	            translate-x-[var(--transform-circle)]
	            transition-transform"
	          >
	          
	        </div>
	      </label>
	    </div>



	    <section 
	      className="py-16 grid justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4">

	      <CardSocial 
	      	title="@nathanf" 
	      	total="1987" 
	      	deltaToday="12" 
	      	class="before:bg-facebook" 
	      	logo="./images/icon-facebook.svg"
	      />

	      <CardSocial 
	      	title="@nathanf" 
	      	total="1044" 
	      	deltaToday="99" 
	      	class="before:bg-twitter" 	
	      	logo="./images/icon-twitter.svg"
	      />

	      <CardSocial 
	      	title="@nathanf" 
	      	total="11K" 
	      	deltaToday="1099" 
	      	class="
	      		before:bg-gradient-to-r 
	      		before:from-instagram-first 
	      		before:to-instagram-second" 	      	
	      	logo="./images/icon-instagram.svg"
	      />

	      <CardSocial 
	      	title="@realnathanf" 
	      	total="11K" 
	      	deltaToday="-144" 
	      	class="
	      		before:bg-youtube" 	      	
	      	logo="./images/icon-youtube.svg"
	      />

	    </section>


	    <section className="pt-8">
	      <h2 className="text-3xl md:text-4xl mb-8">
	        Overview - Today
	      </h2>

	      <div 
	        className="grid gap-6 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	        <article 
	          className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
	          <h3 
	            className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
	            Page Views
	          </h3>
	          <img 
	            src="./images/icon-facebook.svg" 
	            alt="Icon Facebook"
	            className="justify-self-end" />

	          <p
	            className="text-3xl font-bold">
	            87
	          </p>

	          <p
	            className="text-lime-green flex items-center justify-center font-bold gap-2">
	            <img src="./images/icon-up.svg" alt="Icon Up" />
	            3%
	          </p>
	        </article>


	        <article 
	          className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
	          <h3 
	            className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
	            Likes
	          </h3>
	          <img 
	            src="./images/icon-facebook.svg" 
	            alt="Icon Facebook"
	            className="justify-self-end" />

	          <p
	            className="text-3xl font-bold">
	            52
	          </p>

	          <p
	            className="text-bright-red flex items-center justify-center font-bold gap-2">
	            <img src="./images/icon-down.svg" alt="Icon Down" />
	            2%
	          </p>
	        </article>



	        <article 
	          className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
	          <h3 
	            className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
	            Likes
	          </h3>
	          <img 
	            src="./images/icon-instagram.svg" 
	            alt="Icon Instagram"
	            className="justify-self-end" />

	          <p
	            className="text-3xl font-bold">
	            5462
	          </p>

	          <p
	            className="text-lime-green flex items-center justify-center font-bold gap-2">
	            <img src="./images/icon-up.svg" alt="Icon Up" />
	            2257%
	          </p>
	        </article>



	        <article 
	          className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
	          <h3 
	            className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
	            Profile Views
	          </h3>
	          <img 
	            src="./images/icon-instagram.svg" 
	            alt="Icon Instagram"
	            className="justify-self-end" />

	          <p
	            className="text-3xl font-bold">
	            52k
	          </p>

	          <p
	            className="text-lime-green flex items-center justify-center font-bold gap-2">
	            <img src="./images/icon-up.svg" alt="Icon Up" />
	            1375%
	          </p>
	        </article>



	        <article 
	          className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
	          <h3 
	            className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
	            Retweets
	          </h3>
	          <img 
	            src="./images/icon-twitter.svg" 
	            alt="Icon Twiiter"
	            className="justify-self-end" />

	          <p
	            className="text-3xl font-bold">
	            117
	          </p>

	          <p
	            className="text-lime-green flex items-center justify-center font-bold gap-2">
	            <img src="./images/icon-up.svg" alt="Icon Up" />
	            303%
	          </p>
	        </article>



	        <article 
	          className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
	          <h3 
	            className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
	            Likes
	          </h3>
	          <img 
	            src="./images/icon-twitter.svg" 
	            alt="Icon Twiiter"
	            className="justify-self-end" />

	          <p
	            className="text-3xl font-bold">
	            507
	          </p>

	          <p
	            className="text-lime-green flex items-center justify-center font-bold gap-2">
	            <img src="./images/icon-up.svg" alt="Icon Up" />
	            553%
	          </p>
	        </article>



	        <article 
	          className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
	          <h3 
	            className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
	            Likes
	          </h3>
	          <img 
	            src="./images/icon-youtube.svg" 
	            alt="Icon Twiiter"
	            className="justify-self-end" />

	          <p
	            className="text-3xl font-bold">
	            107
	          </p>

	          <p
	            className="text-bright-red flex items-center justify-center font-bold gap-2">
	            <img src="./images/icon-down.svg" alt="Icon Down" />
	            19%
	          </p>
	        </article>



	        <article 
	          className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
	          <h3 
	            className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
	            Total Views
	          </h3>
	          <img 
	            src="./images/icon-youtube.svg" 
	            alt="Icon Twiiter"
	            className="justify-self-end" />

	          <p
	            className="text-3xl font-bold">
	            1407
	          </p>

	          <p
	            className="text-bright-red flex items-center justify-center font-bold gap-2">
	            <img src="./images/icon-down.svg" alt="Icon Down" />
	            12%
	          </p>
	        </article>


	      </div>
	    </section>
	    
	  </main>
	)
}

export default Main