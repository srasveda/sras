export const brand = {
  name: 'Srasveda',
  manufacturer: 'Shri Ram Ayurvedshala',
  whatsappNumber: '919255427911',
  email: 'srasveda@gmail.com',
  phone: '+91 92554 27911',
  address: 'Shri Ram Ayurvedshala, India',
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/womens-health', label: "Women's Health" },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];
