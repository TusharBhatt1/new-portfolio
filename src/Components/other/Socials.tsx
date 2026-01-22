import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export interface SocialType {
	icon: React.ReactNode;
	color: string;
	href?: string;
	onClick?: () => void; // Add onClick property
}

export default function Socials() {
	const handleCallClick = () => {
		alert("My Contact : +917617446649");
	};

	const socials: SocialType[] = [
		{
			icon: <FaGithub />,
			color: "gray-500",
			href: "https://github.com/TusharBhatt1",
		},
		{
			icon: <FaLinkedin />,
			color: "blue-500",
			href: "https://linkedin.com/in/tushar-bhatt-59b64623b",
		},
		{
			icon: <FaTwitter />,
			color: "blue-700",
			href: "https://twitter.com/Tushar0135",
		},

		{
			icon: <FaEnvelope />,
			color: "yellow-400",
			href: "mailto:tusharbhatt0135@gmail.com",
		},
		{ icon: <IoCall />, color: "gray-500", onClick: handleCallClick }, // Add onClick handler
	];

	return (
		<div className="flex gap-7">
			{socials.map((social, index) => (
				<motion.a
					key={index}
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					onClick={social.onClick}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
					whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
					whileTap={{ scale: 0.9 }}
					className={`text-${social.color} cursor-pointer text-xl sm:text-3xl hover:bg-slate-700 p-2 rounded-full`}
				>
					{social.icon}
				</motion.a>
			))}
		</div>
	);
}
