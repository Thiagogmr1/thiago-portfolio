import "./AchievementsModal.css";

export default function AchievementsModal({ isOpen, onClose, achievement }) {
    if (!isOpen || !achievement) return null;

    return (
        <div className="achievement-overlay" onClick={onClose}>
            <div className="achievement-modal" onClick={(e) => e.stopPropagation()}>
                <div className="achievement-media">
                    <img src={achievement.image} alt={achievement.title} />
                </div>

                <div className="achievement-content">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.fullDescription}</p>
                </div>
            </div>
        </div>
    );
}
