import React from "react";
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
				<a
					key={index}
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					onClick={social.onClick}
					className={`text-${social.color} cursor-pointer text-xl sm:text-3xl hover:bg-slate-700 p-2 rounded-full`}
				>
					{social.icon}
				</a>
			))}
		</div>
	);
}
