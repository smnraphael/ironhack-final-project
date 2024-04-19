const SendApplication = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1>Send your Application</h1>
      <form className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            placeholder="johndoe@example.com"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            placeholder="Write your cover letter here..."
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="socialNetwork">Social Network</label>
          <input
            type="url"
            id="socialNetwork"
            name="socialNetwork"
            placeholder="johndoe@example.com"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-200 rounded-lg p-2">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendApplication;
