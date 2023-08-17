import { useState, useEffect } from "react";

const ContactForm = () => {
  const [name, setName] = useState({
    value: "",
    valid: false,
  });
  const [email, setEmail] = useState({
    value: "",
    valid: false,
  });
  const [phone, setPhone] = useState({
    value: "",
    valid: false,
  });
  const [company, setCompany] = useState({
    value: "",
    valid: false,
  });
  const [message, setMessage] = useState({
    value: "",
    valid: false,
  });

  const [areAllInputsValid, setAreAllInputsValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const onFormSubmit = (e: any) => {
    e.preventDefault();

    if (areAllInputsValid) {
      fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: phone.value,
          message: message.value,
          company: company.value
        }),
      }).then((data) => {
        console.log(data)
        setFormSubmitted(true);
        setFormSuccess(data.status === 200);
      });
    }
  };

  useEffect(() => {
    console.log(name)
    const validateInputs = () => {
      return name.valid && email.valid && message.valid;
    };

    setAreAllInputsValid(validateInputs());
  }, [name, email, message, phone, company]);

  const inputStyles =
    "border border-stone-700 bg-transparent w-full h-12 outline-none rounded-2xl px-4 py-4 bg-gradient-card placeholder:text-stone-500 focus:border-stone-400 transition backdrop-blur-md";
  const inputGroupStyles = "flex flex-col w-full md:w-1/2";
  const inputRowStyles = "flex flex-col md:flex-row gap-4 mb-4";

  return (
    <form className="w-full">
      <div className={`${inputRowStyles}`}>
        <div className={`${inputGroupStyles}`}>
          {/* <label htmlFor="name" className={`${labelStyles}`}>Name</label> */}
          <input
            placeholder="Name *"
            type="text"
            name="name"
            className={`${inputStyles}`}
            onChange={(e: any) => {
              setName({
                value: e.target.value,
                valid: e.target.value.length > 0
              })
            }}
          />
        </div>
        <div className={`${inputGroupStyles}`}>
          {/* <label htmlFor="company" className={`${labelStyles}`}>Company</label> */}
          <input
            placeholder="Phone"
            type="phone"
            name="phone"
            className={`${inputStyles}`}
            onChange={(e: any) => {
              setPhone({
                value: e.target.value,
                valid: e.target.value.length > 0
              });
            }}
          />
        </div>
      </div>
      <div className={`${inputRowStyles}`}>
        <div className={`${inputGroupStyles}`}>
          {/* <label htmlFor="email" className={`${labelStyles}`}>Email</label> */}
          <input
            placeholder="Company"
            type="text"
            name="company"
            className={`${inputStyles}`}
            onChange={(e: any) => {
              setCompany({
                value: e.target.value,
                valid: e.target.value.length > 0
              });
            }}
          />
        </div>
        <div className={`${inputGroupStyles}`}>
          {/* <label htmlFor="phone" className={`${labelStyles}`}>Phone</label> */}
          <input
            placeholder="Email *"
            type="email"
            name="email"
            className={`${inputStyles}`}
            onChange={(e: any) => {
              setEmail({
                value: e.target.value,
                valid: e.target.value.length > 0
              });
            }}
          />
        </div>
      </div>
      <div className={`${inputRowStyles} w-full`}>
        <div className={`${inputGroupStyles} w-full md:w-full`}>
          {/* <label htmlFor="message" className={`${labelStyles}`}>Message</label> */}
          <textarea
            placeholder="Describe your idea *"
            name="message"
            className={`${inputStyles} h-40 resize-none`}
            onChange={(e: any) => {
              setMessage({
                value: e.target.value,
                valid: e.target.value.length > 0
              });
            }}
          />
        </div>
      </div>
      <input
        type="submit"
        onClick={onFormSubmit}
        value={formSubmitted ? 'Thanks!' : 'Submit your idea'}
        className={`border relative rounded-full py-2 px-6 cursor-pointer bg-stone-50 text-stone-900 hover:bg-stone-950 hover:text-stone-50 transition-all text-md font-semibold ${formSubmitted && formSuccess ? 'opacity-50 pointer-events-none' : ''} ${areAllInputsValid ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}
      />
    </form>
  );
};

export default ContactForm;
