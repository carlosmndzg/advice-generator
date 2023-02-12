export default function Advice({ advice }) {
    const { id, advice: adviceText } = advice?.slip

    return (
        <div className="advice__container">
            <h2 className="advice__number">ADVICE #{id}</h2>
            <p className="advice__text">"{adviceText}"</p>
        </div>
    )
}
