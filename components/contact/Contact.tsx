import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="relative font-IBM mx-auto max-w-162.5 mt-5 mb-10 lg:mt-0 lg:mb-0 lg:max-w-full">
      <div className="relative max-w-full bg-white dark:bg-secondary rounded-[30px] overflow-y-hidden lg:h-162.5">
        <div className="bg-white dark:bg-secondary rounded-[30px] lg:h-162.5 lg:overflow-y-scroll scrollbar-custom">
          <div className="top-0 right-0 z-10 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
          <div>
            <div>
              <span className="flex items-center gap-5 p-7">
                <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                  <span className="text-custom5">C</span>ontact
                </h1>
                <div className="w-40 h-0.5 bg-custom5" />
              </span>
              <div className="w-full h-px bg-gray-200 dark:bg-custom2" />
            </div>
            <p className="text-base leading-7 text-light2 dark:text-dark2 p-7">{`🌟 Hello there! 🌟 Thank you for stopping by. I'm thrilled to connect with you. Whether you have a question, a project idea, or just want to say hello, feel free to drop me a message. I'm here and excited to hear from you! 🚀✉️🌟`}</p>
            <ContactForm />
          </div>
          <div className="bottom-0 right-0 z-10 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
