const Footer = () => {
	const year = new Date().getFullYear();
	return(
		<div
			className="text-center p-2"
		>
			&copy; 2018 - {year}. All Rights Reserved
		</div>
	)
}
export default Footer;