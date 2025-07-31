import { Download, FileText, Database, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const datasets = [
    {
      title: "CommonCrawl-GPT-4 Training Subset",
      description: "Filtered subset of CommonCrawl data used for large language model training",
      size: "2.3TB",
      downloads: "15,247",
      date: "2024-01-15",
      tags: ["NLP", "Web Crawl", "Training Data"],
    },
    {
      title: "Academic Paper Abstracts 2020-2024",
      description: "Comprehensive collection of academic abstracts from major journals",
      size: "45GB",
      downloads: "8,932",
      date: "2024-01-12",
      tags: ["Academic", "Text", "Research"],
    },
    {
      title: "Multi-Modal Vision-Language Dataset",
      description: "Paired image-text data for vision-language model training",
      size: "890GB",
      downloads: "12,456",
      date: "2024-01-10",
      tags: ["Vision", "Language", "Multi-Modal"],
    },
    {
      title: "Code Repository Analysis Dataset",
      description: "Structured data from 500K+ GitHub repositories with metadata",
      size: "156GB",
      downloads: "6,789",
      date: "2024-01-08",
      tags: ["Code", "Programming", "Analysis"],
    },
  ]

  const papers = [
    {
      title: "Scaling Laws for Neural Language Models",
      authors: "Kaplan, J., McCandlish, S., Henighan, T., et al.",
      venue: "arXiv:2001.08361",
      date: "2024-01-14",
      citations: "2,847",
    },
    {
      title: "Attention Is All You Need",
      authors: "Vaswani, A., Shazeer, N., Parmar, N., et al.",
      venue: "NIPS 2017",
      date: "2024-01-12",
      citations: "45,123",
    },
    {
      title: "BERT: Pre-training of Deep Bidirectional Transformers",
      authors: "Devlin, J., Chang, M., Lee, K., Toutanova, K.",
      venue: "NAACL 2019",
      date: "2024-01-10",
      citations: "38,567",
    },
  ]

  const archives = [
    {
      title: "Reddit Discussion Archives",
      description: "Comprehensive archive of Reddit discussions from 2005-2024",
      size: "1.2TB",
      posts: "2.1B",
      date: "2024-01-15",
    },
    {
      title: "News Article Collection",
      description: "Global news articles from major publications",
      size: "340GB",
      posts: "45M",
      date: "2024-01-13",
    },
    {
      title: "Social Media Sentiment Dataset",
      description: "Annotated social media posts for sentiment analysis",
      size: "78GB",
      posts: "12M",
      date: "2024-01-11",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Database className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Open Neural Dataset Archive</h1>
                <p className="text-sm text-gray-600">Research-grade datasets for machine learning</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#datasets" className="text-gray-700 hover:text-blue-600">
                Datasets
              </a>
              <a href="#papers" className="text-gray-700 hover:text-blue-600">
                Papers
              </a>
              <a href="#archives" className="text-gray-700 hover:text-blue-600">
                Archives
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advancing AI Research Through Open Data</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access curated, research-grade datasets, academic papers, and web archives to accelerate your machine
              learning research and development.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-5 w-5" />
                Browse Datasets
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dataset */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Dataset</h3>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">Large-Scale Web Crawl Dataset v3.0</CardTitle>
                  <CardDescription className="text-lg">
                    Comprehensive web crawl data spanning 50M+ domains with advanced filtering and deduplication
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="ml-4">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Dataset Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Size:</span>
                      <span className="font-mono">4.7TB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Documents:</span>
                      <span className="font-mono">2.1B</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Languages:</span>
                      <span className="font-mono">127</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Downloads:</span>
                      <span className="font-mono">23,456</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Applications</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Language Modeling</Badge>
                    <Badge variant="outline">Information Retrieval</Badge>
                    <Badge variant="outline">Knowledge Extraction</Badge>
                    <Badge variant="outline">Web Analysis</Badge>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Dataset (4.7TB)
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <FileText className="mr-2 h-4 w-4" />
                      View Documentation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Datasets */}
      <section id="datasets" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest Datasets</h3>
            <Button variant="outline">
              View All Datasets
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {datasets.map((dataset, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{dataset.title}</CardTitle>
                    <Badge variant="secondary">{dataset.size}</Badge>
                  </div>
                  <CardDescription>{dataset.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dataset.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {dataset.date}
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {dataset.downloads} downloads
                    </div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section id="papers" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Research Papers</h3>
            <Button variant="outline">
              View All Papers
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {papers.map((paper, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{paper.title}</h4>
                      <p className="text-gray-600 mb-2">{paper.authors}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{paper.venue}</span>
                        <span>•</span>
                        <span>{paper.date}</span>
                        <span>•</span>
                        <span>{paper.citations} citations</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        BibTeX
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scraped Archives */}
      <section id="archives" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Scraped Archives</h3>
            <Button variant="outline">
              View All Archives
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {archives.map((archive, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{archive.title}</CardTitle>
                  <CardDescription>{archive.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span className="font-mono">{archive.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Posts:</span>
                      <span className="font-mono">{archive.posts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Updated:</span>
                      <span className="font-mono">{archive.date}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Access Archive
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-blue-400 mr-2" />
                <span className="font-bold">ONDA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Open Neural Dataset Archive - Advancing AI research through open data access.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Best Practices
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mailing List
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Data License
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-yellow-400">⚠️ Research Disclaimer</h4>
              <p className="text-sm text-gray-300">
                All datasets and materials provided by the Open Neural Dataset Archive are made available "as-is" for
                research and educational purposes only. Users are responsible for ensuring compliance with applicable
                laws, regulations, and ethical guidelines. The archive does not guarantee the accuracy, completeness, or
                suitability of any dataset for specific purposes. Commercial use may require additional licensing. By
                downloading any material, you agree to cite the original sources and acknowledge the Open Neural Dataset
                Archive in your research.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
              <p>© 2024 Open Neural Dataset Archive. All rights reserved.</p>
              <p>Last updated: January 15, 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
