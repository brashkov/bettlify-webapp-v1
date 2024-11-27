import Container from '../shared/Container'
import Button from '../shared/Button'

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      'Basic predictions',
      'Daily updates',
      'Email support',
      'Basic statistics'
    ]
  },
  {
    name: 'Pro',
    price: 79,
    features: [
      'Advanced predictions',
      'Real-time updates',
      'Priority support',
      'Advanced statistics',
      'Historical data'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Custom predictions',
      'API access',
      '24/7 support',
      'Full data access',
      'Custom reports',
      'Dedicated manager'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-emerald-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow
                ${plan.highlighted ? 'ring-2 ring-emerald-500 scale-105' : ''}`}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6 text-emerald-600">
                ${plan.price}
                <span className="text-lg text-gray-600 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-emerald-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.highlighted ? 'primary' : 'secondary'}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 