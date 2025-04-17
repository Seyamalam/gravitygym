import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Membership Questions",
    items: [
      {
        question: "How do I sign up for a membership?",
        answer: "You can sign up for a membership online through our website, or visit our gym in person where our staff will assist you with the registration process. We offer various membership options to suit your needs and goals."
      },
      {
        question: "Can I cancel my membership at any time?",
        answer: "Yes, our memberships come with no long-term contracts. You can cancel at any time with a 30-day notice. Simply contact our customer service team or visit the front desk to process your cancellation."
      },
      {
        question: "Do you offer any discounts for students or seniors?",
        answer: "Yes, we offer special rates for students with a valid ID and seniors aged 65 and above. Military and first responders also receive special discounts. Please inquire at our front desk for current promotional rates."
      },
      {
        question: "Is there a joining fee?",
        answer: "There is a one-time joining fee of $49, which is waived during certain promotional periods throughout the year. Keep an eye on our promotions page for fee-free joining opportunities."
      }
    ]
  },
  {
    title: "Classes & Training",
    items: [
      {
        question: "How do I sign up for a fitness class?",
        answer: "You can reserve your spot in any fitness class through our mobile app or website up to 7 days in advance. Premium and Elite members receive early access to class bookings. Walk-ins are welcome if space is available."
      },
      {
        question: "What should I bring to my first class?",
        answer: "We recommend bringing a water bottle, a small towel, and wearing comfortable workout attire. For yoga classes, you may want to bring your own mat, although we do provide mats free of charge if needed."
      },
      {
        question: "Do you offer personal training?",
        answer: "Yes, we have certified personal trainers available for one-on-one sessions. You can book a complimentary fitness assessment to discuss your goals and find the right trainer for your needs. Personal training packages are available at additional cost."
      },
      {
        question: "What types of group classes do you offer?",
        answer: "We offer a wide variety of classes including HIIT, yoga, spinning, Zumba, CrossFit, pilates, and more. Check our class schedule for the full list of offerings and times. We continuously update our class roster based on member feedback."
      }
    ]
  },
  {
    title: "Facilities & Policies",
    items: [
      {
        question: "What are your opening hours?",
        answer: "Our gym is open Monday to Friday from 6:00 AM to 10:00 PM, Saturday from 7:00 AM to 8:00 PM, and Sunday from 8:00 AM to 6:00 PM. Premium and Elite members have 24/7 access using their keycard."
      },
      {
        question: "Do you have shower and locker facilities?",
        answer: "Yes, we provide clean shower facilities and day-use lockers free of charge. Premium and Elite members have access to larger lockers and luxury shower amenities. Towel service is included with all memberships."
      },
      {
        question: "Is there parking available?",
        answer: "Yes, we offer free parking for members in our dedicated parking lot. During peak hours, additional parking is available in the adjacent garage with validation from our front desk."
      },
      {
        question: "What is your guest policy?",
        answer: "Basic members can bring guests for a fee of $15 per visit. Premium members receive 2 free guest passes per month, and Elite members enjoy unlimited guest privileges. All guests must sign a waiver and be accompanied by a member."
      }
    ]
  },
  {
    title: "Health & Safety",
    items: [
      {
        question: "What COVID-19 safety measures do you have in place?",
        answer: "We follow all local health guidelines and have enhanced our cleaning protocols. Our HVAC system has been upgraded with medical-grade filtration, and we've installed hand sanitizing stations throughout the facility. Equipment is regularly sanitized throughout the day."
      },
      {
        question: "Do I need a medical clearance to join?",
        answer: "While a medical clearance is not required for most members, we do recommend consulting with your physician before starting any new exercise program, especially if you have pre-existing health conditions."
      },
      {
        question: "What happens if I get injured at the gym?",
        answer: "Our staff is trained in first aid and can assist with minor injuries. For more serious situations, we have emergency protocols in place and will contact emergency services if needed. All incidents are documented for safety and insurance purposes."
      },
      {
        question: "Are your trainers certified?",
        answer: "Yes, all our trainers are certified by nationally recognized organizations such as NASM, ACE, or ISSA, and many have specialized certifications in areas like nutrition, corrective exercise, or sports performance. Their credentials are available for review."
      }
    ]
  }
];

export function FAQSection() {
  return (
    <section className="py-20 bg-black" id="faq">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Find answers to our most commonly asked questions. If you can't find what you're looking for, feel free to contact us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-bold mb-4 text-lime-500">{category.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`} className="border-zinc-700">
                    <AccordionTrigger className="text-left hover:text-lime-500 py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-lime-500/10 border border-lime-500/20 rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Still have questions?</h3>
          <p className="text-gray-300 text-center mb-6">
            Our team is here to help. Contact us directly and we'll get back to you as soon as possible.
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-3 rounded-lg inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 