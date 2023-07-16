import React,{useState} from 'react'

const Contact1 = () => {
    const [text1, setText] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comapny, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const HandleChange = (e) => {
    setText(e.target.value);
  };
  const HandleChange1 = (e) => {
    setName(e.target.value);
  };
  const HandleChange2 = (e) => {
    setPhone(e.target.value);
  };
  const HandleChange3 = (e) => {
    setCompany(e.target.value);
  };
  const HandleChange4 = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
        <div>
        <div className="w-auto mt-20 md:mt-0  h-full ">
        <div className='font-semibold text-lg sm:block flex justify-center'>Contact Us</div>
          <div className=" flex justify-center ">
            <form
              target="_blank"
              action="https://formspree.io/f/xwkdknqp"
              method="POST"
              className=''
            >
              <div className="flex flex-col  gap-4">
                <div>
                  <div className="mt-4 relative">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="Name"
                      value={name}
                      className="text-sm rounded-lg w-72  sm:w-[500px] peer h-10 placeholder:pl-2 border-2 value:text-sm"
                      onChange={HandleChange1}
                    />
                  </div>
                  <div className="mt-4 relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="Email"
                      required
                      value={text1}
                      className="text-sm rounded-lg peer w-72 sm:w-[500px] h-10 placeholder:pl-2  border-2"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-4 relative">
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={phone}
                      className="text-sm placeholder:pl-2  rounded-lg w-72 sm:w-[500px] h-10  border-2"
                      onChange={HandleChange2}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    onChange={HandleChange4}
                    value={message}
                    placeholder="Enter Message"
                    className="rounded-lg placeholder:text-sm placeholder:pl-2 mt-4 h-20 w-72  sm:w-[500px]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="p-2 w-full mt-4 h-10 rounded-lg bg-[#3364af] hover:bg-blue-800 text-white mb-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact1