export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://your-domain.com/#person",
        name: "Lucid Dev",
        url: "https://your-domain.com",
        sameAs: [
          "https://github.com/lawrencenjeri4-lgtm",
          "https://whatsapp.com/channel/0029VbDbTKcG8l5JKqrsMS2f",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://your-domain.com/#website",
        url: "https://your-domain.com",
        name: "Lucid Dev",
        publisher: {
          "@id": "https://your-domain.com/#person",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
    }
