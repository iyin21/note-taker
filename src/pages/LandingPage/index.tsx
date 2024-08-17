import { useState } from "react"
import Button from "../../components/Button"
import { useEffect } from "react"

interface TextsInterface {
    id: number
    note: string
}
const LandingPage = () => {
    const [text, setText] = useState("")
    const [allTexts, setAllTexts] = useState<TextsInterface[]>([])
    const [edit, setEdit] = useState<number | null>(null)

    const handleSave = () => {
        if (edit !== null) {
            const newTexts = allTexts.map((item) =>
                item.id === edit ? { ...item, note: text } : item
            )
            setAllTexts(newTexts)
            setText("")
            setEdit(null)
            return
        }
        const newText = { id: new Date().getTime(), note: text }
        setAllTexts([...allTexts, newText])
        setText("")
    }

    useEffect(() => {
        const localList = localStorage.getItem("noteLists")
        const parsedList = localList ? JSON.parse(localList) : null

        if (parsedList) {
            setAllTexts(parsedList)
        }
    }, [])
    useEffect(() => {
        if (allTexts.length > 0) {
            const localList = JSON.stringify(allTexts)
            localStorage.setItem("noteLists", localList)
        }
    }, [allTexts])
    return (
        <div className="px-10 sm:px-28 lg:px-36 py-4">
            <h2 className="font-bold text-center text-[20px] mb-4">
                Text Editor
            </h2>
            <div className="border p-3 border-[#CECECC] rounded">
                <p className="">Add Note</p>
                <textarea
                    name="note"
                    rows={3}
                    value={text}
                    className="border-[#CECECC] border w-full p-2"
                    onChange={(e) => setText(e.target.value)}
                />
                <Button onClick={() => text && handleSave()}>
                    {edit !== null ? "Edit" : "Add"} text
                </Button>
            </div>
            <h3 className="text-center font-bold text-center text-[20px] my-4">
                Your Notes
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allTexts.map((item) => (
                    <div key={item.id} className="border p-4 rounded">
                        <p>{item.note}</p>
                        <div className="flex gap-4 mt-2">
                            <Button
                                onClick={() => {
                                    setText(item.note)
                                    setEdit(item.id)
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() =>
                                    setAllTexts(
                                        allTexts.filter(
                                            (newItem) => newItem.id !== item.id
                                        )
                                    )
                                }
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default LandingPage
