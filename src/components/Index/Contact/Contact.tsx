import ContactForm from "./ContactForm";
import Box from "@/components/Global/Box/Box";

const Contact = (props: any) => {
  return (
    <Box className="my-40 flex flex-col md:flex-row gap-12">
      <div className="flex justify-between items-center w-1/3">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Drop us <br/> a line
          </h1>
          <p className="text-md md:text-md">
            Introduce yourself, your project/idea, and explain why it matters to you and everyone else.
          </p>
        </div>
      </div>
      <div className="w-2/3 mb-auto">
        <ContactForm />
      </div>
    </Box>
  );
};

export default Contact;
