import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
    return (
        <footer className="bg-base-200 border-t border-base-content/10">
            <div className="max-w-7xl mx-auto px-8 py-24">
                <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link
                            href="/#"
                            aria-current="page"
                            className="flex gap-2 justify-center md:justify-start items-center"
                        >
                            <Image
                                src={logo}
                                alt={`${config.appName} logo`}
                                priority={true}
                                className="w-6 h-6"
                                width={24}
                                height={24}
                            />
                            <strong className="font-extrabold tracking-tight text-base md:text-lg">
                                ACMELEGAL
                            </strong>
                        </Link>

                        <p className="mt-3 text-sm text-base-content/80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                        </p>
                    </div>
                    <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                                Auto Fraud
                            </div>

                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link href="/#newyork-auto-fraud-support" className="link link-hover">
                                    NewYork Support
                                </Link>
                                <Link href="/#georgia-auto-fraud-support" className="link link-hover">
                                    Georgia Support
                                </Link>
                                <Link href="/#auto-fraud-laywers" className="link link-hover">
                                    ABC Fraud Lawyers
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                                Others
                            </div>

                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link href="/#tos" className="link link-hover">
                                    Terms of services
                                </Link>
                                <Link href="/#privacy-policy" className="link link-hover">
                                    Privacy policy
                                </Link>
                                <Link href="/#contact-us" className="link link-hover">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;