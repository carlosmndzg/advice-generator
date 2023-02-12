import { useAdvice } from '../hooks/useAdvice'
import Advice from './Advice'
import patternDividerMobile from '../assets/pattern-divider-mobile.svg'
import patternDividerDesktop from '../assets/pattern-divider-desktop.svg'

export default function App() {
    const { advice, newAdvice } = useAdvice()

    return (
        <div className="app__container">
            {advice && <Advice advice={advice} />}
            <picture>
                <source
                    srcSet={patternDividerDesktop}
                    media="(min-width: 43.75em)"
                />
                <img src={patternDividerMobile} alt="Pattern divider" />
            </picture>
            <button
                className="btn"
                aria-label="Generate new advice button"
                onClick={newAdvice}
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                        fill="#202733"
                    />
                </svg>
            </button>
        </div>
    )
}
