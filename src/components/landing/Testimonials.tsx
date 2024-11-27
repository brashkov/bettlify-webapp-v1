import Container from '../shared/Container'

const testimonials = [
  {
    name: 'John Smith',
    role: 'Professional Bettor',
    content: 'The AI predictions have completely transformed my betting strategy. The accuracy is impressive.',
    image: '/avatars/john.jpg'
  },
  {
    name: 'Sarah Johnson',
    role: 'Sports Analyst',
    content: "As an analyst, I appreciate the depth of data and insights provided. It's a game-changer.",
    image: '/avatars/sarah.jpg'
  },
  {
    name: 'Mike Wilson',
    role: 'Casual Bettor',
    content: 'Easy to use and understand. The predictions have helped me make better betting decisions.',
    image: '/avatars/mike.jpg'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 