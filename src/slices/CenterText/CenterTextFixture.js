export const content = {
  type: 'center_text',
  primary: {
    bg_brand: false,
    overflow: 'none',
    center_text_small: false,
    center_title: 'Waarom zou je een website laten maken door Derow?',
    center_text: [
      {
        type: 'paragraph',
        text:
          'Jouw website krijgt een uniek design, waardoor je jouw bedrijf kan onderscheiden van je concurrenten. Een website krijgt dus zijn eigen looks en feels, wordt gebouwd met het doel tot verhogen van de conversie, wordt geoptimalieerd voor Google en kan jouw bedrijf meer naamsbekenheid geven. Daarbij is een website van Derow ideaal voor het weergeven van bijvoorbeeld jouw bedrijfs Portfolio of producten die aanbiedt via een webshop.',
        spans: [
          {
            start: 24,
            end: 36,
            type: 'strong',
          },
          {
            start: 199,
            end: 208,
            type: 'strong',
          },
          {
            start: 216,
            end: 231,
            type: 'strong',
          },
          {
            start: 268,
            end: 283,
            type: 'strong',
          },
          {
            start: 380,
            end: 390,
            type: 'strong',
          },
        ],
      },
      {
        type: 'paragraph',
        text:
          'Neem een kijkje op de blogs en zie hoe je jouw bedrijf naar het volgende niveau kunt krijgen met de unieke kwaliteiten van een website van Derow.',
        spans: [
          {
            start: 22,
            end: 27,
            type: 'hyperlink',
            data: {
              link_type: 'Web',
              url: 'https://derow.nl/blog',
            },
          },
          {
            start: 64,
            end: 80,
            type: 'strong',
          },
        ],
      },
    ],
    fields: [],
  },
};

export const contentBg = JSON.parse(JSON.stringify(content));
contentBg.primary.bg_brand = true;

export const contentSmall = JSON.parse(JSON.stringify(content));
contentSmall.primary.center_text_small = true;
contentSmall.primary.bg_brand = true;

export const contentWithButtons = JSON.parse(JSON.stringify(content));
contentWithButtons.fields = [
  {
    center_button_text: 'Bel ons',
    center_button_variant: 'primary',
    center_button_link: {
      _meta: {
        type: 'landing_page',
        uid: 'contact',
      },
    },
  },
  {
    center_button_text: 'Onze producten',
    center_button_variant: 'secondary',
    center_button_link: {
      _meta: {
        type: 'landing_page',
        uid: 'producten',
      },
    },
  },
];
