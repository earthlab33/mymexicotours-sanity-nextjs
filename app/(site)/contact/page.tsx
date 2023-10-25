import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-[#dfd0cd] text-4xl font-bold text-center">
                Contact My Mexico Tours
                </h1>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <form
  className="form-horizontal"
  action="https://api.web3forms.com/submit"
  method="POST"
>
  <input
    name="access_key"
    type="hidden"
    value="001ca5cf-b6e6-400d-be88-bc09b5735529"
  />
  <input name="from_name" type="hidden" value="My Mexico Tours Contact Form" />
  <input
    name="subject"
    type="hidden"
    value="New Submission from Contact Form on the MMT site"
  />
  <input
    name="redirect"
    type="hidden"
    value="https://mymexicotours.com/thank-you/"
  />
  <fieldset>
    <div className="form-group max-w-6xl pt-10 mx-auto">
      <label className="col-md-4 control-label hidden" htmlFor="lastname">Last Name</label>
      <div className="col-md-5">
        <input
          id="lastname"
          className="form-control input-md form-input px-4 py-3 w-80 mb-4"
          name="lastname"
          required
          type="text"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label hidden" htmlFor="textinput">First Name</label>
      <div className="col-md-5">
        <input
          id="textinput"
          className="form-control input-md form-input px-4 py-3 w-80 mb-4"
          name="textinput"
          required
          type="text"
          placeholder="First Name"
        />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label hidden" htmlFor="email">Email</label>
      <div className="col-md-5">
        <input
          id="email"
          className="form-control input-md form-input px-4 py-3 w-80 mb-4"
          name="email"
          required
          type="text"
          placeholder="Email"
        />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label hidden" htmlFor="phone"
        >CellPhone (If you want to receive text updates)</label
      >
      <div className="col-md-5">
        <input
          id="phone"
          className="form-control input-md form-input px-4 py-3 w-80 mb-4"
          name="phone"
          required
          type="text"
          placeholder="Phone"
        />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label hidden" htmlFor="message">Your Message</label>
      <div className="col-md-4">
        <textarea id="message" className="form-control form-textarea text-slate-500 px-4 py-3 w-80 mb-4" name="message">
Enter your message
</textarea>
      </div>
    </div>
    <div className="form-group">
      &nbsp;
      <div className="col-md-4">
        <button
          id="submit"
          className="btn btn-ras px-3 py-2 border border-transparent text-sm font-medium rounded-full text-black bg-[#ecd176] hover:bg-red-800"
          name="submit"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </div>
    </div>
  </fieldset>
</form>
</div>
</main>
</div>
</div>
)
} 