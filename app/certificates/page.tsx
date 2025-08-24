import MainLayout from '@/components/layout/MainLayout'
import { getCertificatesData } from '@/lib/markdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'

export default function CertificatesPage() {
  const certificates = getCertificatesData()

  // Group certificates by year
  const certificatesByYear = certificates.reduce((acc, cert) => {
    const year = new Date(cert.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(cert)
    return acc
  }, {} as Record<number, typeof certificates>)

  const years = Object.keys(certificatesByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Certifications</h1>
          <p>
            A collection of professional certifications and achievements that demonstrate 
            my commitment to continuous learning and skill development.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="section">
        <div className="section-content">
          {certificates.length > 0 ? (
            <div className="space-y-16">
              {years.map((year) => (
                <div key={year}>
                  <h2 className="text-3xl font-bold text-center mb-8">
                    {year}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificatesByYear[Number(year)].map((cert, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-xl">{cert.title}</CardTitle>
                          <CardDescription className="text-lg">
                            Issued by {cert.issuer}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            {new Date(cert.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                          {cert.url && (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-primary-600 dark:text-primary-400 hover:underline font-medium"
                            >
                              View Certificate →
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                No Certificates Yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                I&apos;m currently working on earning new certifications and skills. 
                Check back soon to see my latest achievements!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      {certificates.length > 0 && (
        <section className="section section-alt">
          <div className="section-content">
            <div className="section-header">
              <h2>Certification Overview</h2>
              <p>A summary of my learning achievements</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {certificates.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Total Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {new Set(certificates.map(c => c.issuer)).size}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Issuing Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {years.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Years of Learning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {certificates.filter(c => c.url).length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Verifiable Online</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Learning Philosophy */}
      <section className="section">
        <div className="section-content">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">My Learning Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                I believe that continuous learning is essential in the fast-paced world of technology. 
                Certifications are not just pieces of paper—they represent dedicated time, effort, and 
                commitment to mastering new skills and staying current with industry standards.
              </p>
              <p>
                Each certification I earn is carefully chosen to align with my career goals and the 
                technologies I&apos;m passionate about. Whether it&apos;s mastering a new programming language, 
                understanding cloud infrastructure, or learning best practices for software development, 
                I approach each learning opportunity with enthusiasm and determination.
              </p>
              <p>
                Beyond formal certifications, I also engage in self-directed learning through online 
                courses, open-source contributions, and hands-on project work. This combination of 
                structured learning and practical experience helps me build a well-rounded skill set 
                that I can apply to real-world challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Learn Together?</h2>
          <p>
            I&apos;m always excited to connect with fellow learners and developers. 
            Let&apos;s share knowledge, discuss new technologies, and grow together!
          </p>
          <div className="cta-buttons">
            <a
              href="/contact"
              className="cta-btn-primary"
            >
              Get In Touch
            </a>
            <Link
              href="/blogs"
              className="cta-btn-secondary"
            >
              Read My Blog
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
