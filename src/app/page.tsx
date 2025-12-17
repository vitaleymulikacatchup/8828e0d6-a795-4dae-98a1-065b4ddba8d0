"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="plain"
      cardStyle="shadow-colored"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Gallery", id: "gallery" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Gallery Studio"
          bottomLeftText="Art & Photography"
          bottomRightText="info@gallerystudio.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="GALLERY STUDIO"
          description="Discover curated contemporary art and photography from emerging and established artists. Experience immersive exhibitions and exclusive collections in our carefully designed gallery spaces."
          buttons={[
            { text: "Explore Gallery", href: "#gallery" },
            { text: "Book Visit", href: "#contact" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765986227264-nxl1vrcy.jpg"
          imageAlt="Modern gallery interior with artwork displays"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Our Gallery Philosophy"
          description="We are dedicated to showcasing exceptional contemporary art and photography. Our mission is to create meaningful connections between artists and art enthusiasts through carefully curated exhibitions, educational programs, and intimate gallery experiences. Every artwork tells a story, and we believe in creating spaces where those stories can be heard."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765986230724-fojp5c7a.jpg"
          imageAlt="Gallery studio workspace"
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwelve
          features={[
            {
              id: "curation",
              label: "Curation",
              title: "Expert Art Selection and Presentation",
              items: ["Carefully vetted artworks", "Thematic exhibitions", "Artist partnerships"],
              buttons: [{ text: "View Collections", href: "#" }]
            },
            {
              id: "exhibition",
              label: "Exhibitions",
              title: "Immersive Gallery Experiences",
              items: ["Monthly rotating shows", "Opening receptions", "Virtual gallery tours"],
              buttons: [{ text: "Upcoming Events", href: "#" }]
            },
            {
              id: "services",
              label: "Services",
              title: "Complete Gallery Solutions",
              items: ["Art consultation", "Installation services", "Collection management"],
              buttons: [{ text: "Inquire Now", href: "#contact" }]
            }
          ]}
          animationType="slide-up"
          variant="card"
          title="Our Gallery Services"
          description="We provide comprehensive art services tailored to collectors, artists, and art enthusiasts"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          testimonials={[
            {
              id: "1",
              nameTitle: "Sarah Mitchell, Art Collector",
              quote: "The gallery has transformed my art collection experience. The curation is impeccable and the staff truly understands contemporary art. I visit regularly and always discover something extraordinary.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765986234748-rxsmo3a0.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              nameTitle: "James Chen, Emerging Artist",
              quote: "Exhibiting my work here was a dream come true. The gallery provided incredible support and exposure. They genuinely care about artists and their vision.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765986235739-lvfnic86.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              nameTitle: "Emma Rodriguez, Gallery Owner",
              quote: "Professional, passionate, and knowledgeable. This gallery sets the standard for what a contemporary art space should be. Highly recommended to anyone serious about art.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765986236697-txfutzor.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              nameTitle: "Marcus Thompson, Creative Director",
              quote: "Every time I walk through these doors, I'm inspired. The curatorial direction is consistently excellent and the atmosphere is welcoming and sophisticated.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765986237796-iw9nxaid.jpg",
              imageAlt: "Marcus Thompson"
            }
          ]}
          title="What Our Community Says"
          description="Hear from collectors, artists, and art enthusiasts who have experienced our gallery"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions about our exhibitions, or interested in featuring your work? We'd love to hear from you. Reach out and let's start a conversation about art."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765986238786-lbooauvl.jpg"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765986228484-u6bspg77.jpg"
          imageAlt="Gallery exhibition space"
          columns={[
            {
              title: "Gallery",
              items: [
                { label: "Current Exhibitions", href: "#" },
                { label: "Artists", href: "#" },
                { label: "Collections", href: "#" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "#" },
                { label: "Services", href: "#" },
                { label: "Events", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Email", href: "#" },
                { label: "Location", href: "#" },
                { label: "Hours", href: "#" }
              ]
            }
          ]}
          logoText="Gallery Studio"
          copyrightText="© 2025 Gallery Studio. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}