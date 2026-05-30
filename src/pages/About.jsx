import React from 'react';

const About = () => {
  return (
    <div className="bg-sand min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-deep-forest mb-12 text-center">Our Story</h1>
        
        <div className="prose prose-lg prose-stone max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-terracotta mb-4">Sharing West African Heritage</h2>
            <p className="text-charcoal leading-relaxed">
              Gamuk Boutique was born from a desire to share a piece of West African heritage with the world. In the vibrant markets and homes of Nigeria, Ghana, and other West African countries, the "Gamuk" (or net washcloth) is more than just a bath tool—it’s a daily ritual of care, passed down through generations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-terracotta mb-4">What is a Gamuk?</h2>
            <p className="text-charcoal leading-relaxed">
              The Gamuk is a long, hand-knotted nylon net that has been the gold standard for exfoliation in West Africa for decades. Unlike synthetic loofahs that harbor bacteria and lose their shape, a Gamuk is designed to last, dry quickly, and provide a deep, satisfying scrub that leaves your skin feeling incredibly soft.
            </p>
          </section>

          <div className="my-16 h-80 overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/images/gamuk-mesh-texture.png" 
              alt="Gamuk Mesh Texture" 
              className="w-full h-full object-cover"
            />
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-terracotta mb-4">Our Mission</h2>
            <p className="text-charcoal leading-relaxed">
              At Gamuk Boutique, our mission is simple: to promote sustainable, effective, and culturally rich self-care. We believe in products that work, products that last, and products that tell a story. By bringing Gamuk to the diaspora and skincare enthusiasts everywhere, we’re not just selling a washcloth—we’re sharing a tradition of radiant, healthy skin.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-deep-forest mb-6">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-terracotta mr-3 text-xl">✓</span>
                <div>
                  <strong className="block text-charcoal">Authenticity:</strong>
                  <span className="text-gray-600">We source our nets directly, ensuring you get the same quality used in West African households.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3 text-xl">✓</span>
                <div>
                  <strong className="block text-charcoal">Durability:</strong>
                  <span className="text-gray-600">A single Gamuk can last for months (or even years!), making it an eco-friendly alternative to disposable sponges.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3 text-xl">✓</span>
                <div>
                  <strong className="block text-charcoal">Community:</strong>
                  <span className="text-gray-600">We are proud to serve the diaspora community and introduce new friends to our favorite bath-time secret.</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
