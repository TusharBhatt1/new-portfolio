import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export interface SocialType {
	icon: React.ReactNode;
	label: string;
	href?: string;
	onClick?: () => void;
}

export default function Socials({ size = "md" }: { size?: "sm" | "md" }) {
	const handleCallClick = () => {
		alert("My Contact : +917617446649");
	};

	const socials: SocialType[] = [
		{
			icon: <FaGithub />,
			label: "GitHub",
			href: "https://github.com/TusharBhatt1",
		},
		{
			icon: <FaLinkedin />,
			label: "LinkedIn",
			href: "https://linkedin.com/in/tushar-bhatt-59b64623b",
		},
		{
			icon: <FaTwitter />,
			label: "Twitter",
			href: "https://twitter.com/Tushar0135",
		},
		{
			icon: <FaEnvelope />,
			label: "Email",
			href: "mailto:tusharbhatt0135@gmail.com",
		},
		{ icon: <IoCall />, label: "Call", onClick: handleCallClick },
	];

	const dim = size === "sm" ? "text-base" : "text-lg";

	return (
		<div className="flex items-center gap-1">
			{socials.map((social, index) => (
				<motion.a
					key={index}
					href={social.href}
					target={social.href ? "_blank" : undefined}
					rel="noopener noreferrer"
					onClick={social.onClick}
					aria-label={social.label}
					initial={{ opacity: 0, y: -6 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: index * 0.06 }}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className={`${dim} cursor-pointer p-2 text-muted hover:text-fg transition-colors duration-200`}
				>
					{social.icon}
				</motion.a>
			))}
		</div>
	);
}
