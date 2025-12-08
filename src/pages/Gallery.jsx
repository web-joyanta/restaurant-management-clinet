import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "motion/react";

// Gallery images
const galleryImages = [
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800", alt: "Delicious pasta" },
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800", alt: "Fresh pizza" },
    { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800", alt: "Healthy salad" },
    { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", alt: "Gourmet steak" },
    { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800", alt: "Breakfast bowl" },
    { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800", alt: "Burger delight" },
    { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800", alt: "Pancakes" },
    { src: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800", alt: "Sushi platter" },
    { src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800", alt: "Tacos" },
    { src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800", alt: "Dessert" },
    { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", alt: "Soup" },
    { src: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800", alt: "Seafood" }
];

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="bg-gray-50 pb-20">
            <div className="bg-custom-orange text-white text-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-2">
                    <h2 className="text-5xl font-bold">Gallery</h2>
                    <p className="text-lg font-mono pt-2">Explore our delicious food collection</p>
                </motion.div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group animate-fade-in"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Single Lightbox */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={galleryImages.map(img => ({ src: img.src, alt: img.alt }))}
            />
        </div>
    );
};

export default Gallery;
