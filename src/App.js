 import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          style={{
            color: '#D4AF37',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: 0
          }}
        >
          Itri Veil
        </motion.h1>
        
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <a href={`#${item.toLowerCase()}`} style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="home" style={{
      height: '100vh',
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      position: 'relative'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          Experience Fine Dining
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            color: '#D4AF37'
          }}
        >
          Authentic Mediterranean Cuisine in the Heart of Monastir
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            background: '#D4AF37',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            color: '#1a1a1a',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
        >
          View Our Menu
        </motion.button>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          fontSize: '2rem',
          color: '#D4AF37'
        }}
      >
        ↓
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" style={{
      padding: '5rem 2rem',
      background: '#1a1a1a',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '3rem', color: '#D4AF37', marginBottom: '1rem' }}>Our Story</h2>
          <div style={{ width: '80px', height: '4px', background: '#D4AF37', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
              Since 2010, Resto Luxe has been serving the finest Mediterranean cuisine in Monastir. 
              Our passion for authentic flavors and fresh ingredients creates an unforgettable dining experience.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
              Our award-winning chefs combine traditional recipes with modern techniques, 
              delivering dishes that honor our heritage while embracing innovation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmin(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}
        >
          {[
            { num: '13+', label: 'Years Experience' },
            { num: '50K+', label: 'Happy Customers' },
            { num: '200+', label: 'Signature Dishes' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                padding: '2rem',
                borderRadius: '10px',
                border: '2px solid #D4AF37'
              }}
            >
              <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', margin: '0 0 0.5rem 0' }}>{stat.num}</h3>
              <p style={{ color: '#ccc', margin: 0 }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Menu = () => {
  const menuItems = [
    { name: 'Grilled Lamb Chops', desc: 'Tender French-trimmed lamb chops served with velvety buttered mashed potatoes.', price: '99 TND', img: 'https://i.pinimg.com/1200x/07/35/d8/0735d8c0d4091b4bf54d0adf7b14bd73.jpg' },
    { name: 'Truffle Tagliatelle', desc: 'Fresh tagliatelle coated in a creamy black-truffle sauce, finished with shaved truffle.', price: '85 TND', img: 'https://i.pinimg.com/736x/b5/ae/51/b5ae51cf0f696119c6c4513f2dd3c42d.jpg' },
    { name: 'Classic French Onion Soup', desc: 'Caramelized onion broth topped with a toasted baguette and gratinéed Gruyère', price: '42 TND', img: 'https://i.pinimg.com/1200x/68/7a/bc/687abcac62750ef3031bc92585d0f883.jpg' },
    { name: 'Beef Lasagna', desc: 'Layers of pasta, slow-cooked beef ragù, béchamel, and aged Parmesan', price: '55 TND', img: 'https://i.pinimg.com/1200x/67/97/69/6797697c59b95279ad2da35c18bc4fc1.jpg' },
    { name: 'Grilled Escargot', desc: 'Snails prepared with garlic-parsley butter and lightly grilled for a refined finish', price: '44 TND', img: 'https://i.pinimg.com/736x/2b/cb/32/2bcb32289c97a5eb17c4bb87facfc220.jpg' },
    { name: 'Lobster Linguine', desc: 'Linguine tossed in a rich lobster bisque sauce with fresh lobster meat', price: '130 TND', img: 'https://i.pinimg.com/736x/37/00/71/370071806bd907d416f3029a54c6c9de.jpg' },
    { name: 'Seafood Sauté', desc: 'Fresh mussels and shrimp simmered in a white-wine, garlic, and herb reduction', price: '78 TND', img: 'https://i.pinimg.com/736x/ac/ca/47/acca476461b4747a91ef8100c59ecdea.jpg' },
    { name: 'Fresh Oysters', desc: 'Chilled oysters on ice served with lemon, mignonette, and fine sea salt', price: '12 TND', img: 'https://i.pinimg.com/736x/4f/df/87/4fdf877da7ecf0f8aad8f5a98debf32a.jpg' },
    { name: 'Berry Cheesecake', desc: 'Silky baked cheesecake topped with a vibrant mixed-berry coulis', price: '23 TND', img: 'https://i.pinimg.com/736x/46/f6/e4/46f6e467fb178a59b5fdbf84dc43e898.jpg' },
    { name: 'Tiramisu', desc: 'Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.', price: '22 TND', img: 'https://i.pinimg.com/736x/14/18/a9/1418a94724fd9f32a084fff878381f4e.jpg' },
    {name: 'Chocolate Fondant        ', desc: 'Warm molten-center chocolate cake served with vanilla ice cream', price: '25 TND', img: 'https://i.pinimg.com/736x/d7/62/8f/d7628f814b7522b36a7f03a922397777.jpg' },
    {name: 'Crème Brûlée', desc: 'Velvety vanilla custard topped with a crisp caramelized sugar crust', price: '32 TND', img: 'https://i.pinimg.com/1200x/98/b5/b3/98b5b33716a656d0e57bf08f23091f19.jpg' },
  ];


  return (
    <section id="menu" style={{
      padding: '5rem 2rem',
      background: '#2a2828ff',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '3rem', color: '#D4AF37', marginBottom: '1rem' }}>Our Menu</h2>
          <div style={{ width: '80px', height: '4px', background: '#D4AF37', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(217, 192, 107, 0.3)' }}
              viewport={{ once: true }}
              style={{
                background: '#232222ff',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
            >
              <img src={item.img} alt={item.name} style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }} />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, color: '#D4AF37', fontSize: '1.3rem' }}>{item.name}</h3>
                  <span style={{ color: '#D4AF37', fontSize: '1.2rem', fontWeight: 'bold' }}>{item.price}</span>
                </div>
                <p style={{ margin: 0, color: '#999' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600'
  ];

  return (
    <section id="gallery" style={{
      padding: '5rem 2rem',
      background: '#1a1a1a',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '3rem', color: '#D4AF37', marginBottom: '1rem' }}>Gallery</h2>
          <div style={{ width: '80px', height: '4px', background: '#D4AF37', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              style={{
                overflow: 'hidden',
                borderRadius: '10px',
                cursor: 'pointer',
                height: '250px'
              }}
            >
              <img src={img} alt={`Gallery ${i + 1}`} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" style={{
      padding: '5rem 2rem',
      background: '#0f0f0f',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '3rem', color: '#D4AF37', marginBottom: '1rem' }}>Visit Us</h2>
          <div style={{ width: '80px', height: '4px', background: '#D4AF37', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Information</h3>
            <div style={{ lineHeight: '2', color: '#ccc' }}>
              <p><strong>Address:</strong> 123 Marina Boulevard, Monastir 5000, Tunisia</p>
              <p><strong>Phone:</strong> +216 73 123 456</p>
              <p><strong>Email:</strong> info@itriveil.tn</p>
              <p><strong>Hours:</strong> Daily 12:00 PM - 11:00 PM</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Reserve a Table</h3>
            <input type="text" placeholder="Your Name" style={{
              padding: '1rem',
              background: '#1a1a1a',
              border: '2px solid #333',
              borderRadius: '5px',
              color: 'white',
              fontSize: '1rem'
            }} />
            <input type="email" placeholder="Your Email" style={{
              padding: '1rem',
              background: '#1a1a1a',
              border: '2px solid #333',
              borderRadius: '5px',
              color: 'white',
              fontSize: '1rem'
            }} />
            <input type="tel" placeholder="Phone Number" style={{
              padding: '1rem',
              background: '#1a1a1a',
              border: '2px solid #333',
              borderRadius: '5px',
              color: 'white',
              fontSize: '1rem'
            }} />
            <textarea placeholder="Special Requests" rows="4" style={{
              padding: '1rem',
              background: '#1a1a1a',
              border: '2px solid #333',
              borderRadius: '5px',
              color: 'white',
              fontSize: '1rem',
              resize: 'vertical'
            }}></textarea>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1rem',
                background: '#D4AF37',
                border: 'none',
                borderRadius: '5px',
                color: '#1a1a1a',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Reserve Now
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{
      background: '#000',
      color: '#999',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <p style={{ margin: 0 }}>© 2025 Resto Itri Veil. All rights reserved.</p>
      <p style={{ margin: '0.5rem 0 0 0' }}>Made with ❤️ in Monastir, Tunisia</p>
    </footer>
  );
};

export default function App() {
  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      margin: 0,
      padding: 0
    }}>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}