const ContactForm = () => {

  const inputStyles = 'border border-stone-700 bg-transparent w-full h-12 outline-none rounded-2xl px-4 py-4 bg-gradient-card placeholder:text-stone-500 focus:border-stone-400 transition backdrop-blur-md';
  const inputGroupStyles = 'flex flex-col w-full md:w-1/2';
  const inputRowStyles = 'flex flex-col md:flex-row gap-4 mb-4';
  const labelStyles = 'mb-2 font-bold';

  return (
    <form className="w-full">
      <div className={`${inputRowStyles}`}>
        <div className={`${inputGroupStyles}`}>
          {/* <label htmlFor="name" className={`${labelStyles}`}>Name</label> */}
          <input placeholder="Full name" type="text" name="name" className={`${inputStyles}`}/>
        </div>
        <div className={`${inputGroupStyles}`}>
          {/* <label htmlFor="company" className={`${labelStyles}`}>Company</label> */}
          <input placeholder="Phone" type="text" name="company" className={`${inputStyles}`}/>
        </div>
      </div>
      <div className={`${inputRowStyles}`}>
        <div className={`${inputGroupStyles}`}>
          {/* <label htmlFor="email" className={`${labelStyles}`}>Email</label> */}
          <input placeholder="Company" type="email" name="email" className={`${inputStyles}`}/>
        </div>
        <div className={`${inputGroupStyles}`}>
          {/* <label htmlFor="phone" className={`${labelStyles}`}>Phone</label> */}
          <input placeholder="Email" type="phone" name="phone" className={`${inputStyles}`}/>
        </div>
      </div>
      <div className={`${inputRowStyles} w-full`}>
        <div className={`${inputGroupStyles} w-full md:w-full`}>
          {/* <label htmlFor="message" className={`${labelStyles}`}>Message</label> */}
          <textarea placeholder="Describe your idea" name="message" className={`${inputStyles} h-40 resize-none`}/>
        </div>
      </div>
      <input type="submit" value="Submit your idea" className={`border relative rounded-full py-2 px-6 cursor-pointer bg-stone-50 text-stone-900 hover:bg-stone-950 hover:text-stone-50 transition-all text-md font-semibold`}/>
    </form>
  );
};

export default ContactForm;
