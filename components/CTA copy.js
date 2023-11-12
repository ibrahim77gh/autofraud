import Image from "next/image";
import Form from "./Form";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
    <Image
      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
      alt="Background"
      className="object-cover w-full"
      fill
    />
    <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
    <div className="relative hero-content text-center text-neutral-content p-4 md:p-8 lg:p-16">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 md:pr-4">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight mb-4 md:mb-8 lg:mb-12">
            Fight Fraud
          </h2>
          <p className="text-base md:text-lg lg:text-xl opacity-80 mb-4 md:mb-8 lg:mb-12">
            Georgia Auto Fraud Lawyers NEVER distribute or share your information with any third party. – Privacy Policy
          </p>
          <button className="btn btn-primary btn-wide">Get our services</button>
        </div>
        <div className="w-full md:w-1/2">
          <Form />
        </div>
      </div>
    </div>
  </section>
  


  );
};

export default CTA;
