import { FileText, Mail, Github, Linkedin } from "lucide-react";
import { type FooterSection } from "@/types";

const footerSections: FooterSection[] = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "/" },
      { label: "Buscar", href: "/search" },
      { label: "Sobre", href: "/about" },
      { label: "Contato", href: "/contact" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Guia de Uso", href: "/guide" },
      { label: "Blog", href: "/blog" },
      { label: "Atualizações", href: "/changelog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "/terms" },
      { label: "Política de Privacidade", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

/**
 * Enhanced footer component with multiple sections
 * Includes:
 * - Navigation links
 * - Resources
 * - Legal information
 * - Social links
 * - Copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-divider mt-24 py-12 bg-content1">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-lg">Helper MedResidency</h3>
            </div>
            <p className="text-foreground-600 text-sm">
              Plataforma completa para consulta de notas de corte de residências
              médicas em todo o Brasil.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-bold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-foreground-600 text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-divider pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center text-foreground-600 text-sm">
              © {currentYear} Helper MedResidency. Todos os direitos
              reservados.
            </p>
            <p className="text-foreground-600 text-xs">
              Feito com ❤️ para estudantes de medicina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
