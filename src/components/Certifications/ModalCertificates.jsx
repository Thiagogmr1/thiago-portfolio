import "./modalCertificates.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 120 : -120,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? -120 : 120,
        opacity: 0,
    }),
};

export default function ModalCertificates({
    certificates,
    currentIndex,
    onClose,
    onNext,
    onPrev,
    direction,
}) {
    const [visualIndex, setVisualIndex] = useState(currentIndex);

    // 🔒 trava scroll preservando posição (mesma lógica da Navbar mobile)
    useEffect(() => {
        const scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollY);
        };
    }, []);

    if (!certificates || certificates.length === 0) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <span className="modal-hint">Clique fora para fechar</span>

            <div
                className="modal-carousel"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>


                <div className="nav-mobile">
                <button className="nav prev" onClick={onPrev}>
                    ‹
                </button>
                <button className="nav next" onClick={onNext}>
                    ›
                </button>
                </div>


                <div className="carousel-track">
                    {certificates[visualIndex - 1] && (
                        <img
                            src={certificates[visualIndex - 1]}
                            className="certificate preview left"
                            alt=""
                        />
                    )}

                    <div className="active-slot">
                        <AnimatePresence
                            mode="wait"
                            custom={direction}
                            onExitComplete={() => {
                                setTimeout(() => {
                                    setVisualIndex(currentIndex);
                                }, 0);
                            }}
                        >
                            <motion.img
                                key={currentIndex}
                                src={certificates[currentIndex]}
                                className="certificate active"
                                alt="Certificado"
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.35,
                                    ease: "easeInOut",
                                }}
                            />
                        </AnimatePresence>
                    </div>

                    {certificates[visualIndex + 1] && (
                        <img
                            src={certificates[visualIndex + 1]}
                            className="certificate preview right"
                            alt=""
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
