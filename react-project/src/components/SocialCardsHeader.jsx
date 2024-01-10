function SocialCardsHeader() {
	return (
		<>
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
		</>
	)
}

export default SocialCardsHeader