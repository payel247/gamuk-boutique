import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      q: "What is a Gamuk?",
      a: "A Gamuk (also known as an African Net Sponge or sponge net) is a traditional exfoliating washcloth used widely in West Africa, particularly in Nigeria and Ghana. It is made of a durable, hand-knotted nylon net that provides superior exfoliation compared to standard loofahs."
    },
    {
      q: "How do I use it?",
      a: "It’s simple! Wet the Gamuk, apply your favorite soap or body wash, and rub it together to create a rich lather. Stretch it out to scrub your back, or scrunch it up for a more concentrated scrub on your arms, legs, and torso."
    },
    {
      q: "Why is it better than a loofah?",
      a: "Unlike synthetic loofahs that harbor bacteria, lose their shape, and need to be replaced every few weeks, a Gamuk is more hygienic (dries rapidly), more effective, more durable (lasts over a year), and has better reach."
    },
    {
      q: "Does it feel rough?",
      a: "The Gamuk provides deep exfoliation. If you have sensitive skin, start with gentle pressure. Most users find their skin adapts quickly and loves the deep-clean feel."
    },
    {
      q: "How do I care for my Gamuk?",
      a: "The Gamuk is low-maintenance! It dries quickly on its own. You can also toss it in the washing machine on a gentle cycle with your towels once a week. Hang to air dry."
    },
    {
      q: "What is your shipping and return policy?",
      a: "We ship worldwide! Orders are typically processed within 1-2 business days. Due to the personal nature of the product, we cannot accept returns once the packaging has been opened, but if there is a defect, please contact us immediately for a replacement."
    }
  ];

  return (
    <div className="bg-sand min-h-screen py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-deep-forest mb-12 text-center">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-terracotta mb-4">{faq.q}</h3>
              <p className="text-charcoal leading-relaxed opacity-90">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
