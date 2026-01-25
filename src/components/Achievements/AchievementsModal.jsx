import { useEffect, useRef } from "react";
import "./AchievementsModal.css";

export default function AchievementsModal({ isOpen, onClose, achievement }) {
    const scrollRef = useRef(0);

    useEffect(() => {
        if (isOpen) {
            scrollRef.current = window.scrollY;

            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollRef.current}px`;
            document.body.style.width = "100%";
        } else {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollRef.current);
        }
    }, [isOpen]);

    if (!isOpen || !achievement) return null;

    return (
        <div className="achievement-overlay" onClick={onClose}>
            <span className="modal-hint">Clique fora para fechar</span>

            <div
                className="achievement-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="achievement-close"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    ×
                </button>

                <div className="achievement-media">
                    <img src={achievement.image} alt={achievement.title} />
                </div>

                <div className="achievement-content">
                    <div className="achievement-header">
                        <h3>{achievement.title}</h3>
                    </div>

                    <div className="achievement-body">
                        <p>{achievement.fullDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
