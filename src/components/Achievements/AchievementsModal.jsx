import "./AchievementsModal.css";

export default function AchievementsModal({ isOpen, onClose, achievement }) {
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


                {/* IMAGEM */}
                <div className="achievement-media">
                    <img src={achievement.image} alt={achievement.title} />
                </div>

                {/* CONTEÚDO */}
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
