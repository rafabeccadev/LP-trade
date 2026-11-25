const conversations = [
  {
    image: 'depoimento-01.jpeg',
    description: 'Conversa no Instagram sobre a praticidade de conferir as informações no painel da Midas.',
    width: 733,
    height: 1600,
  },
  {
    image: 'depoimento-02.jpeg',
    description: 'Conversa no WhatsApp sobre comparar preços entre corretoras e consultar o spread no painel da Midas.',
    width: 740,
    height: 1600,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" aria-labelledby="testimonials-title" className="border-y border-white/10 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 id="testimonials-title" className="mb-4 text-3xl font-black sm:text-5xl">
            Depoimentos
          </h2>
        </div>
        <div className="mx-auto grid max-w-xs gap-5 sm:max-w-2xl sm:grid-cols-2">
          {conversations.map(({ image, description, width, height }) => (
            <img
              key={image}
              src={`${import.meta.env.BASE_URL}images/${image}`}
              alt={description}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full self-start rounded-2xl border border-white/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
