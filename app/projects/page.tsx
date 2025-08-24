import MainLayout from '@/components/layout/MainLayout'
import { getProjectsData } from '@/lib/markdown'
import ProjectCard from '@/components/ui/ProjectCard'
import SearchBar from '@/components/ui/SearchBar'

export default function ProjectsPage() {
  const projects = getProjectsData()
  
  // Group projects by category
  const projectCategories = projects.reduce((acc, project) => {
    const category = project.technologies[0] || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(project)
    return acc
  }, {} as Record<string, typeof projects>)

  const categories = Object.keys(projectCategories)

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>My Projects</h1>
          <p>
            A collection of projects I&apos;ve built, from web applications to open-source tools. 
            Each project represents a learning opportunity and a chance to solve real-world problems.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section">
        <div className="section-content">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex-1 max-w-md">
              <SearchBar placeholder="Search projects..." />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="tag"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section section-alt">
        <div className="section-content">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                No Projects Yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                I&apos;m currently working on some exciting projects. Check back soon to see what I&apos;ve been building!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Statistics */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2>Project Statistics</h2>
            <p>A quick overview of my development activity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {projects.filter(p => p.githubUrl).length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {projects.filter(p => p.liveUrl).length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Live Demos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta-content">
          <h2>Have a Project in Mind?</h2>
          <p>
            I&apos;m always interested in hearing about new project opportunities. 
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="cta-buttons">
            <a
              href="/contact"
              className="cta-btn-primary"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
