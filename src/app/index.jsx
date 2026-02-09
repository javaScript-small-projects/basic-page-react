import { createRoot } from "react-dom/client"
import Navbar from "./Navbar.jsx"
import Main from "./Main.jsx"

const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <div className="container">
            <Navbar />

            <Main
                title="Fun facts about React"
                facts={[
                    "Was first released in 2013",
                    "Was originally created by Jordan Walke",
                    "Has well over 100k stars on GitHub",
                    "Is maintained by Meta",
                ]}
            />

            <Main
                title="Why learn React?"
                facts={[
                    "Component-based architecture",
                    "Strong ecosystem",
                    "High demand on the job market",
                ]}
            />
        </div>
    )
}

root.render(<Page />)
