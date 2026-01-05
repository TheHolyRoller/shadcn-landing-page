// ContactForm.jsx

export default function ContactForm() {
  return (
    <div id="contact" className="flex items-center justify-center px-6 py-12">
    {/* <!-- Author: FormBold Team --> */}
    {/* <!-- Learn More: https://formbold.com --> */}
    <div className="w-full max-w-[550px] bg-white p-6">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        {/* <!-- Name Inputs --> */}
        <div className="mb-4 flex gap-5">
          <div className="w-1/2">
            <label for="firstname" className="mb-2 block text-sm text-[#07074D]">First name</label>
            <input type="text" name="firstname" id="firstname" placeholder="Jane" className="w-full rounded-md border border-[#DDE3EC] px-5 py-3 text-base font-medium text-[#07074D] placeholder-[#536387] focus:border-[#6A64F1] focus:shadow-md focus:outline-none" />
          </div>
          <div className="w-1/2">
            <label for="lastname" className="mb-2 block text-sm text-[#07074D]">Last name</label>
            <input type="text" name="lastname" id="lastname" placeholder="Cooper" className="w-full rounded-md border border-[#DDE3EC] px-5 py-3 text-base font-medium text-[#07074D] placeholder-[#536387] focus:border-[#6A64F1] focus:shadow-md focus:outline-none" />
          </div>
        </div>
  
        <div className="mb-4 flex gap-5">
          <div className="w-1/2">
            <label for="email" className="mb-2 block text-sm text-[#07074D]">Mail</label>
            <input type="email" name="email" id="email" placeholder="jhon@mail.com" className="w-full rounded-md border border-[#DDE3EC] px-5 py-3 text-base font-medium text-[#07074D] placeholder-[#536387] focus:border-[#6A64F1] focus:shadow-md focus:outline-none" />
          </div>
          <div className="w-1/2">
            <label for="phone" className="mb-2 block text-sm text-[#07074D]">Phone</label>
            <input type="text" name="phone" id="phone" placeholder="(319) 555-0115" className="w-full rounded-md border border-[#DDE3EC] px-5 py-3 text-base font-medium text-[#07074D] placeholder-[#536387] focus:border-[#6A64F1] focus:shadow-md focus:outline-none" />
          </div>
        </div>
  
        <div className="mb-7">
          <label className="mb-3 block text-sm text-[#07074D]">What are you looking for?</label>
          <div className="flex flex-wrap gap-4">
            <label className="relative cursor-pointer pl-7 text-sm leading-6 text-[#07074D]">
              <input type="radio" name="jobtitle" className="peer absolute opacity-0" />
              <span className="absolute top-0 left-0 h-[18px] w-[18px] rounded-full border border-[#DDE3EC] bg-white peer-checked:bg-[#6A64F1]"></span>
              Web Design
              <span className="after:absolute after:top-[4px] after:left-[4px] after:hidden after:h-2.5 after:w-2.5 after:rounded-full after:bg-white after:content-[''] peer-checked:after:block"></span>
            </label>
            <label className="relative cursor-pointer pl-7 text-sm leading-6 text-[#07074D]">
              <input type="radio" name="jobtitle" className="peer absolute opacity-0" />
              <span className="absolute top-0 left-0 h-[18px] w-[18px] rounded-full border border-[#DDE3EC] bg-white peer-checked:bg-[#6A64F1]"></span>
              Graphics Design
              <span className="after:absolute after:top-[4px] after:left-[4px] after:hidden after:h-2.5 after:w-2.5 after:rounded-full after:bg-white after:content-[''] peer-checked:after:block"></span>
            </label>
            <label className="relative cursor-pointer pl-7 text-sm leading-6 text-[#07074D]">
              <input type="radio" name="jobtitle" className="peer absolute opacity-0" />
              <span className="absolute top-0 left-0 h-[18px] w-[18px] rounded-full border border-[#DDE3EC] bg-white peer-checked:bg-[#6A64F1]"></span>
              Logo Design
              <span className="after:absolute after:top-[4px] after:left-[4px] after:hidden after:h-2.5 after:w-2.5 after:rounded-full after:bg-white after:content-[''] peer-checked:after:block"></span>
            </label>
            <label className="relative cursor-pointer pl-7 text-sm leading-6 text-[#07074D]">
              <input type="radio" name="jobtitle" className="peer absolute opacity-0" />
              <span className="absolute top-0 left-0 h-[18px] w-[18px] rounded-full border border-[#DDE3EC] bg-white peer-checked:bg-[#6A64F1]"></span>
              Others
              <span className="after:absolute after:top-[4px] after:left-[4px] after:hidden after:h-2.5 after:w-2.5 after:rounded-full after:bg-white after:content-[''] peer-checked:after:block"></span>
            </label>
          </div>
        </div>
  
        <div>
          <label for="message" className="mb-2 block text-sm text-[#07074D]">Message</label>
          <textarea rows="6" name="message" id="message" placeholder="Type your message" className="w-full rounded-md border border-[#DDE3EC] px-5 py-3 text-base font-medium text-[#07074D] placeholder-[#536387] focus:border-[#6A64F1] focus:shadow-md focus:outline-none"></textarea>
        </div>
  
        {/* <!-- Submit Button --> */}
        <button type="submit" className="mt-6 w-full rounded-md bg-[#6A64F1] px-6 py-3 text-base font-medium text-white transition-shadow duration-200 hover:shadow-md">Send Message</button>
      </form>
    </div>
  </div>
  );
};
