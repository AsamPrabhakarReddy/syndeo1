import Accordion from "../components/Accordion";

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-12 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-4">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div class="text-center flex justify-center items-center">
                  <h1 class="font-bold md:text-5xl text-4xl">
                    Frequently
                    <span class="text-colorFour"> Asked </span>
                    Questions
                  </h1>
                </div>
                <div className="w-full flex justify-center items-center pt-4">
                  <div className="md:w-5/6 w-full">
                    <Accordion
                      title="How can I manage all the bookings made in the booking software?"
                      answer="You can have complete control over all the bookings that are made in the system. You can set flexible business hours at both the staff and service levels, set a limit on the number of bookings that can be made per client, and choose how much in advance clients can book, reschedule, or cancel their appointments."
                    />
                    <Accordion
                      title="Can I sync my personal calendar with an online booking platform?"
                      answer="
                      Yes. Appointy offers a two-way sync with personal and work calendars like Google Calendar, iCal, Outlook, and more. You can export bookings from Syndèo to personal calendar, and also import bookings from your personal calendar to Syndèo to block those times."
                    />
                    <Accordion
                      title="Can different staff members have their own login?"
                      answer="Yes, Syndèo lets your staff members manage their bookings and schedule by enabling separate staff logins. The system allows the admin to automatically track staff schedules, productivity, etc."
                    />
                    <Accordion
                      title="How can our customers contact us for immediate guidance?"
                      answer="You can contact us through mail on syndèoservices@clouddatanetworks.com or go to the Contact page for further information. And we are ready to help."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
