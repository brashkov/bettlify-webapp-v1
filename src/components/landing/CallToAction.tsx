import Container from '../shared/Container'
import Button from '../shared/Button'

export default function CallToAction() {
  return (
    <section className="py-24 bg-emerald-600">
      <Container className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Making Better Betting Decisions?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already benefiting from our AI-powered predictions.
        </p>
        <Button 
          variant="secondary" 
          className="text-lg bg-white text-emerald-600 hover:bg-emerald-50 border-0"
        >
          Get Started Now
        </Button>
      </Container>
    </section>
  )
} 