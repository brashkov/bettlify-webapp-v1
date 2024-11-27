import Container from '../shared/Container'

const features = [
  {
    title: 'AI-Powered Predictions',
    description: 'Our advanced AI algorithms analyze vast amounts of data to provide accurate betting predictions.',
    icon: '🤖'
  },
  {
    title: 'Real-Time Updates',
    description: 'Get instant updates and predictions as new data becomes available.',
    icon: '⚡'
  },
  {
    title: 'Comprehensive Analysis',
    description: 'Detailed analysis of teams, players, and historical performance data.',
    icon: '📊'
  },
  {
    title: 'Multiple Sports',
    description: 'Coverage across multiple sports and leagues worldwide.',
    icon: '🏆'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Our Platform
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-emerald-50 shadow-lg hover:shadow-xl transition-shadow border border-emerald-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 