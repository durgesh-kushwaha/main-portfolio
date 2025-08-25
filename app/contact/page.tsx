import MainLayout from '@/components/layout/MainLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function ContactPage() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      icon: '📧',
      description: 'Send me an email for any inquiries or collaboration opportunities.'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/durgesh-kushwaha',
      href: 'https://linkedin.com/in/durgesh-kushwaha',
      icon: '💼',
      description: 'Connect with me professionally and stay updated with my career journey.'
    },
    {
      name: 'GitHub',
      value: 'github.com/durgesh-kushwaha',
      href: 'https://github.com/durgesh-kushwaha',
      icon: '🐙',
      description: 'Check out my open-source projects and code contributions.'
    },
    {
      name: 'Twitter',
      value: '@yourusername',
      href: 'https://twitter.com/im_durgesh_',
      icon: '🐦',
      description: 'Follow me for tech updates, thoughts, and industry insights.'
    }
  ]

  const availability = [
    {
      status: 'Open to Opportunities',
      description: 'I&apos;m currently open to new opportunities, collaborations, and interesting projects.',
      available: true
    },
    {
      status: 'Freelance Work',
      description: 'Available for select freelance projects that align with my expertise and interests.',
      available: true
    },
    {
      status: 'Mentoring',
      description: 'Happy to mentor junior developers and share knowledge with the community.',
      available: true
    },
    {
      status: 'Speaking Engagements',
      description: 'Available for tech talks, workshops, and conference presentations.',
      available: false
    }
  ]

  return (
    <MainLayout>
    
      <section className="hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>
            I&apos;m always excited to connect with fellow developers, potential collaborators, 
            and anyone interested in technology. Let&apos;s start a conversation!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2>Ways to Connect</h2>
            <p>Choose your preferred method to reach out</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method) => (
              <Card key={method.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{method.icon}</div>
                    <div>
                      <CardTitle className="text-2xl">{method.name}</CardTitle>
                      <CardDescription className="text-lg">
                        {method.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href={method.href}
                    target={method.name === 'Email' ? '_self' : '_blank'}
                    rel={method.name === 'Email' ? '' : 'noopener noreferrer'}
                    className="btn btn-primary"
                  >
                    {method.name === 'Email' ? 'Send Email' : `Visit ${method.name}`}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-content">
          <div className="section-header">
            <h2>Current Availability</h2>
            <p>What I&apos;m currently open to and working on</p>
          </div>
          
          <div className="space-y-6">
            {availability.map((item) => (
              <Card key={item.status}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.status}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                    <div className="ml-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        item.available
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {item.available ? 'Available' : 'Unavailable'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Response Time</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                I typically respond to emails and messages within 24-48 hours during weekdays. 
                For urgent matters or time-sensitive opportunities, please mention it in your message 
                and I&apos;ll do my best to get back to you sooner.
              </p>
              <p>
                If you&apos;re reaching out about a project or collaboration, please include:
              </p>
              <ul>
                <li>Brief description of the project or opportunity</li>
                <li>Timeline and scope</li>
                <li>Your contact information</li>
                <li>Any specific questions you have</li>
              </ul>
              <p>
                This helps me provide a more thoughtful and relevant response to your inquiry.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start a Conversation?</h2>
          <p>
            Whether you have a project idea, want to collaborate, or just want to say hello, 
            I&apos;d love to hear from you. Let&apos;s build something amazing together!
          </p>
          <div className="cta-buttons">
            <a
              href="mailto:hello@example.com"
              className="cta-btn-primary"
            >
              Send Me an Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
