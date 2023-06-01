const ContactForm = () => {

  const inputStyles = 'border-b bg-transparent w-full h-12 outline-none';
  const inputGroupStyles = 'flex flex-col w-1/2 ';
  const inputRowStyles = 'flex gap-8 mb-8';
  const labelStyles = 'mb-2 font-bold';

  return (
    <form className="w-full mt-12">
      <div className={`${inputRowStyles}`}>
        <div className={`${inputGroupStyles}`}>
          <label htmlFor="name" className={`${labelStyles}`}>Name</label>
          <input type="text" name="name" className={`${inputStyles}`}/>
        </div>
        <div className={`${inputGroupStyles}`}>
          <label htmlFor="company" className={`${labelStyles}`}>Company</label>
          <input type="text" name="company" className={`${inputStyles}`}/>
        </div>
      </div>
      <div className={`${inputRowStyles}`}>
        <div className={`${inputGroupStyles}`}>
          <label htmlFor="email" className={`${labelStyles}`}>Email</label>
          <input type="email" name="email" className={`${inputStyles}`}/>
        </div>
        <div className={`${inputGroupStyles}`}>
          <label htmlFor="phone" className={`${labelStyles}`}>Phone</label>
          <input type="phone" name="phone" className={`${inputStyles}`}/>
        </div>
      </div>
      <div className={`${inputRowStyles}`}>
        <div className={`${inputGroupStyles} w-full`}>
          <label htmlFor="message" className={`${labelStyles}`}>Message</label>
          <textarea name="message" className={`${inputStyles} h-20`}/>
        </div>
      </div>
      <input type="submit" value="Submit" className={`border relative rounded-full py-2 px-6 text-xl cursor-pointer hover:bg-white hover:text-stone-950 transition-all`}/>
    </form>
  );
};

export default ContactForm;
