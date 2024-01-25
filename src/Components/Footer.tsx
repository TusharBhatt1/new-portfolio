import Socials from "./other/Socials";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-4 p-7 bg-blue-800 text-white text-center mt-12">
      <p className="text-2xl font-bold">Thankyou for the Visit 👋</p>
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
      <Socials />
      <p>&copy; 2024 Tushar Bhatt. All rights reserved.</p>
      </div>
     
    </footer>
  );
}
