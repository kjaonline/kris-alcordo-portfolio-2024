import React from "react"
import Header from "./headerComponents/Header"
import Footer from "./Footer"

type GeneralLayoutProps = {
	children: React.ReactNode
}

const GeneralLayout : React.FC<GeneralLayoutProps>= ({ children }) => {
	return (
		<div className="w-full mx-auto">
			<Header />
			<section>
				{children}
			</section>
			<Footer />
		</div>
	)
}

export default GeneralLayout