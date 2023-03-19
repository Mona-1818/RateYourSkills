import './footer.css';

export default function Footer() {
	return (
		<div>
			<div className='copyright'> &copy; 2023 Corporate. All Right Reserved.</div>
			<div className='social'>
				<li><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a></li>
				<li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
				<li><a href="https://www.google.com/"><i class="fa-solid fa-envelope-open"></i></a></li>
			</div>
		</div>
	)
}