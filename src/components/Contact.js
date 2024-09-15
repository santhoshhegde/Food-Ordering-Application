const Contact = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] mt-24 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <input
          type="text"
          placeholder="Name"
          className="border border-orange-500 rounded-md w-[30vw] p-2"
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-orange-500 rounded-md w-[30vw] p-2"
        />
        <textarea
          type="text"
          placeholder="Type your message here"
          className="border border-orange-500 rounded-md w-[30vw] p-2"
        />
      </div>
    </>
  );
};
export default Contact;
